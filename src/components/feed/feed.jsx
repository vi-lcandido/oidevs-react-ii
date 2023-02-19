import * as S from "./style";
import { useState, useEffect } from "react";
import { getImageFromApi } from "../../services";
import { Loading } from "../../ui/loading";
import { Text } from "../../ui/text";
import { useContext } from "react";
import { instaContext } from "../../App";

export const Feed = () => {
  const {myState, myDispatch} = useContext(instaContext);
  // const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      setIsLoading(true);
      try {
        const response = await getImageFromApi("photos");
        myDispatch({type: "add_feed_photos", payload: response })
        setPhotos(response);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleImgClick = (imgId) => {
    myDispatch({type: "add_open_image", payload: imgId})
    myDispatch({type: "change_current_page", payload: "fullpagephoto"})

  }

  return (
    <S.SectionBody>
      <S.Container>
        {isLoading && <Loading />}
        {/* {hasError && <Text>Deu ruim</Text>} */}
        {myState.user.photos.map((photo) => (
          <S.FeedPhoto key={photo.id} onClick={() => handleImgClick(photo?.id)}>
            <S.Image src={photo.urls.small} />
          </S.FeedPhoto>
        ))}
      </S.Container>
    </S.SectionBody>
  );
};

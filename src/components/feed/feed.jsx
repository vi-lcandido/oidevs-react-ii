import { useState, useEffect } from "react";
import * as S from "./style";
import { getImageFromApi } from "../../services";

export const Feed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      const response = await getImageFromApi("photos");
      setPhotos(response);
    };
    makeRequest();
  }, []);
  return (
    <S.SectionBody>
      <S.Container>
        {photos.map((photo) => (
          <S.FeedPhoto key={photo.id}>
            <S.Image src={photo.urls.small} />
          </S.FeedPhoto>
        ))}
      </S.Container>
    </S.SectionBody>
  );
};

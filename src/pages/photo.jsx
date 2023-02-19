import { useContext } from "react";
import { instaContext } from "../App";
import { Text } from "../ui/text";

export const Photo = () => {
  const { myState } = useContext(instaContext);
  return (
    <div>
      <img src={myState.user.fullPageImg.urls.regular} />
    </div>
  );
};

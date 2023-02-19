import { useContext } from "react";
import { instaContext } from "../App";
import { Button } from "../ui/button/button";
import { Text } from "../ui/text";

export const Photo = () => {
  const { myState, myDispatch } = useContext(instaContext);

  return (
    <div>
      <Button
        onClick={() => {
          myDispatch({ type: "change_current_page", payload: "home" });
        }}
      >
        Voltar para Home
      </Button>
      <br />
      <img src={myState.user.fullPageImg.urls.regular} />
    </div>
  );
};

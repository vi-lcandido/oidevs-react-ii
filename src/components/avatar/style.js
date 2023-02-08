import styled from "styled-components";

//esse componente ajuda reutilizar o mesmo componente do avatar prinipal pros higlights por meio da verificação com props.size
export const Container = styled.div((props) => {
  return {
    overflow: "hidden",
    borderRadius: "50%",
    ...(props.size === "small" ? smallAvatar : deafaultAvatar),
  };
});

const deafaultAvatar = {
  width: "150px",
  height: "150px",
};

const smallAvatar = {
  width: "90px",
  height: "90px",
};

export const Image = styled.img``;

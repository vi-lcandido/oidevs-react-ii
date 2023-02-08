import styled from "styled-components";

// export const Container = styled.div((props) => {
  //   return {
    //     border: "1px solid red",
    //     overflow: "hidden",
    //     borderRadius: "50%",
    //     ...(props.size === "small" ? smallAvatar : deafaultAvatar),
    //     ...(props.border === "border" ? "padding: 3px;" : ""),
    //     ...(props.border === "border" ? "color: green" : ""),
    //   };
    // });
    
    // const deafaultAvatar = {
      //   width: "150px",
      //   height: "150px",
      // };
      
      // const smallAvatar = {
        //   width: "90px",
        //   height: "90px",
        // };
        
//esse componente ajuda reutilizar o mesmo componente do avatar prinipal pros higlights por meio da definição de propriedades size usando width e height
export const Container = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  /* border: 0.2px solid red; */
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

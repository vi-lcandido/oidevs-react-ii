import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 70%;
margin:5% auto;
padding: 20px;
border-radius: 10px;
background-color: #000;
border: 1px solid #262626;
`

export const Box = styled.div`
margin: 20px 0;
/* border: 1px solid yellow; */
width: ${(props) => `${props.size}%`};
`

export const Form = styled.section`
/* border: 1px solid red; */
display: flex;
flex-direction: column;
`

export const InputContainer = styled.div`
/* border: 1px solid red; */
width: 100%;    
margin: 27px 0 0;
input{
    /* width: 100% ; */
    height: 27px;
    border-radius: 5px;
    border: 0;
    padding:8px;
}
`

export const Custominput = styled.input``


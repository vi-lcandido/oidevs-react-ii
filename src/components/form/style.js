import styled from "styled-components";


export const FormContainer = styled.section`
/* border: 1px solid yellow; */
display: flex;
flex-direction: column;
`
export const Label = styled.label`
color: ${(props) => props.color};
/* border: 1px solid red; */
margin-top: 20px;
`

export const InputContainer = styled.div`
width: 100%;   
margin: 10px 0 7px;
/* border: 1px solid red; */
box-sizing: border-box;
`

export const Custominput = styled.input`
width: 100%;
background-color: ${(props) => props.bgcolor || "#1a1919"};
color: #a8a8a8;
border: 1px solid grey;
border-radius: 5px;
padding:8px;
&:hover{
    border: 1px solid #2189ce; 
}
`


import styled from "styled-components";

const SampleButton=styled.button`
border:solid 2px red;
background-color:green;
color:orange;
padding:2rem 4rem;
& :hover{
    background:yellowgreen,
    color:white
}
`
export {SampleButton}
import styled from "styled-components"
import buttonbg from './wdblock.svg'



export const StyledContact = styled.div `
display:flex;
border: 20px solid transparent;
border-image: url(${buttonbg}) 20 stretch;
margin: 28px auto;
min-width: 250px;
max-width: 600px;
align-items:center;
justify-content:center;

img{
    margin-right:30px;
    
}



@media (max-width: ${({ theme }) => theme.mobile}) {
   
    margin:30px 0 0 0;
  }
`


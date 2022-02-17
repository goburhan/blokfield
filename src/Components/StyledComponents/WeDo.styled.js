import styled from "styled-components"
import buttonbg from './wdblock.svg'

export const StyledWeDo = styled.div `
display:flex;
flex-direction: column;
margin:8% 2% 8% 2%;

@media (max-width: ${({ theme }) => theme.mobile}) {
    text-align:center;
     
}
`;

export const WeDoContainer = styled.div `
border: 20px solid transparent;
border-image: url(${buttonbg}) 20 stretch;
margin:15px;
min-width: 250px;
max-width: 750px;
@media (max-width: ${({ theme }) => theme.mobile}) {
   
    margin:0px;
  }
`
export const WeDoCard = styled.div `
display: flex;
  align-items: center;
  justify-content:center;

  margin: 0px 0px 0px ${({ layout }) => layout || '0%'};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin:20px 0 0 0px;
  }
`


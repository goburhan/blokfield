import styled from "styled-components"
import buttonbg from './wdblock.svg'

export const StyledButton = styled.button`
background-color: transparent;
border: 20px solid transparent;
border-image: url(${buttonbg}) 20 stretch;
color:white;
padding:0px 10px;

margin-left: ${(props) => props.marginleft} ;

`

export const StyledRead = styled(StyledButton)`
@media (max-width: ${({ theme }) => theme.mobile}) {
margin: 18px 0 20% 26%;
}
`
;
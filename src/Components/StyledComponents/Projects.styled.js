import styled from "styled-components"
import projectbg from './projectbg.png'

export const StyledProjects = styled.div`
text-align:center;
margin-top:10%;
justify-content:center;
align-items:center;

display:flex;
flex-wrap:wrap;
gap:28px;
padding: 0px 22% 0px 22%;

@media (max-width: ${({ theme }) => theme.mobile}) {
    padding:0px 20px ;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding:0px 20px ;
  }
  @media (max-width: ${({ theme }) => theme.laptops}) {
    padding:0px 5% 0px 5%;
  }
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
    padding:0px 10% 0px 10%;
  }
`;

export const ProjectCard = styled.div`
background-image: url(${projectbg});
background-repeat:no-repeat;
background-size:100% 100%;
padding:25px;

img{
    max-width:200px;
    min-width:200px;
}

`;


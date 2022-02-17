import styled from "styled-components";
import partnerbg from "./partners.png";

export const PartnerCard = styled.div`
  background-image: url(${partnerbg});
  background-repeat: no-repeat;
  background-size: contain;
  width:260px; 
  height: 160px; 
  padding:30px;

  img {
    min-width: 250px;

  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const PartnerSection = styled.div`
padding: 0px 12% 0px 18%;
`;

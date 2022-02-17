import styled from "styled-components";

export const Text = styled.text`
  font-size: ${({ fontsize }) => fontsize || "22px"};
  line-height: 24px;
  text-align: ${(props) => props.align};
  display: block;
  color: ${(props) => props.color || "#fff"};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    img {
      margin: 10% 0 2% 0;
      margin-left: calc((100% / 2) - 90px);
    }
  }
`;

export const Title = styled(Text)`
  font-size: 52px;
  line-height: 42px;
  color: white;
  margin: ${(props) => props.margin};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 36px;
    text-align: center;
  }
`;

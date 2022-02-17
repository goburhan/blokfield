import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: rgba(0, 0, 20, 0.2);
  color: #fff;
  backdrop-filter: blur(40px);
  position: fixed;
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100vw;
  text-align:center;
  align-items: center;
  padding: 0px 35px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 90px;
    justify-content: center;
    flex-wrap:no-wrap;
  }
`;

export const Logo = styled.img`
  margin: 10px 10px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export default StyledHeader;

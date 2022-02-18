import React from "react";
import { Logo, StyledHeader, Nav } from "./StyledComponents/Header.styled";
import { Container } from "./StyledComponents/Container.styled";
import { StyledButton } from "./StyledComponents/StyledButton";
import { Flex } from "./StyledComponents/Flex.styled";

const navigation = [
  { name: "Projects", href: "#projects" },
  { name: "Partners", href: "#partners" },
  { name: "About Us", href: "#about" },
  { name: "What We Do", href: "#whatwedo" },
];

export default function Navbar() {
  return (
    <StyledHeader>
      <Nav >
        <Logo src="/images/mainlogo.svg" />

        <Flex >
          {navigation.map((item) => (
            <ul>
              <li>
                <a href={item.href}>{item.name}</a>
              </li>
            </ul>
          ))}
        </Flex>
        <StyledButton >
          <a href="#contact">Contact</a>
        </StyledButton>
      </Nav>
    </StyledHeader>
  );
}

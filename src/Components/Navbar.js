import React from "react";
import { Logo, StyledHeader, Nav } from "./StyledComponents/Header.styled";
import { Container } from "./StyledComponents/Container.styled";
import { StyledButton } from "./StyledComponents/StyledButton";
import { Flex } from "./StyledComponents/Flex.styled";

const navigation = [
  { name: "Projects", href: "#projects", current: true },
  { name: "Partners", href: "#partners", current: false },
  { name: "About Us", href: "#about", current: false },
  { name: "What We Do", href: "#whatwedo", current: false },
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

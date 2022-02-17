import { Title, Text } from "./StyledComponents/Text.styled";
import { Flex } from "./StyledComponents/Flex.styled";
import { Container } from "./StyledComponents/Container.styled";
import { StyledAbout } from "./StyledComponents/About.styled";

export default function About() {
  return (
    <StyledAbout>
      <section id="about">
        <Flex  justify="center">
          <Title>About Us</Title>
        </Flex>
          <Flex margin="8%  0 160px" >
            <Text fontsize="1.5rem" color="white" align="left">
              <img
                src="images/bflogo.svg"
                alt="welcome"
              />
              <br />
              Blokfield, a company specializing in blockchain technology, is
              taking the lead in continuous innovation in the fields of DeFi,
              Game and Reits after a long business preparation period. We
              provide customers with a more efficient crypto asset management
              service with unprecedented attempts and technologies. We are
              growing into a company that pursues safe and continuous service
              trough more communication and gradual service improvement than any
              other company.
            </Text>
            <img
              src="images/bfmain.png"
              alt="welcome"
              className=" sm:hidden lg:block ml-48 mr-24 "
            />
          </Flex>
      </section>
    </StyledAbout>
  );
}

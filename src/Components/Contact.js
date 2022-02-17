import { Container } from "./StyledComponents/Container.styled";
import { Title, Text } from "./StyledComponents/Text.styled";
import { Flex } from "./StyledComponents/Flex.styled";
import {
  StyledWeDo,
  WeDoContainer,
  WeDoCard,
} from "./StyledComponents/WeDo.styled";
import {StyledContact} from "./StyledComponents/Contact.styled"

export default function Contact() {
  return (
    <section id="contact">
      <Container>
        <Flex margin="8% 0 4% 0" justify="center">
          <Title>Contact</Title>
        </Flex>

        <Text align="center">
          We are always on lookout for questions , buisness partnerships and offers regarding Blokfield projects.
        </Text>

          <StyledContact>
          <img src="images/mail.png"  />
          <Text align="center">contact@blokfield.io</Text>
          </StyledContact>
      </Container>
    </section>
  );
}

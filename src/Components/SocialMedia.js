import { Container } from "./StyledComponents/Container.styled";
import { Title } from './StyledComponents/Text.styled'
import { Flex } from "./StyledComponents/Flex.styled";

export default function SocialMedia() {

  const socials =  [
    {
      name:"s1"
    },
    {
      name:"s2"
    },
    {
      name:"s3"
    },
    {
      name:"s4"
    },
  ]

  return (
    <>
      <Flex margin="8% 0 4% 0" justify="center">
        <Title>Social Media</Title>
      </Flex>
      <Flex justify="center" margin="2% 0 4% 0">
        {socials.map((item) => (
          <a href="https://twitter.com/robiniaswap">
          <img
          className="ml-8"
          src={`/images/${item.name}.svg`} 
            alt="welcome"
            style={{ maxWidth: 70 }}
          />
        </a>
        ))}
      </Flex>
        
      </>
  );
}

import { Container } from "./StyledComponents/Container.styled";
import {StyledRead} from "./StyledComponents/StyledButton";
import { Text, Title } from "./StyledComponents/Text.styled";
import { Flex } from "./StyledComponents/Flex.styled";
import { StyledWelcome } from "./StyledComponents/Welcome.styled";


export default function Welcome() {


  return (
    <StyledWelcome>
      <div className="md:hidden sm:block try sm:mt-20  sm:mb-12">
        <img src="images/mainlogo.svg" />
      </div>
          <Flex >
          <Text color="white" align="left"  >
           <Title >Blokfield The Next Generation Wealth Management </Title> 
            <br />
            <br />
            Our clients always come first. We serve them trough a global network
            powered by partnership , integrity , and a shared purpose of
            advancing sustainable financial growth and opportunity.
            
          </Text>
          <img
            src="/images/welcome.png"
            alt="welcome"
            className=" sm:hidden md:block "
          />
          </Flex>
         

        <StyledRead role="button" marginleft="47%" >
        Read About Us
      </StyledRead>
      
    </StyledWelcome>
  );
}

import { Container } from "./StyledComponents/Container.styled";
import { Text, Title } from "./StyledComponents/Text.styled";
import { Flex } from "./StyledComponents/Flex.styled";
import { StyledWeDo, WeDoContainer,WeDoCard } from "./StyledComponents/WeDo.styled";

export default function WWdo() {
  const whatwe = [
    {
      id: 1,
      png: "wwd1",
      name: "[Defi 1.0] Robinia Swap is a Yield Farm Defi service running on the BSC chain , and various complementary systems have been added to control token economy and inflation.",
    },
    {
      id: 2,
      png: "wwd2",
      name: "[Defi 2.0] Wisteria Swap is the first Defi 2.0 model that maintains the yield farming system. It is as safe as using verified contracts , audited by Techrate , and features more than 6 deflation mechanisms.",
    },
    {
      id: 3,
      png: "wwd3",
      name: "[Game ] It is an economic strategy simulation SRPG genre in the background of the Middle Ages, and it can be played without downloading anywhere in the world through a fair blockchain reward system using the game money (Gold) system.",
    },
    {
      id: 4,
      png: "wwd4",
      name: "[Defi 1.5] RobiniaSwap V2 is a DeFi 1.0 service, but it is a DeFi 1.5 service model that utilizes the strengths of the DeFi 2.0 service. Since the protocol is responsible for most of the liquidity supply, stable service operation is possible even if users do not proceed with the RV2 liquidity supply, a governance token",
    },
    {
      id: 5,
      png: "wwd5",
      name: " [Reits] ReitsDAO is a service operated by Blokfield.Inc a decentralized real estate investment product  linked to real assets in the BSC blockchain network service. ReitsDAO issues RDF tokens composed of real estate value as collateral and RDF is designed to include all real estate values owned by ReitsDAO and revenue generated from real estate.",
    },
  ];

  return (
    <section id="whatwedo">
    <StyledWeDo>
      <Flex margin="8% 0 4% 0" justify="center">
        <Title>What We Do ?</Title>
      </Flex>

      <Container>
        {whatwe.map((item) => (
          <WeDoCard layout={item.id % 2 === 0 && "10%"} >
            <img src={`/images/${item.png}.png`} />
            <WeDoContainer >
              <Text fontsize="16px" color="white">
                {item.name}
              </Text>
            </WeDoContainer>
          </WeDoCard>
        ))}
      </Container>
    </StyledWeDo>
    </section>
  );
}

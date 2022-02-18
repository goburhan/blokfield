import { Flex } from "./StyledComponents/Flex.styled";
import {
  ProjectCard,
  StyledProjects,
} from "./StyledComponents/Projects.styled";
import { Text, Title } from "./StyledComponents/Text.styled";

const projects = [
  {
    name: "project1",
    url: " https://twitter.com/robiniaswap",
  },
  { name: "project2" },
  { name: "project3" },
  { name: "project4" },
  { name: "project5" },
  { name: "project6" },
  { name: "project7" },
];

export default function Projects() {
  return (
    <>

      <StyledProjects>
    <section id="projects"/>

        <Flex margin="10% 0 0 0" justify="center">

          <Title>Projects</Title>
        </Flex>
        <br />

        <br />
        <Text color="white" align="center">
          Transforming insights into opportunities that are perfected and
          personalized to your investing needs across blockchain and Reits
          markets
        </Text>

        {projects.map((item, index) => (
          <ProjectCard>
            <img src={`/images/${item.name}.png`} />
          </ProjectCard>
        ))}
        
        <ProjectCard>
        <img src="/images/project8.svg" style={{minWidth:200 ,minHeight:200}} />
        </ProjectCard>
      </StyledProjects>
    </>
  );
}

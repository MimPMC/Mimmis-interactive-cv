import { Box, Container, Flex } from "@mantine/core";
import { HeroImageRight } from "../components/StartHero";


const data = [
    {
      label: 'html',
      stats: '100',
      progress: 70,
      color: 'pink',
      icon: "up",
  },
];
  

export function StartPage() {

    return (
      <Box>
        <HeroImageRight></HeroImageRight>
        <Container size={"lg"} mt={"3.5rem"}>
        <Flex w={"100%"} h={700} bg={"red"}>
        </Flex>
    </Container>
        
      </Box>
    )
}
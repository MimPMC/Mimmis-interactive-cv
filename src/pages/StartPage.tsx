import { Box, Container, Flex } from "@mantine/core";
import { ContactImage } from "../components/ContactImage";
import { HeroImageRight } from "../components/StartHero";
import { StatsRing } from "../components/stats";


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
    <Box bg={"cyan.3"}>
      <HeroImageRight></HeroImageRight>
      <Container size={"lg"}>
        <ContactImage></ContactImage>
        <Flex w={"100%"} h={300} bg={"hotpink"}>
          Skills:
        </Flex>
      </Container>
    </Box>
  );
}

<StatsRing data={data} ></StatsRing>
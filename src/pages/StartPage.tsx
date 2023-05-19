import { Box, Col, Container, Grid } from "@mantine/core";
import { ContactImage } from "../components/ContactImage";
import { HeroImageRight } from "../components/StartHero";
import { Skills } from "../components/skills";
import { ProgressCard, TechKnowledge, TechQuote } from "../components/test1";





  

export function StartPage() {
  return (
    <Box bg={"cyan.3"} pb={90}>
      <HeroImageRight></HeroImageRight>
      <Container size={"lg"}>
        <ContactImage></ContactImage>
        <Skills></Skills>
      </Container>
    </Box>
  );
}


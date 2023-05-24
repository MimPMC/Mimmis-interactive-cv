import { Box, Container } from "@mantine/core";
import { ContactImage } from "../components/ContactImage";
import { HeroImageRight } from "../components/StartHero";
import { Skills } from "../components/skills";


export function StartPage() {
  return (
    <Box bg={"pink.1"} pb={90}>
      <HeroImageRight></HeroImageRight>
      <Container size={"lg"}>
        <ContactImage></ContactImage>
        <Skills></Skills>
      </Container>
    </Box>
  );
}


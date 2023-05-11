import { Container, Grid, Title } from "@mantine/core";
import { CarouselCard } from "../components/CardTest";
import { HeroImageBackground } from "../components/hero";
import { portfolio } from "../data/data";

export type carouselProps = {
  images: string[];
  title: string;
  text: string;
  githubLink: string;
  demoLink: string;
  demoText?: string
};

portfolio

export function PortfolioPage() {
  return (
    <Container size={"lg"} mt={"3.5rem"}>
      <HeroImageBackground></HeroImageBackground>
      <Grid p={0}>
      {portfolio.map((item, index) => (
        <Grid.Col xs={12} sm={6} md={6} lg={6} key={index}>
          <CarouselCard
            images={item.images}
            title={item.title}
            text={item.text}
            githubLink={item.githubLink}
            demoLink={item.demoLink}
            demoText={item.demoText}
          />
        </Grid.Col>
      ))}
    </Grid>
    </Container>
  );
}

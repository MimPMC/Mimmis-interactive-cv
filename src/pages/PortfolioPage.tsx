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
};

portfolio

export function PortfolioPage() {
  return (
    <Container size={"lg"}>
      <HeroImageBackground></HeroImageBackground>
      <Title align="center" pb={10}></Title>
      <Grid p={0}>
      {portfolio.map((item, index) => (
        <Grid.Col xs={12} sm={6} md={6} lg={6} key={index}>
          <CarouselCard
            images={item.images}
            title={item.title}
            text={item.text}
            githubLink={item.githubLink}
            demoLink={item.demoLink}
          />
        </Grid.Col>
      ))}
    </Grid>

  
    </Container>
  );
}

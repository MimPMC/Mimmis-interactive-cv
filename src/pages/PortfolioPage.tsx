import { Container, Title } from "@mantine/core";
import { CarouselCard } from "../components/CardTest";
import { HeroImageBackground } from "../components/hero";

export type carouselProps = {
  images: string[];
  title: string;
  text: string;
};

const pictures1 = {
  images: [
    "./src/assets/mainmenu.jpg",
    "./src/assets/hey.jpg",
    "./src/assets/pick.png",
    "./src/assets/isac2.jpg",
  ],
  title: "Stolen Heart",
  text: "The start of a visual novel game, where I have made the art, code and writing. Made with Typescript and OOP. blajklnds ndkasn ldklasn dlkasnldkn aslkdklnas daslkdlkad lasdldlkdlkas",
  githubLink: "https://github.com/MimPMC/Stolen-Hearts",
  demoLink: "https://game3demo.netlify.app/",
};

export function PortfolioPage() {
  return (
    <Container size={"md"}>
      <HeroImageBackground></HeroImageBackground>
      <Title align="center" pb={10}></Title>
      <CarouselCard
        images={pictures1.images}
        title={pictures1.title}
        text={pictures1.text}
        githubLink={pictures1.githubLink}
        demoLink={pictures1.demoLink}
      ></CarouselCard>
    </Container>
  );
}

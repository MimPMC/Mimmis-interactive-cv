import { Container, Title } from '@mantine/core';
import { CarouselCard } from "../components/CardTest";
import { HeroImageBackground } from '../components/hero';

export function PortfolioPage() {
    return (
        <Container size={"md"}>
            <HeroImageBackground></HeroImageBackground>
            <Title align='center' pb={10}></Title>
            <CarouselCard></CarouselCard>
        </Container>
            
    )
}
import { Container, Title } from '@mantine/core';
import { CarouselCard } from "../components/CardTest";

export function PortfolioPage() {
    return (
        <Container size={"md"} p={20}>
            <Title align='center' pb={10}>Portfolio</Title>
            <CarouselCard></CarouselCard>

        </Container>
            
    )
}
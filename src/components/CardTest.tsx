import { Carousel } from "@mantine/carousel";
import {
  Button,
  Card,
  Group,
  Image,
  Text,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";
import { IconBrandGithub, IconDeviceGamepad2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
  grand: {
    fontFamily: "'Grandstander', cursive",
  },
  grand2: {
    fontFamily: "'Grandstander', cursive",
    fontWeight: 400,
  },
}));

export type carouselProps = {
  images: string[];
  title: string;
  text: string;
  githubLink: string;
  demoLink: string;
};

export function CarouselCard({
  images,
  title,
  text,
  githubLink,
  demoLink,
}: carouselProps) {
  const { classes } = useStyles();

  const slides = images.map((image, index) => (
    <Carousel.Slide key={index}>
      <Image src={image} alt={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="lg" w={380}>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group position="apart" mt="lg">
        <Text fw={500} fz="lg" className={classes.grand}>
          {title}
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm" className={classes.grand2}>
        {text}
      </Text>

      <Group position="apart" mt="md">
        <Link to={githubLink}>
          <Button
            color="pink"
            radius="md"
            variant="outline"
            className={classes.grand2}
          >
            <Text pr={5} className={classes.grand2}>
              View on Github
            </Text>
            <IconBrandGithub></IconBrandGithub>
          </Button>
        </Link>
        <Link to={demoLink}>
          <Button
            color="pink"
            radius="md"
            variant="filled"
            className={classes.grand2}
          >
            <Text pr={5} className={classes.grand2}>
              Go to Demo
            </Text>
            <IconDeviceGamepad2></IconDeviceGamepad2>
          </Button>
        </Link>
      </Group>
    </Card>
  );
}

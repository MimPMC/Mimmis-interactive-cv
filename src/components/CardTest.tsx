import { Carousel } from '@mantine/carousel';
import { Button, Card, Group, Image, Text, createStyles, getStylesRef, rem } from '@mantine/core';
import { IconDeviceGamepad2, IconBrandGithub } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(16),
    },
  },
  grand: {
    fontFamily: "'Grandstander', cursive",
  },
  grand2: {
    fontFamily: "'Grandstander', cursive",
    fontWeight: 400
  }
}));

const images = [
  './src/assets/mainmenu.jpg',
  './src/assets/hey.jpg',
  './src/assets/pick.png',
  './src/assets/isac2.jpg',
  
];

export function CarouselCard() {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="lg" w={400}>
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
          Stolen Heart
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm" className={classes.grand2}>
       The start of a visual novel game, where I have made the art, code and writing. Made with Typescript and OOP.
      </Text>

      <Group position="apart" mt="md">
        <Button color="pink" radius="md" variant='outline' className={classes.grand2}>
        <Text  pr={5} className={classes.grand2}>View on Github</Text>
            <IconBrandGithub></IconBrandGithub>
            </Button>
        <Button color="pink" radius="md" variant='filled' className={classes.grand2}>
            <Text  pr={5} className={classes.grand2}>Go to Demo</Text>
            <IconDeviceGamepad2></IconDeviceGamepad2>
        </Button>
      </Group>
    </Card>
  );
}
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
import { useMediaQuery } from "@mantine/hooks";
import { IconBrandGithub, IconDeviceGamepad2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { carouselProps } from "../pages/PortfolioPage";

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
  carouselImg: {
    height: "20rem",
    background: "red"

  },
  buttons: {
    fontFamily: "'Grandstander', cursive",
    
    [theme.fn.smallerThan("md")]: {
      padding: "0 13px",
    },
    [theme.fn.smallerThan("sm")]: {
      padding: "0 8px"
    },
  }
}));



export function CarouselCard(props: carouselProps
   ) {
    const {classes }= useStyles()
    const desktopHeight = 340;
    const ipadHeight = 270;
    const mobileHeight = 370;
    const smolHeight = 250;
    
    const isDesktop = useMediaQuery('(min-width: 992px)');
    const isIpad = useMediaQuery('(min-width: 768px) and (max-width: 991px)');
    const isMobile = useMediaQuery('(min-width: 568px) and (max-width: 767px)');
    const isSmol = useMediaQuery('(max-width: 567px)');
    
    let height: number;
    if (isDesktop) {
      height = desktopHeight;
    } else if (isIpad) {
      height = ipadHeight;
    } else if (isMobile) {
      height = mobileHeight;
    } else if (isSmol) {
      height = smolHeight;
      console.log('isSmol matched!')
    }
    
    const slides = props.images.map((image, index) => (
      <Carousel.Slide key={index}>
        <Image src={image} alt={image} height={height} />
      </Carousel.Slide>
    ));
  return (
    <Card radius="md" withBorder padding="lg" w={"100%"}>
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
          {props.title}
        </Text>
      </Group>

      <Text fz="sm" mt="sm" color="dark.3" className={classes.grand2}>
        {props.text}
      </Text>

      <Group position="apart" mt="md" >
        <Link to={props.githubLink}>
          <Button
            color="pink"
            radius="md"
            variant="outline"
            className={classes.buttons}
          >
            <Text pr={5} className={classes.grand2}>
              View on Github
            </Text>
            <IconBrandGithub></IconBrandGithub>
          </Button>
        </Link>
        <Link to={props.demoLink}>
          <Button
            color="pink"
            radius="md"
            variant="filled"
            className={classes.buttons}
          >
            <Text pr={5} className={classes.grand2}>
            {props.demoText ? props.demoText : "Go to Demo"}
            </Text>
            <IconDeviceGamepad2></IconDeviceGamepad2>
          </Button>
        </Link>
      </Group>
    </Card>
  );
}

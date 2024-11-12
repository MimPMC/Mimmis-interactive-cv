import {
    Flex,
    Group,
    Image,
    Stack,
    Text,
    Title,
    createStyles,
} from "@mantine/core";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    borderRadius: "1rem",
    flexDirection: "row",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
  inner: {
    borderRadius: "1rem",
    maxWidth: "50%",
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
  infoBox: {
    padding: "1.5rem",
    borderRadius: "1rem",
  },
  title: {
    fontFamily: "'Grandstander', cursive",
    borderBottom: "1px solid black",
    [theme.fn.smallerThan("md")]: {
      fontSize: "1.5rem",
    },
  },
  grand1: {
    fontFamily: "'Grandstander', cursive",
    fontWeight: 400,
  },

  grand2: {
    fontFamily: "'Grandstander', cursive",
    fontWeight: 500,
  },
}));

export function ContactImage() {
  const { classes } = useStyles();

  return (
    <Flex
      w={"100%"}
      h={"auto"}
      bg={"cyan.3"}
      justify={"flex-start"}
      my={30}
      className={classes.wrapper}
    >
      <Image
        radius="md"
        src="assets/picture.png"
        alt="cat"
        className={classes.inner}
      />
      <Flex
        w={"50%"}

        className={classes.inner}
        direction={"column"}
      >
        <Flex
          h={"50%"}
          w={"100%"}
          direction={"column"}

          className={classes.infoBox}
        >
          <Title className={classes.title}>Hello! I'm Mimmi Collin</Title>
          <Text my={10} className={classes.grand1}>
            {" "}
            Frontend developer
          </Text>
          <Text my={10}>
            {" "}
            I am a creative front-end developer with a background in 2D graphics and art. 
            I am is eager to find my first full time job where I can learn and grow while working on
             exciting projects. I have a passion for coding, designing websites and graphics. Besides
              my interests in technology, I also enjoy painting, knitting and playing the clarinet!
          </Text>
        </Flex>
        <Flex
          h={"50%"}
          w={"100%"}
          direction={"column"}
          className={classes.infoBox}
          mt={10}
        >
          <Stack spacing={10}>
            <Title order={3} className={classes.grand2}>
              Contact me:
            </Title>
            <Group>
              <IconMail size="1.7rem" stroke={1.8} />
              <Text className={classes.grand1}>
                mimmi.magnusson.collin@gmail.com.se
              </Text>
            </Group>
            <Group>
              <IconPhone size="1.7rem" stroke={1.8} />
              <Text className={classes.grand1}>073-0506955</Text>
            </Group>
            <Group>
              <IconMapPin size="1.7rem" stroke={1.8} />
              <Text className={classes.grand1}>Munkedal/Gothenburg</Text>
            </Group>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}

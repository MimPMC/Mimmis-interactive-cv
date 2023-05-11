import {
  ActionIcon,
  Burger,
  Container,
  Drawer,
  Group,
  Header,
  ScrollArea,
  Stack,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandItch,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(56),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },
  socialLink: {
    color: theme.colors.pink[7],
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  lightPink: {
    background: theme.colors.pink[2],
    position: "fixed"
  },

  link: {
    display: "flex",
    justifyContent:"center",
    alignContent: "center",
    lineHeight: 1,
    padding: `${rem(10)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.pink[0]
        : theme.colors.pink[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    transition: "200ms",
    textAlign: "center",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.pink[7]
          : theme.colors.pink[1],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.colors.cyan[3],
      color: "white",
    },
  },
  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  drawerlink: {
    textAlign: "center",
  },
  grand: {
    fontFamily: "'Grandstander', cursive",
  }
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}
export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [active, setActive] = useState(links[0].link);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      to={link.link}
      key={link.label}
      className={cx(classes.link, classes.grand, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
        closeDrawer(); // Close the drawer on mobile when a link is clicked
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={56} mb={0} className={classes.lightPink}>
      <Container className={classes.inner} size={"lg"}>
        <Burger
          mr={10}
          color="#d6336c"
          size="md"
          opened={drawerOpened}
          onClick={toggleDrawer}
          className={classes.hiddenDesktop}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
        <Title  align="center" color="pink.9" size={26} className={classes.grand} >
          Mimmi C
        </Title>
        <Group spacing={1} className={classes.social} position="right" noWrap>
          <Link to="https://www.linkedin.com/in/mimmi-collin/">
            <ActionIcon size="lg">
              <IconBrandLinkedin
                size="1.6rem"
                stroke={1.8}
                className={classes.socialLink}
              />
            </ActionIcon>
          </Link>
          <Link to="https://github.com/MimPMC">
            <ActionIcon size="lg">
              <IconBrandGithub
                size="1.6rem"
                stroke={1.8}
                className={classes.socialLink}
              />
            </ActionIcon>
          </Link>
          <Link to="https://www.instagram.com/mimsterart/">
          <ActionIcon size="lg">
            <IconBrandInstagram
              size="1.6rem"
              stroke={1.8}
              className={classes.socialLink}
            />
          </ActionIcon>
          </Link>
          <Link to="https://mimpmc.itch.io/">
          <ActionIcon size="lg">
            <IconBrandItch
              size="1.6rem"
              stroke={1.8}
              className={classes.socialLink}
            />
          </ActionIcon>
          </Link>
        </Group>
      </Container>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="300"
        position="top"
        padding="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        overlayProps={{ opacity: 0.3, blur: 4 }}
        withCloseButton={false}
        transitionProps={{
          transition: "slide-down",
          duration: 150,
          timingFunction: "ease-in-out",
        }}
      >
        <ScrollArea
          h="100%"
          mx="-md"
          my="-md"
          bg="pink.2"
          p="md"
          onClick={toggleDrawer}
        >
          <Title className={classes.grand} align="center" color="pink.9" mb={8} >
            Mimmi Collin
          </Title>
          <Stack justify="center" spacing={10} mb={10}>
            {items}
          </Stack>
          <Group
            spacing={1}
            className={classes.social}
            position="center"
            noWrap
          >
            <Link to="https://www.linkedin.com/in/mimmi-collin/">
            <ActionIcon size="lg">
              <IconBrandLinkedin
                size="1.6rem"
                stroke={1.8}
                className={classes.socialLink}
                onClick={toggleDrawer}
              />
            </ActionIcon>
          </Link>
          <Link to="https://github.com/MimPMC">
            <ActionIcon size="lg">
              <IconBrandGithub
                size="1.6rem"
                stroke={1.8}
                className={classes.socialLink}
                onClick={toggleDrawer}
              />
            </ActionIcon>
          </Link>
          <Link to="https://www.instagram.com/mimsterart/">
          <ActionIcon size="lg">
            <IconBrandInstagram
              size="1.6rem"
              stroke={1.8}
              className={classes.socialLink}
              onClick={toggleDrawer}
            />
          </ActionIcon>
          </Link>
          <Link to="https://mimpmc.itch.io/">
          <ActionIcon size="lg">
            <IconBrandItch
              size="1.6rem"
              stroke={1.8}
              className={classes.socialLink}
              onClick={toggleDrawer}
            />
          </ActionIcon>
          </Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Header>
  );
}

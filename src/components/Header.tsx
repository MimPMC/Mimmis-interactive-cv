import { ActionIcon, Burger, Container, Drawer, Group, Header, ScrollArea, Stack, Title, createStyles, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconBrandInstagram, IconBrandItch, IconBrandLinkedin } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },
  socialLink: {
    color: theme.colors.pink[7]
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  lightPink:{
    background: theme.colors.pink[2]
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.pink[0] : theme.colors.pink[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    transition: "200ms",
    textAlign:"center",

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.pink[7] : theme.colors.pink[1],
    },
    
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:theme.colors.pink[0],
      color: theme.colors.pink[8]
    },
},
hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  drawerlink: {
    textAlign: 'center',
  },



}));




interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}
export function HeaderMiddle({ links }: HeaderMiddleProps) {
    const [active, setActive] = useState(links[0].link);
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, cx } = useStyles();
  
    const items = links.map((link) => (
        <Link to={link.link}
          key={link.label}
          className={cx(classes.link, { [classes.linkActive]: active === link.link })}
          onClick={(event) => {
            event.preventDefault();
            setActive(link.link);
            closeDrawer(); // Close the drawer on mobile when a link is clicked
          }}
        >
          {link.label}
        </Link>
      ));
  
    return (
      <Header height={56} mb={0} className={classes.lightPink}>
        <Container className={classes.inner}>
        <Burger mr={10} color="#d6336c" size="md" opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop}  />
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>
          <Title   align='center' color='pink.9' size={26}>Mimmi C</Title>
  
          <Group spacing={1} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandLinkedin
                size="1.6rem"
                stroke={1.5}
                className={classes.socialLink}
              />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandGithub
                size="1.6rem"
                stroke={1.5}
                className={classes.socialLink}
              />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram
                size="1.6rem"
                stroke={1.5}
                className={classes.socialLink}
              />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandItch
                size="1.6rem"
                stroke={1.5}
                className={classes.socialLink}
              />
            </ActionIcon>
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
          transitionProps={{ transition: 'slide-down', duration: 150, timingFunction: 'ease-in-out' }}
        >
          <ScrollArea h="100%" mx="-md" my="-md" bg="pink.2" p="md" onClick={toggleDrawer}>
          <Title align='center' color='pink.9'>Mimmi C</Title>
          <Stack justify='center' spacing={5}>
            {items}
          </Stack>
          <Group spacing={1} className={classes.social} position="center" noWrap>
            <ActionIcon size="lg">
              <IconBrandLinkedin
                size="1.6rem"
                stroke={1.5}
                className={classes.socialLink}
              />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandGithub
                size="1.6rem"
                stroke={1.5}
                className={classes.socialLink}
              />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram
                size="1.6rem"
                stroke={1.5}
                className={classes.socialLink}
              />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandItch
                size="1.6rem"
                stroke={1.5}
                className={classes.socialLink}
              />
            </ActionIcon>
          </Group>
          </ScrollArea>
        </Drawer>
      </Header>
    );
  }
  
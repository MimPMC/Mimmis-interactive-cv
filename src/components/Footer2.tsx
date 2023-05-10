import { ActionIcon, Container, Group, Image, Text, Title, createStyles, rem } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandItch,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    fontFamily:"Gaegu",
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.lg} * 2)`,
    paddingBottom: `calc(${theme.spacing.lg} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.pink[6] : theme.colors.pink[5],
    
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.cyan[9] : theme.colors.pink[9]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),
    fontFamily:"Gaegu",

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    fontFamily:"Gaegu",
    display: 'flex',
    justifyContent: 'space-between',


    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    paddingTop: ".6rem",
    fontFamily: "'Grandstander', cursive",
    display: 'flex',
    justifyContent: "space-between",
    alignItems:"flex-start",

    width: "65%",

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      width: "100%",
      flexDirection: "column",
      alignItems:"center",
      textAlign: "center",
     
    },
  },

  wrapper: {
    
  },

  link: {
    fontFamily: "'Grandstander', cursive",
    fontWeight: 400,
    display: 'block',
    width: "20rem",
    color: theme.colorScheme === 'dark' ? theme.colors.cyan[9] : theme.colors.pink[9],
    fontSize: theme.fontSizes.md,
    paddingTop: rem(2),
    paddingBottom: rem(2),
  },

  title: {
    fontSize: "1.5rem",
    fontWeight: 700,
    fontFamily: "'Grandstander', cursive",
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.pink[9],
  },
  bigTitle: {
    width: "17rem",
    
    fontSize: "2.6rem",
    fontWeight: 600,
    fontFamily: "'Grandstander', cursive",
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.pink[9],
    [theme.fn.smallerThan('md')]: {
      fontSize: "2.3rem",
    },
    [theme.fn.smallerThan('sm')]: {
      textAlign: "center"
    },
  },

  afterFooter: {
    fontFamily: "'Grandstander', cursive",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.pink[9]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
  reg: {
    fontFamily: "'Grandstander', cursive",
    
  },
  image: {
    marginLeft:"2.5rem",
    [theme.fn.smallerThan('md')]: {
      marginTop: theme.spacing.xl,
      marginLeft:"1rem",
    },
    
    [theme.fn.smallerThan('sm')]: {
        marginTop: theme.spacing.xl,
        marginLeft:"0rem",
      },
    
  },
  grand: {
    fontFamily: "'Grandstander', cursive",
  },
  socialLink: {
    color: "white",
    transition: "200ms ease",
    "&:hover": {
        background: theme.colors.pink[9],
    }

  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function Footer2({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link} 
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Title className={classes.bigTitle} order={1}>Mimmi Collin</Title>
          <Text size="xl" color="white" className={classes.description}>
            Frontend developer student!
          </Text>
        </div>
        <div className={classes.groups}>
          {groups}
        <Image className={classes.image} maw={250} radius="md" src="./src/assets/laptopcat.png" alt="Random image" />
        </div>
        
      </Container>
      <Container className={classes.afterFooter}>
        <Text className={classes.reg} color="pink.9" size="lg">
          © 2023 Mimmi Collin
        </Text>
        <Group spacing={1} className={classes.social} position="right" noWrap>
          <Link to="https://www.linkedin.com/in/mimmi-collin/">
            <ActionIcon size="lg" className={classes.socialLink}>
              <IconBrandLinkedin
                size="1.6rem"
                stroke={1.8}
                className={classes.socialLink}
              />
            </ActionIcon>
          </Link>
          <Link to="https://github.com/MimPMC">
            <ActionIcon size="lg" className={classes.socialLink}>
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
    </footer>
  );
}
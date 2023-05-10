import { ActionIcon, Container, Group, Title, createStyles, rem } from '@mantine/core';

import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandItch,
    IconBrandLinkedin,
} from "@tabler/icons-react";
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    background: theme.colors.pink[7],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.pink[5] : theme.colors.pink[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
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
  social: {

    [theme.fn.smallerThan("sm")]: {

    },
  },

}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner} size={"md"}>
      <Title  align="center" color="white" size={28} className={classes.grand}>
          Mimmi C
        </Title>
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
        </Group>
      </Container>
    </div>
  );
}
import { ActionIcon, Burger, Container, Group, Header, createStyles, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconBrandInstagram, IconBrandItch, IconBrandLinkedin } from '@tabler/icons-react';
import { useState } from 'react';

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

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.pink[0] : theme.colors.pink[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.pink[7] : theme.colors.pink[1],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:theme.colors.pink[2],
      color: theme.colors.pink[8]
    },
},
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
        <div>Mimmi Collin</div>

        <Group spacing={1} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandLinkedin size="1.6rem" stroke={1.5} className={classes.socialLink} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandGithub size="1.6rem" stroke={1.5} className={classes.socialLink} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.6rem" stroke={1.5} className={classes.socialLink} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandItch size="1.6rem" stroke={1.5} className={classes.socialLink} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}
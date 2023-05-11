import { Container, Overlay, Text, Title, createStyles, rem } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(35),
    paddingBottom: rem(35),
    //backgroundImage:
    //  'url(./src/assets/bedroom_pink.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(25),
      paddingBottom: rem(20),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(28),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.colors.cyan[9],
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: "'Grandstander', cursive",

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(24),
      textAlign: 'center',
    },
  },

  highlight: {
    color: theme.colors.cyan[3],
    fontFamily: "'Grandstander', cursive"
  },

  description: {
    color: theme.colors.gray[7],
    textAlign: 'center',
    fontFamily: "'Grandstander', cursive",

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'center',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
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

export function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#ffffff" opacity={0.9} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          My{' '}
          <Text component="span" inherit className={classes.highlight}>
            Portfolio
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Here is some of the projects I have created, both my own and group projects!
          </Text>
        </Container>
      </div>
    </div>
  );
}
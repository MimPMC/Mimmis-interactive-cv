import { Button, Container, Text, Title, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#691329',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 30%, #aa1a45 85%), url("./src/assets/pinkmountains2.png")',
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    [theme.fn.smallerThan('sm')]: {
        paddingTop: `calc(${theme.spacing.sm} * 2)`,
        paddingBottom: `calc(${theme.spacing.sm} * 2)`,
      },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.lg} * 3)`,
    paddingBottom: `calc(${theme.spacing.lg} * 1)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(600),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.85,
    maxWidth: rem(500),
    fontWeight: 400,
    
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(40),
    paddingRight: rem(40),
    fontFamily: "'Grandstander', cursive",
    fontSize: rem(16),
    textAlign: "center",

    [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
        fontSize: rem(14),
        paddingLeft: rem(30),
        paddingRight: rem(32),
        marginTop: rem(30)
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Crafting{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'cyan', to: 'yellow' }}
              >
                Beautiful
              </Text>{' '}
              websites with passion!
            </Title>
            <Text className={classes.description} mt={30}>
            I am a creative front-end developer student with a background in 2D graphics and art. I am is eager to find my first internship where I can learn and grow while working on exciting projects. 
            I have a passion for coding, designing websites and graphics. Besides my interests in technology, I also enjoy painting and cooking.
            </Text>

            <Button
            color='cyan'
              size="lg"
              className={classes.control}
              radius={"md"}
              mt={40}
            >
              Check out my Projects!
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
import { Button, Container, Text, Title, createStyles, rem } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#691329',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 30%, #d1265f 85%), url("./src/assets/pinkmountains2.png")',
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    [theme.fn.smallerThan('sm')]: {
        paddingTop: `calc(${theme.spacing.sm} * 3)`,
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
    fontFamily: "'Grandstander', cursive",
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(650),
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
    fontWeight: 600,
    
    
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
              Creating{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'cyan.3', to: 'pink.1' }}
              >
                Beautiful websites
              </Text>{' '}
               and games with passion!
            </Title>
            <Text className={classes.description} mt={30}>
            I am a creative front-end developer student with a background in 2D graphics and art. I am is eager to find my first internship where I can learn and grow while working on exciting projects. 
            I have a passion for coding, designing websites and graphics. Besides my interests in technology, I also enjoy painting and cooking.
            </Text>
            <Link to= "/portfolio">
            <Button
              color='cyan'
              size="lg"
              className={classes.control}
              radius={"md"}
              mt={35}
            >
              Check out my Projects!
            </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
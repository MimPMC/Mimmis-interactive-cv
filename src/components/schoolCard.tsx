import { Container, Image, SimpleGrid, Text, createStyles, rem } from '@mantine/core';

export const MOCKDATA = [
  {
    image:  "assets/1.png",
    title: 'Frontend Developer  2022-2024',
    description:
    "I have learned about HTML & CSS, Ux and Usability, JavaScript basics, JavaScript advanced, and Dynamic Web Development and creating backend servers and API's.",
  },
  {
    image:  "assets/3.png",
    title: 'Dataspelsutveckling 2D Grafik 2015-2018',
    description:
      "Bachelor's degree in Media, Aesthetics, and Storytelling. I learned how to create and implement 2D graphics and worked on several larger projects with other game development students"
  },
  {
    image:  "assets/4.png",
    title: 'Karlstads Universitet Serieteckning 2014',
    description:
      'Arts and comics class where I got to create multiple art projects with fun and interesed people.',
  },
];

interface FeatureProps {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ image, title, description }: FeatureProps) {
  return (
    <div>
      
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export function FeaturesGrid({ title, description, data = MOCKDATA }: FeaturesGridProps) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <SimpleGrid
        mt={0}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
import {
    Badge,
    Card,
    Container,
    Group,
    SimpleGrid,
    Text,
    Title,
    createStyles,
    rem,
} from '@mantine/core';
import { IconNews, IconMailbox, IconToolsKitchen, IconCloudComputing, IconDeviceDesktop} from '@tabler/icons-react';
  
  const mockdata = [
    {
      company: "Majako",
      title: "Frontend - developer intern || 2023-2024",
      description:
        "As a former Frontend developer at  Majako, Got to contribute on multiple different projects and websites, working mostly in React and Next.js.",
      icon: IconDeviceDesktop,
    },
    {
      company: "Postnord",
      title: "Postman || 2020-2024",
      description:
        "As a mail and parcel handler, I sorted, packed, and distributed mail and parcels to customers by foot and car, while also helping new co-workers learn their routes.",
      icon: IconMailbox,
    },
    {
      company: "NWT Direct",
      title: "Newspaper distributor || 2018-2019",
      description:
        "As a newspaper distributor, my job involved sorting and distributing newspapers during nighttime hours. Learning to work independently.",
      icon: IconNews,
    },
    {
      company: "Rasta",
      title: "Restaurant Assistant || 2014-2015",
      description:
        "As a former restaurant worker, I played a vital role in ensuring smooth operations by taking customer orders, preparing delicious meals, and providing customer service.",
      icon: IconToolsKitchen,
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: rem(7)
      },
    },
  }));
  
  export function FeaturesCards() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color={theme.colors.pink[6]} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.company}
    
        </Text>
        <Text fz="sm" c="dark.3">
            {feature.title}
          </Text>
        
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="20">
        <SimpleGrid cols={3} spacing="xl" mt={50} mb={30}  breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }
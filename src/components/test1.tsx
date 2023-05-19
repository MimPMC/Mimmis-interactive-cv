import { Card, Center, Col, Grid, Progress, Text, useMantineTheme } from '@mantine/core';
import { IconBrandAlpineJs } from '@tabler/icons-react';
import { AiFillGithub } from 'react-icons/ai';
import { CgFigma } from 'react-icons/cg';
import { FaBootstrap, FaGit, FaReact } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { SiAdobepremierepro, SiChakraui, SiJavascript, SiMongodb, SiSocketdotio, SiStyledcomponents, SiTypescript } from 'react-icons/si';
import { TbBrandCypress, TbBrandMantine } from 'react-icons/tb';
import { useStyles } from './Header';



export function ProgressCard() {
  return (
    <Card
      padding="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Text fz="xs" fw={500}>
      <ImHtmlFive />  HTML 
      </Text>
      <Progress value={74.00} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <IoLogoCss3 />  CSS 
      </Text>
      <Progress value={74.00} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <SiJavascript /> JavaScript
      </Text>
      <Progress value={50.00} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <SiTypescript />   TypeScript
      </Text>
      <Progress value={55.00} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <FaReact />  React
      </Text>
       <Progress value={60.00} mb="md" size="lg" radius="xs" color="dark.3" />
    </Card>
  );
}
export function TechKnowledge() {
  const theme = useMantineTheme();
  const {classes} = useStyles()

  const icons = [
    { Icon: AiFillGithub, title: "Github" },
    { Icon: FaGit, title: "Git" },
    { Icon: IconBrandAlpineJs, title: "Alpine" },
    { Icon: SiMongodb, title: "MongoDB" },
    { Icon: CgFigma, title: "Figma" },
    { Icon: SiChakraui, title: "Chakra UI" },
    { Icon: TbBrandMantine, title: "Mantine" },
    { Icon: FaBootstrap, title: "Bootstrap" },
    { Icon: SiSocketdotio, title: "Socket.io" },
    { Icon: TbBrandCypress, title: "Cypress"},
    { Icon: SiStyledcomponents, title: "Styled Components" },
    { Icon: SiAdobepremierepro, title: "Adobe Photoshop" },

  ];
  return(
<Card
      padding="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Grid gutter="xl">
  {icons.map(({ Icon, title }) => (
    <Col span={3} md={2}  sm={2} xs={4} key={title}>
      <div style={{ textAlign: 'center' }}>
        <Icon size={40} />
        <Text align="center" className={classes.grand}>{title}</Text>
      </div>
    </Col>
  ))}
</Grid>
    </Card>
  )
}
export function TechQuote() {
    const {classes} = useStyles()
  return(
    <Center
    p="xl"
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    })}
    
    

    >
      <Text fz="md" align='center' className={classes.grand} >
      I'm constantly exploring new techniques, tools, and libraries to create websites that are easy and fun to use. Here are some of the tools that I have worked with!

      </Text>
    </Center>
  )
}
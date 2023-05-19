import { Card, Center, Col, Grid, Progress, Text, useMantineTheme } from '@mantine/core';
import { IconBrandAlpineJs, IconBrandReactNative } from '@tabler/icons-react';
import { AiFillGithub } from 'react-icons/ai';
import { CgFigma } from 'react-icons/cg';
import { FaBootstrap, FaGit, FaReact } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { SiChakraui, SiJavascript, SiMongodb, SiSocketdotio, SiStyledcomponents, SiTypescript } from 'react-icons/si';
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
    { Icon: AiFillGithub, title: "Github", color: "#6e5494" },
    { Icon: FaGit, title: "Git" ,color: "#c9510c"},
    { Icon: IconBrandReactNative, title: "React-native",color: "#00d8ff"  },
    { Icon: IconBrandAlpineJs, title: "Alpine" ,color: "#23246b"  },
    { Icon: SiMongodb, title: "MongoDB" ,color: "#589636" }, 
    { Icon: CgFigma, title: "Figma" ,color: "#222222" },
    { Icon: SiChakraui, title: "Chakra UI", color: "#38B2AC" },
    { Icon: TbBrandMantine, title: "Mantine", color: "#1c7ed6" },
    { Icon: FaBootstrap, title: "Bootstrap", color: "#7c0dd6" },
    { Icon: SiSocketdotio, title: "Socket.io", color: "black" },
    { Icon: TbBrandCypress, title: "Cypress", color: "#1cd698"},
    { Icon: SiStyledcomponents, title: "Styled Components", color: "#ECC94B" },
    

  ];
  return(
<Card
      padding="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Grid gutter="xl">
  {icons.map(({ Icon, title, color }) => (
    <Col span={3} md={2}  sm={2} xs={4} key={title}>
      <div style={{ textAlign: 'center' }}>
        <Icon size={40} color={color} />
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
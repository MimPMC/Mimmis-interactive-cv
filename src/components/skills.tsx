import { Col, Flex, Grid, Tabs, Title, createStyles } from "@mantine/core";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
} from "@tabler/icons-react";
import { useState } from "react";
import { DiNodejs } from "react-icons/di";
import { FeaturesGrid } from "./schoolCard";
import { StatsRings } from "./stats";
import { TechKnowledge, TechQuote } from "./test1";
import { FeaturesCards } from "./work";



const data = [
  {
    label: "html",
    stats: "75%",
    progress: 75,
    color: "orange",
    Icon: IconBrandHtml5,
  },
  {
    label: "css",
    stats: "80%",
    progress: 80,
    color: "cyan",
    Icon: IconBrandCss3,
  },
  {
    label: "Javascript",
    stats: "50%",
    progress: 50,
    color: "yellow",
    Icon: IconBrandJavascript,
  },
  {
    label: "Typescript",
    stats: "55%",
    progress: 55,
    color: "blue",
    Icon: IconBrandJavascript,
  }, 
  {
    label: "react",
    stats: "60%",
    progress: 55,
    color: "darkblue",
    Icon: IconBrandReact,
  }, {
    label: "Node.js",
    stats: "40%",
    progress: 40,
    color: "green",
    Icon: DiNodejs,
  }
];

export const useStyles = createStyles((theme) => ({
  grand: {
    fontFamily: "'Grandstander', cursive",
  },
  skills: {
    borderRadius: "1rem",
  },
  transition: {
    transition: "200ms ease",
    background: "cyan.2"
  }, 
  activeTab: {
    color: 'white',
  },
}));

export function Skills() {
    const { classes } = useStyles();
    const [activeTab, setActiveTab] = useState<string | null>("gallery");
  
    return (
      <Flex
        w={"100%"}
        direction={"column"}
        align={"center"}
        bg={"white"}
        p={20}
        className={classes.skills}
      >
        <Tabs
          color="cyan"
          variant="pills"
          defaultValue="gallery"
          onTabChange={setActiveTab}
          w={"100%"}
        >
          <Tabs.List grow position="center">
            <Tabs.Tab
              value="gallery"
              className={activeTab === "gallery" ? classes.activeTab : ""}
            >
              <Title order={3} className={classes.grand} mb={2}>
                Technical skills
              </Title>
            </Tabs.Tab>
            <Tabs.Tab
              value="messages"
              className={activeTab === "messages" ? classes.activeTab : ""}
            >
              <Title order={3} className={classes.grand} mb={2}>
                Education
              </Title>
            </Tabs.Tab>
            <Tabs.Tab
              value="settings"
              className={activeTab === "settings" ? classes.activeTab : ""}
            >
              <Title order={3} className={classes.grand} mb={2}>
                Experience
              </Title>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            <Grid w={"100%"} my={20}>
              <StatsRings data={data}></StatsRings>
            </Grid>

            <Grid gutter="lg">
              <Col>
                <TechQuote />
                <TechKnowledge />
              </Col>
            </Grid>
          </Tabs.Panel>
         
          <Tabs.Panel value="messages" pt="xs">
          <FeaturesGrid title={"hello"} description={"hello"} ></FeaturesGrid>
          
          </Tabs.Panel>
          <Tabs.Panel value="settings" pt="xs">
   
          <FeaturesCards></FeaturesCards>
          </Tabs.Panel>
        </Tabs>
      </Flex>
    );
  }

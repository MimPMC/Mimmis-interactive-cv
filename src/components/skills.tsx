import { Avatar, Box, Col, Flex, Grid, Tabs, Text, ThemeIcon, Timeline, Title, createStyles } from "@mantine/core";
import {
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandReact,
} from "@tabler/icons-react";
import { useState } from "react";
import { DiNodejs } from "react-icons/di";
import { StatsRings } from "./stats";
import { TechKnowledge, TechQuote } from "./test1";

import { IconSun, IconVideo } from '@tabler/icons-react';

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
                Education
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
            <Grid gutter="lg" p={30}>
              <Col>
                <Box maw={"100%"} mx="auto">
                  <Timeline color="pink" active={3} reverseActive bulletSize={35} lineWidth={5}>
                    <Timeline.Item title="Default bullet" >
                      <Text color="dimmed" size="sm">
                        Default bullet without anything
                      </Text>
                    </Timeline.Item>
                    <Timeline.Item
                      title="Avatar"
                      bulletSize={35}
                      bullet={
                        <Avatar
                          size={22}
                          radius="xl"
                          src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                        />
                      }
                    >
                      <Text color="dimmed" size="sm">
                        Timeline bullet as avatar image
                      </Text>
                    </Timeline.Item>
                    <Timeline.Item
                      title="Icon"
                      bulletSize={35}
                      bullet={<IconSun size="0.8rem" />}
                    >
                      <Text color="dimmed" size="sm">
                        Timeline bullet as icon
                      </Text>
                    </Timeline.Item>
                    <Timeline.Item
                      title="ThemeIcon"
                      bulletSize={24}
                      bullet={
                        <ThemeIcon
                          size={35}
                          variant="gradient"
                          gradient={{ from: "lime", to: "cyan" }}
                          radius="xl"
                        >
                          <IconVideo size="0.8rem" />
                        </ThemeIcon>
                      }
                    >
                      <Text color="dimmed" size="sm">
                        Timeline bullet as ThemeIcon component
                      </Text>
                    </Timeline.Item>
                  </Timeline>
                </Box>
              </Col>
            </Grid>
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </Flex>
    );
  }

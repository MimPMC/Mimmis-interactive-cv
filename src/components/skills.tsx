import { Col, Flex, Grid, Title, createStyles } from "@mantine/core";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
} from "@tabler/icons-react";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { StatsRings } from "./stats";
import { ProgressCard, TechQuote, TechKnowledge } from "./test1";

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
  },{
    label: "Express",
    stats: "30%",
    progress: 30,
    color: "black",
    Icon: SiExpress,
  },
];

export const useStyles = createStyles((theme) => ({
  grand: {
    fontFamily: "'Grandstander', cursive",
  },
  skills: {
    borderRadius: "1rem",
  },
}));

export function Skills() {
  const { classes } = useStyles();
  return (
    <Flex
      w={"100%"}
      direction={"column"}
      align={"center"}
      bg={"white"}
      p={20}
      className={classes.skills}
    >
      <Title color={"pink.9"} order={2} className={classes.grand} mb={2}>
        Technical skills:
      </Title>
      <Grid w={"100%"} my={20}>
        <StatsRings data={data}></StatsRings>
      </Grid>

      <Grid gutter="lg">
        <Col>
          <TechQuote />
          <TechKnowledge />
        </Col>
      </Grid>
    </Flex>
  );
}
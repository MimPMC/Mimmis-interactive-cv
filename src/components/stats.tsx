import { Box, Center, Flex, Group, RingProgress, Text, createStyles } from '@mantine/core';
import { Icon } from 'tabler-icons-react';


interface StatsRingProps {
  data: {
    label: string;
    stats: string;
    progress: number;
    color: string;
    Icon: Icon
  }[];
}


const useStyles = createStyles((theme) => ({
  hey: {
    [theme.fn.largerThan("sm")]: {
      width: 300,
      paddingLeft:90
    }, 
  },}))

export function StatsRings({ data }: StatsRingProps) {
  const {classes }= useStyles()
  const stats = data.map((stat) => {
    return (
      <Box  p="xs" key={stat.label} w={190} className={classes.hey}>
        <Group >
          <RingProgress
            size={75}
            roundCaps
            thickness={7}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                {<stat.Icon size={30} color={stat.color}/>}
              </Center>
            }
          />
          <div>
            <Text color="black" size="xs" transform="uppercase" weight={700}>
              {stat.label}
            </Text>
            <Text weight={600} size="lg">
              {stat.stats}
              
            </Text>
          </div>
        </Group>
      </Box>
    );
  });

  return (
    <Flex w={"100%"} wrap={"wrap"} justify={"center"} align={"center"}>
      {stats}
    </Flex>
  );
}
"use client";
import { Flex, Grid, Text, TextField } from "@radix-ui/themes";
import { Box, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <Flex>
      <Grid columns={"1"} rows={"2"} width={"100%"}>
        <Flex direction={"column"} gap={"2"}>
          <TextField.Root>
            <TextField.Input placeholder="Username" />
          </TextField.Root>
          <TextField.Root>
            <TextField.Input placeholder="password" />
          </TextField.Root>
        </Flex>
        <Flex>
          <TextField.Root>
            <TextField.Input placeholder="Username" />
          </TextField.Root>
          <TextField.Root>
            <TextField.Input placeholder="password" />
          </TextField.Root>
        </Flex>
      </Grid>
    </Flex>
  );
}

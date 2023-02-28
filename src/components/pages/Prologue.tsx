import { Box, Flex, Heading, Stack, Text, Wrap } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { TitleCard } from "components/molecules/TitleCard";
import { PrologueLists } from "lib";

export const Prologue: VFC = memo(() => {
  return (
    <Box p={43} whiteSpace="break-spaces">
      <Box mb="20px">
        <Heading textAlign="center" size="2xl">
          ~ About App ~
        </Heading>
      </Box>
      <Flex alignItems="center" justify="center">
        <Wrap justify="center" alignItems="center" spacing={8} m={5}>
          {PrologueLists.map((list, index) => (
            <TitleCard title={list.title}>
              <Stack spacing={16}>
                <Text fontSize="lg">{list.text}</Text>
                <Flex justify="center">
                  <list.image />
                </Flex>
              </Stack>
            </TitleCard>
          ))}
        </Wrap>
      </Flex>
    </Box>
  );
});

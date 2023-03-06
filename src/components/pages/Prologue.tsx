import { Box, Flex, Heading, Stack, Text, Wrap } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { TitleCard } from "components/molecules/TitleCard";
import { PrologueLists } from "lib/prologueList";

export const Prologue: VFC = memo(() => {
  return (
    <Box p={43} whiteSpace="break-spaces" mb={100}>
      <Box mb="20px">
        <Heading textAlign="center" fontSize={{ base: "3xl", md: "4xl" }}>
          ~ About App ~
        </Heading>
      </Box>
      <Flex alignItems="center" justify="center">
        <Wrap justify="center" alignItems="center" spacing={8} m={5}>
          {PrologueLists.map((list, index) => (
            <TitleCard title={list.title} key={index}>
              <Stack spacing={16}>
                <Text fontSize={{ base: "sm", md: "lg" }}>{list.text}</Text>
                <Flex justify="center">
                  <list.image />
                </Flex>
              </Stack>
            </TitleCard>
          ))}
          <Box>
            <Text fontSize={{ base: "12px", md: "15px" }}>
              * 関連通知等により表記のものと異なる可能性があります。点数の比較については参考としてご活用ください。
            </Text>
          </Box>
        </Wrap>
      </Flex>
    </Box>
  );
});

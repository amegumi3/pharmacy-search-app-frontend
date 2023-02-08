import { Box, Button, Heading, HStack, Image, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Card: VFC = memo(() => {
  return (
    <>
      <VStack mt={7}>
        <Box w="90%" h="110px" bgColor="pink.50" p={5} borderRadius="md" boxShadow="lg">
          <HStack spacing={9}>
            <Image src="https://3.bp.blogspot.com/-tkXn5gIOMSo/UV1JBZK5k8I/AAAAAAAAPRU/eq5Rs79XDGQ/s1600/yakkyoku.png" boxSize="55" />
            <Box>
              <Stack>
                <Heading as="h6" size="md">
                  薬局名
                </Heading>
                .<Text>住所</Text>
              </Stack>
            </Box>
            <Spacer />
            <Button>詳細情報</Button>
          </HStack>
        </Box>
      </VStack>
    </>
  );
});

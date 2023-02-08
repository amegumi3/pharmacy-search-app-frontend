import { Box, Button, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { Card } from "components/organisms/Card";
import { AuthContext } from "providers/Auth";
import { memo, useContext, VFC } from "react";

export const Home: VFC = memo(() => {
  const { currentUser, isSignedIn } = useContext(AuthContext);
  return (
    <>
      <Box
        h="sm"
        w="100%"
        backgroundImage="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex p={5}>
          {isSignedIn && currentUser ? <Text>{currentUser?.name} さん</Text> : <Text>ゲスト</Text>}
          <Flex align="center" justify="center" height="40vh">
            <Box bg="white" w="lg" p={15} borderRadius="md">
              <Stack>
                <Heading>Search</Heading>
                <Text size="md">近くの薬局を検索 </Text>
              </Stack>
              <Box m={4}>
                <Flex>
                  <Input />
                  <Button ml={4}>検索</Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Card />
    </>
  );
  
});

import { Box, Flex } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const CenterBox: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="md" p={4} borderRadius="md">
        {children}
      </Box>
    </Flex>
  );
};

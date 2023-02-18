import { Box, Flex } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  height?: string;
};

export const CenterBox: VFC<Props> = (props) => {
  const { children, height="100vh" } = props;
  return (
    <Flex align="center" justify="center" height={height}>
      <Box bg="white" w={{ base: "sm", md: "xl" }} p={5} borderRadius="md">
        {children}
      </Box>
    </Flex>
  );
};

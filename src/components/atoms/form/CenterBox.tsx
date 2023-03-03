import { Box, Flex } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  height?: string;
};

export const CenterBox: VFC<Props> = (props) => {
  const { children, height="100vh" } = props;
  return (
    <Flex align="center" justify="center" height={height} m="auto">
      <Box bg="white" w={{ base: "md", md: "2xl" }} p={5} borderRadius="md">
        {children}
      </Box>
    </Flex>
  );
};

import { Box, Flex } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  baseHeight?: string;
  overHeight?: string;
};

export const CenterBox: VFC<Props> = (props) => {
  const { children, baseHeight = "90vh", overHeight = "90vh" } = props;
  
  return (
    <Flex align="center" justify="center" height={{ base: baseHeight, md: overHeight }} m="auto">
      <Box bg="white" w={{ base: "xs", md: "2xl" }} p={5} borderRadius="md">
        {children}
      </Box>
    </Flex>
  );
};

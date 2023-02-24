import { Box, VStack } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  padding: number;
  bg?: string;
  width?: string;
};

export const Card: VFC<Props> = (props) => {
  const { children, bg = "gray.50", width = "90%", padding } = props;
  return (
    <VStack mt={23}>
      <Box bg={bg} p={padding} borderRadius="md" boxShadow="lg" w={width}>
        {children}
      </Box>
    </VStack>
  );
};

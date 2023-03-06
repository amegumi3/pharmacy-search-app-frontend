import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  image: string;
  bg?: string;
  p?: number;
  w?: string;
};

export const PrimaryImageCard: VFC<Props> = (props) => {
  const { children, image, bg, w = "98%", p } = props;
  
  return (
    <VStack spacing={1}>
      <Box bg={bg} w={w} borderRadius="md" p={p} boxShadow="sm">
        <HStack spacing={9} p={2}>
          <Image src={image} boxSize="55" />
          {children}
        </HStack>
      </Box>
    </VStack>
  );
};

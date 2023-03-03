import { Flex, HStack, Image } from "@chakra-ui/react";
import { VFC } from "react";

import { pharmacyImage, reportImage } from "lib/imageLink";

export const ThirdStepImage: VFC = () => {
  return (
    <HStack spacing={29}>
      <Flex>
        <Image src={pharmacyImage} boxSize="35" />
        <Image src={reportImage} boxSize="49" />
      </Flex>
      <Flex>
        <Image src={reportImage} boxSize="49" />
        <Image src={pharmacyImage} boxSize="35" />
      </Flex>
    </HStack>
  );
};

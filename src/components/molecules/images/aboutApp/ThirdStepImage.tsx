import { Flex, Image } from "@chakra-ui/react";
import { VFC } from "react";

import { pharmacyImage, reportImage } from "lib/imageLink";

export const ThirdStepImage: VFC = () => {
  return (
    <>
      <Flex>
        <Image src={reportImage} boxSize="49" />
        <Image src={pharmacyImage} boxSize="35" />
      </Flex>
      <Flex>
        <Image src={reportImage} boxSize="49" />
        <Image src={pharmacyImage} boxSize="35" />
      </Flex>
    </>
  );
};

import { Flex, Heading, Image } from "@chakra-ui/react";
import { VFC } from "react";

import { pharmacyImage, prescriptionImage } from "lib/imageLink";

export const SecoundStepImage: VFC = () => {
  return (
    <>
      <Flex>
        <Image src={prescriptionImage} boxSize="49" />
        <Image src={pharmacyImage} boxSize="35" />
      </Flex>
      <Heading>≠</Heading>
      <Flex>
        <Image src={prescriptionImage} boxSize="49" />
        <Image src={pharmacyImage} boxSize="35" />
      </Flex>
    </>
  );
};

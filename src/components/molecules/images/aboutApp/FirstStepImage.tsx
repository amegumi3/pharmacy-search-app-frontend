import { HStack, Image } from "@chakra-ui/react";
import { VFC } from "react";

import { pharmacyImage, searchImage } from "lib/imageLink";

export const FirstStepImage: VFC = () => {
  return (
    <>
      <Image src={searchImage} boxSize="65" />
      <HStack>
        <Image src={pharmacyImage} boxSize="35" />
        <Image src={pharmacyImage} boxSize="35" />
        <Image src={pharmacyImage} boxSize="35" />
      </HStack>
    </>
  );
};

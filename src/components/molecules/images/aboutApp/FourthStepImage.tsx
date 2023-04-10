import { HStack, Image } from "@chakra-ui/react";
import { VFC } from "react";

import { consultaionImage, pcrImage, womanImage } from "lib/imageLink";

export const FourthStepImage: VFC = () => {
  return (
    <>
      <HStack spacing={34}>
        <Image src={pcrImage} boxSize="49" />
        <Image src={consultaionImage} boxSize="49" />
        <Image src={womanImage} boxSize="49" />
      </HStack>
    </>
  );
};

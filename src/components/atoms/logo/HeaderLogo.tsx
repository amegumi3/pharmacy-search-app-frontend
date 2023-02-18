import { Flex, Heading } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

export const HeaderLogo: VFC = memo(() => {
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/"), [history]);

  return(
    <Flex as="a" _hover={{ cursor: "pointer" }} align="center">
    <Heading as="h1" fontSize={{ base: "lg", md: "xl" }} onClick={onClickHome}>
      PHARMACY-SEARCH
    </Heading>
  </Flex>
  )
});
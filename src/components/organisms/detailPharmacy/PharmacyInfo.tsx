import { memo, useCallback, VFC } from "react";
import { Box, Link, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Pharmacy } from "types/pharmacy";

export const PharmacyInfo: VFC<Omit<Pharmacy, "id" | "shuttered">> = memo((props) => {
  const { name, tel, postalCode, adress } = props;
  const history = useHistory();
  const onClickBack = useCallback(() => history.goBack(), [history]);

  return (
    <Box>
      <Flex justifyContent="space-between" ml={23}>
        <Flex direction="column">
          <Heading as="h6" my={23}>
            {name}
          </Heading>
          <Box>
            <Stack spacing={1}>
              <Box fontSize={{ base: "md", md: "lg" }}>
                <Text> {postalCode}</Text>
                <Text> {adress}</Text>
              </Box>
              <Text> ☎︎ {tel}</Text>
            </Stack>
          </Box>
        </Flex>
        <Flex m={4}>
          <Link onClick={onClickBack} fontSize={{ base: "sm", md: "lg" }}>
            戻る
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
});

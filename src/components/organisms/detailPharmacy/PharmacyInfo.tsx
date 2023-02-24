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
          <Stack spacing={1}>
            <Box>
              <Text> {postalCode}</Text>
              <Text> {adress}</Text>
            </Box>
            <Text> ☎︎ {tel}</Text>
          </Stack>
        </Flex>
        <Flex m={4}>
          <Link onClick={onClickBack}>前のページにもどる</Link>
        </Flex>
      </Flex>
    </Box>
  );
});

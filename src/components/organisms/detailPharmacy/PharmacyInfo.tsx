import { memo, useCallback, useEffect, VFC } from "react";
import { Box, Link, Flex, Heading, Stack, Text, Tag } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { Pharmacy } from "types/pharmacy";
import { useMessage } from "hooks/useMessage";

export const PharmacyInfo: VFC<Omit<Pharmacy, "id">> = memo((props) => {
  const { name, tel, postalCode, address, shuttered } = props;
  const history = useHistory();
  const { showMessage } = useMessage();

  const onClickBack = useCallback(() => history.goBack(), [history]);

  useEffect(() => {
    if (shuttered) {
      showMessage({ status: "info", title: "休業中です" });
    }
  }, [showMessage, shuttered]);

  return (
    <Box>
      <Flex justify="end" mr={4} mt={2}>
        <Link onClick={onClickBack} fontSize={{ base: "sm", md: "lg" }}>
          戻る
        </Link>
      </Flex>
      <Box ml={23}>
        {shuttered ? (
          <Tag colorScheme="red" size="md">
            *休業中
          </Tag>
        ) : (
          <></>
        )}
        <Flex justifyContent="space-between">
          <Flex direction="column">
            <Heading my={23} fontSize={{ base: "2xl", md: "4xl" }}>
              {name}
            </Heading>
            <Box>
              <Stack spacing={1}>
                <Box fontSize={{ base: "sm", md: "lg" }}>
                  <Text>{postalCode}</Text>
                  <Text>{address}</Text>
                </Box>
                <Text fontSize={{ base: "sm", md: "lg" }}> ☎︎ {tel}</Text>
              </Stack>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
});

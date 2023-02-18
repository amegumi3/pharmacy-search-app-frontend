import { Box, Button, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { CenterBox } from "components/atoms/form/CenterBox";
import { SearchAreaForm } from "components/atoms/form/SearchAreaForm";
import { useSearchPharmacies } from "hooks/useSearchPharmacies";
import { AuthContext } from "providers/AuthProvider";
import { ChangeEvent, memo, useContext, useState, VFC } from "react";

export const SearchArea: VFC = memo(() => {
  const { getPharmacies } = useSearchPharmacies();
  const { currentUser, isSignedIn } = useContext(AuthContext);
  const [searchWord, setSearchWord] = useState<string>("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value);
  const onClickSearch = () => getPharmacies(searchWord);

  return (
    <SearchAreaForm>
      <Flex p={5}>
        {isSignedIn && currentUser ? <Text>{currentUser.name} さん</Text> : <Text>ゲスト</Text>}
        <CenterBox height={"40vh"}>
          <Stack>
            <Heading>Search</Heading>
            <Text size="md">近くの薬局を検索 </Text>
          </Stack>
          <Box m={4}>
            <Flex>
              <Input value={searchWord} onChange={onChangeInput} />
              <Button onClick={onClickSearch} disabled={!searchWord} ml={4}>
                検索
              </Button>
            </Flex>
          </Box>
        </CenterBox>
      </Flex>
    </SearchAreaForm>
  );
});

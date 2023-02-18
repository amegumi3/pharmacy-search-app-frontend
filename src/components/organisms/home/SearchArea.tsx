import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { CenterBox } from "components/atoms/form/CenterBox";
import { MainVisual } from "components/atoms/form/MainVisual";
import { SearchInput } from "components/molecules/SearchInput";
import { useSearchPharmacies } from "hooks/useSearchPharmacies";
import { homeMainImage } from "lib";
import { AuthContext } from "providers/AuthProvider";
import { ChangeEvent, memo, useContext, useState, VFC } from "react";

export const SearchArea: VFC = memo(() => {
  const { getPharmacies } = useSearchPharmacies();
  const { currentUser, isSignedIn } = useContext(AuthContext);
  const [searchWord, setSearchWord] = useState<string>("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value);
  const onClickSearch = () => getPharmacies(searchWord);

  return (
    <MainVisual bgImage={homeMainImage}>
      <Flex p={5}>
        {isSignedIn && currentUser ? <Text>{currentUser.name} さん</Text> : <Text>ゲスト</Text>}
        <CenterBox height={"40vh"}>
          <Stack>
            <Heading>Search</Heading>
            <Text size="md">周辺のスポットから薬局を検索 </Text>
          </Stack>
          <Box m={4}>
            <SearchInput value={searchWord} onChange={onChangeInput} disabled={!searchWord} submit={onClickSearch} placeholder={"例：　〇〇駅、〇◯市立〇〇小学校"}/>
          </Box>
        </CenterBox>
      </Flex>
    </MainVisual>
  );
});

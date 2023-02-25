import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { CenterBox } from "components/atoms/form/CenterBox";
import { MainVisual } from "components/atoms/form/MainVisual";
import { SearchInput } from "components/molecules/SearchInput";
import { useSearchPharmacies } from "hooks/useSearchPharmacies";
import { homeMainImage } from "lib";
import { ChangeEvent, Dispatch, memo, SetStateAction, VFC } from "react";

type Props = {
  name: string;
  searchWord: string;
  setSearchWord: Dispatch<SetStateAction<string>>;
};

export const SearchArea: VFC<Props> = memo((props) => {
  const { searchWord, setSearchWord, name } = props;
  const { getPharmacies } = useSearchPharmacies();
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value);
  const onClickSearch = () => getPharmacies(searchWord);

  return (
    <MainVisual bgImage={homeMainImage}>
      <Flex p={5}>
        <Text>{name}</Text>
        <CenterBox height={"40vh"}>
          <Stack>
            <Heading>Search</Heading>
            <Text size="md">周辺のスポットから薬局を検索 </Text>
          </Stack>
          <Box m={4}>
            <SearchInput
              value={searchWord}
              onChange={onChangeInput}
              disabled={!searchWord}
              submit={onClickSearch}
              placeholder={"例：　〇〇駅、〇〇市立□□小学校"}
            />
          </Box>
        </CenterBox>
      </Flex>
    </MainVisual>
  );
});

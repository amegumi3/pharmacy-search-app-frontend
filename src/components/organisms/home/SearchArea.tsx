import { Box, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { ChangeEvent, Dispatch, memo, SetStateAction, useState, VFC } from "react";

import { CenterBox } from "components/atoms/form/CenterBox";
import { MainVisual } from "components/atoms/form/MainVisual";
import { SearchInput } from "components/molecules/SearchInput";
import { useSearchPharmacies } from "hooks/useSearchPharmacies";
import { homeMainImage } from "lib/imageLink";
import { SideMenu } from "components/molecules/SideMenu";

type Props = {
  name: string;
  searchWord: string;
  setSearchWord: Dispatch<SetStateAction<string>>;
};

export const SearchArea: VFC<Props> = memo((props) => {
  const { searchWord, setSearchWord, name } = props;
  const [selectMenu, setSelectMenu] = useState("周辺スポットから");
  const { getPharmacies } = useSearchPharmacies();
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value);
  const onClickSearch = () => getPharmacies(searchWord, selectMenu);

  return (
    <MainVisual bgImage={homeMainImage}>
      <Flex p={5}>
        <Text>{name}</Text>
        <CenterBox height={"40vh"}>
          <Stack>
            <Heading>Search</Heading>
            <Text size="md">{selectMenu}薬局を検索 </Text>
          </Stack>
          <Box mt={4}>
            <VStack spacing={3} display={{base: "sm", md:"md"}}>
              <SideMenu selectMenu={selectMenu} setSelectMenu={setSelectMenu} menuList={["周辺スポットから", "薬局名から"]} />
              <SearchInput
                value={searchWord}
                onChange={onChangeInput}
                disabled={!searchWord}
                submit={onClickSearch}
                placeholder={selectMenu === "周辺スポットから"  ? ("例：　〇〇駅、〇〇市立□□小学校") : selectMenu === "薬局名から" ? ("薬局名を入力") : ""}
              />
            </VStack>
          </Box>
        </CenterBox>
      </Flex>
    </MainVisual>
  );
});

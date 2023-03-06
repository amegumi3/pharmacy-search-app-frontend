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
  const { getPharmacies } = useSearchPharmacies();
  const [selectMenu, setSelectMenu] = useState("周辺スポットから");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value);
  const onClickSearch = () => getPharmacies(searchWord, selectMenu);

  return (
    <MainVisual bgImage={homeMainImage}>
      <Text p={4}>{name}</Text>
      <Flex p={5}>
        <CenterBox baseHeight={"200px"} overHeight={"250px"}>
          <Stack>
            <Heading>Search</Heading>
            <Text size="md">{selectMenu}薬局を検索 </Text>
          </Stack>
          <Box mt={4}>
            <VStack spacing={3} display={{ base: "sm", md: "md" }}>
              <SideMenu selectMenu={selectMenu} setSelectMenu={setSelectMenu} menuList={["周辺スポットから", "住所から", "薬局名から"]} />
              <SearchInput
                value={searchWord}
                onChange={onChangeInput}
                disabled={!searchWord}
                submit={onClickSearch}
                placeholder={
                  selectMenu === "周辺スポットから"
                    ? "例：　〇〇市立□□小学校"
                    : selectMenu === "薬局名から"
                    ? "薬局名を入力"
                    : selectMenu === "住所から"
                    ? "県名を除いた市区町村以降の住所を入力"
                    : ""
                }
              />
            </VStack>
          </Box>
        </CenterBox>
      </Flex>
    </MainVisual>
  );
});

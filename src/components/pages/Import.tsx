import { Box, Flex, Heading, HStack, Wrap } from "@chakra-ui/react";
import { ChangeEvent, useContext, VFC } from "react";

import { AuthContext } from "providers/AuthProvider";
import { Page404 } from "./Page404";
import { usePharmacyImport } from "hooks/import/usePharmacyImport";
import { usePharmacyReportImport } from "hooks/import/usePharmacyReportImport";
import { useReportImport } from "hooks/import/useReportImport";
import { FileImportForm } from "components/organisms/FileImportForm";
import { TitleCard } from "components/molecules/TitleCard";
import { useDestroyData } from "hooks/import/useDestroyData";
import { SideMenu } from "components/molecules/SideMenu";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";

export const Import: VFC = () => {
  const { getPharmacyFile, pharmacySubmit, pharmacyFile } = usePharmacyImport();
  const { pharmacyReportFile, pharmacyReportSubmit, getPharmacyReportFile } = usePharmacyReportImport();
  const { reportFile, reportSubmit, getReportFile } = useReportImport();
  const { selectMenu, setSelectMenu, destroyData } = useDestroyData();

  const onChangePharmacyFile = (e: ChangeEvent<HTMLInputElement>) => getPharmacyFile(e);
  const { isSignedIn } = useContext(AuthContext);
  const onChangePharmacyReportFile = (e: ChangeEvent<HTMLInputElement>) => getPharmacyReportFile(e);
  const onChangeReportFile = (e: ChangeEvent<HTMLInputElement>) => getReportFile(e);

  // const onClickName = (name: string) => setDestroyName(name);

  return (
    <>
      {isSignedIn === true ? (
        <Box>
          <Flex justify="center" mt={42} mb={3}>
            <Heading>ファイル登録フォーム</Heading>
          </Flex>
          <Flex alignItems="center" justify="center">
            <Wrap justify="center" alignItems="center" spacing={8} m={5} w="xsm">
              <FileImportForm title={"STEP 1"} text={"届出一覧表を添付"} onChange={onChangeReportFile} file={reportFile} submit={reportSubmit} />

              <FileImportForm
                title={"STEP 2"}
                text={"コード内容別医療機関一覧表を添付"}
                onChange={onChangePharmacyFile}
                file={pharmacyFile}
                submit={pharmacySubmit}
              />

              <FileImportForm
                title={"STEP 3"}
                text={"届出受理医療機関名簿を添付"}
                onChange={onChangePharmacyReportFile}
                file={pharmacyReportFile}
                submit={pharmacyReportSubmit}
              />

              <TitleCard title={"データを削除する"}>
                <HStack>
                  <SideMenu
                    selectMenu={selectMenu}
                    setSelectMenu={setSelectMenu}
                    menuList={["届出情報を削除", "薬局基本情報を削除", "すべてのデータを削除"]}
                  />
                  <PrimaryButton submit={destroyData} disabled={selectMenu === "削除データを選択してください" ? true : false}>
                    削除
                  </PrimaryButton>
                </HStack>
              </TitleCard>
            </Wrap>
          </Flex>
        </Box>
      ) : (
        <Page404 />
      )}
    </>
  );
};

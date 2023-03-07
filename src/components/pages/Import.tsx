import { Box, Flex, Heading, HStack, Wrap } from "@chakra-ui/react";
import { useContext, VFC } from "react";

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
  const { isSignedIn } = useContext(AuthContext);
  const { reportFile, reportSubmit, getReportFile } = useReportImport();
  const { getPharmacyFile, pharmacySubmit, pharmacyFile } = usePharmacyImport();
  const { pharmacyReportFile, pharmacyReportSubmit, getPharmacyReportFile } = usePharmacyReportImport();
  const { selectMenu, setSelectMenu, destroyData } = useDestroyData();

  return (
    <>
      {isSignedIn === true ? (
        <Box mb={100}>
          <Flex justify="center" mt={42} mb={3}>
            <Heading fontSize={{ base: "xl", md: "3xl" }}>ファイル登録フォーム</Heading>
          </Flex>
          <Flex alignItems="center" justify="center">
            <Wrap justify="center" alignItems="center" spacing={8} m={5} w="xsm">
              <FileImportForm
                title={"STEP 1"}
                text={"届出一覧表を添付"}
                onChange={getReportFile}
                submit={reportSubmit}
                disabled={reportFile.length === 1 ? false : true}
              />

              <FileImportForm
                title={"STEP 2"}
                text={"コード内容別一覧表を添付"}
                onChange={getPharmacyFile}
                submit={pharmacySubmit}
                disabled={pharmacyFile.length > 0 ? false : true}
              />

              <FileImportForm
                title={"STEP 3"}
                text={"届出受理医療機関名簿を添付"}
                onChange={getPharmacyReportFile}
                submit={pharmacyReportSubmit}
                disabled={pharmacyReportFile.length > 0 ? false : true}
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

import { Input, Stack, Text } from "@chakra-ui/react";
import { ChangeEvent, useContext, VFC } from "react";

import { SubmitForm } from "components/organisms/SubmitForm";
import { SubmitButton } from "components/atoms/button/SubmitButton";
import { AuthContext } from "providers/AuthProvider";
import { Page404 } from "./Page404";
import { usePharmacyImport } from "hooks/import/usePharmacyImport";
import { usePharmacyReportImport } from "hooks/import/usePharmacyReportImport";
import { useReportImport } from "hooks/import/useReportImport";

export const Import: VFC = () => {
  const { getPharmacyFile, pharmacySubmit, pharmacyFile } = usePharmacyImport();
  const { pharmacyReportFile, pharmacyReportSubmit, getPharmacyReportFile } = usePharmacyReportImport();
  const { reportFile, reportSubmit, getReportFile } = useReportImport();

  const onChangePharmacyFile = (e: ChangeEvent<HTMLInputElement>) => getPharmacyFile(e);

  const { isSignedIn } = useContext(AuthContext);
  const onChangePharmacyReportFile = (e: ChangeEvent<HTMLInputElement>) => getPharmacyReportFile(e);

  const onChangeReportFile = (e: ChangeEvent<HTMLInputElement>) => getReportFile(e);

  return (
    <>
      {isSignedIn === true ? (
        <SubmitForm title={"データ登録"}>
          <Stack px={8} py={4}>
            <Stack spacing={4} py={5}>
              <Text>届出施設基準一覧表を添付</Text>
              <Input type="file" accept=".xlsx" onChange={onChangeReportFile} />
            </Stack>
            <SubmitButton disabled={!reportFile} submit={reportSubmit}>
              登録
            </SubmitButton>
          </Stack>

          <Stack px={8} py={4}>
            <Stack spacing={4} py={5}>
              <Text>コード内容別医療機関一覧表を添付</Text>
              <Input type="file" accept=".xlsx" onChange={onChangePharmacyFile} />
            </Stack>
            <SubmitButton disabled={!pharmacyFile} submit={pharmacySubmit}>
              登録
            </SubmitButton>
          </Stack>

          <Stack px={8} py={4}>
            <Stack spacing={4} py={5}>
              <Text>届出受理医療機関名簿を添付</Text>
              <Input type="file" accept=".xlsx" onChange={onChangePharmacyReportFile} />
            </Stack>
            <SubmitButton disabled={!pharmacyReportFile} submit={pharmacyReportSubmit}>
              登録
            </SubmitButton>
          </Stack>
        </SubmitForm>
      ) : (
        <Page404 />
      )}
    </>
  );
};

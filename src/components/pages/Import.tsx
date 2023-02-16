import { Input, Stack, Text } from "@chakra-ui/react";
import { ChangeEvent, useContext, VFC } from "react";

import { useImport } from "hooks/useImport";
import { SubmitForm } from "components/organisms/SubmitForm";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { AuthContext } from "providers/AuthProvider";
import { Page404 } from "./Page404";

export const Import: VFC = () => {
  const { getPharmacyFile, getPharmacyReportFile, getSubmit, file, getReportFile } = useImport();
  const onChangePharmacyFile = (e: ChangeEvent<HTMLInputElement>) => getPharmacyFile(e);
  const { isSignedIn } = useContext(AuthContext);
  console.log(isSignedIn);
  const onChangePharmacyReportFile = (e: ChangeEvent<HTMLInputElement>) => getPharmacyReportFile(e);

  const onChangeReportFile = (e: ChangeEvent<HTMLInputElement>) => getReportFile(e);

  const onClickSubmit = () => getSubmit();

  return (
    <>
      {isSignedIn === true ? (
        <SubmitForm title={"データ登録"}>
          <Stack px={8} py={4}>
            <Stack spacing={4} py={5}>
              <Text>コード内容別医療機関一覧表を添付</Text>
              <Input type="file" accept=".xlsx" onChange={onChangePharmacyFile} />
            </Stack>
            <PrimaryButton disabled={!file} submit={onClickSubmit}>
              登録
            </PrimaryButton>
          </Stack>

          <Stack px={8} py={4}>
            <Stack spacing={4} py={5}>
              <Text>届出受理医療機関名簿を添付</Text>
              <Input type="file" accept=".xlsx" onChange={onChangePharmacyReportFile} />
            </Stack>
            <PrimaryButton disabled={!file} submit={onClickSubmit}>
              登録
            </PrimaryButton>
          </Stack>

          <Stack px={8} py={4}>
            <Stack spacing={4} py={5}>
              <Text>届出基準一覧表を添付</Text>
              <Input type="file" accept=".xlsx" onChange={onChangeReportFile} />
            </Stack>
            <PrimaryButton disabled={!file} submit={onClickSubmit}>
              登録
            </PrimaryButton>
          </Stack>
        </SubmitForm>
      ) : (
        <Page404 />
      )}
    </>
  );
};

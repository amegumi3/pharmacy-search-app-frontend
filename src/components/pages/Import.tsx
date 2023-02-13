import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { ChangeEvent, VFC } from "react";

import { useImport } from "hooks/useImport";
import { SubmitForm } from "components/organisms/SubmitForm";

export const Import: VFC = () => {
  const { getPharmacyFile, getReportFile, getSubmit, file } = useImport();
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => getPharmacyFile(e);

  const onChangeReportFile = (e: ChangeEvent<HTMLInputElement>) => getReportFile(e);

  const onClickSubmit = () => getSubmit();

  return (
    <SubmitForm title={"データ登録"}>
      <Stack px={8} py={4}>
        <Stack spacing={4} py={5}>
          <Text>コード内容別医療機関一覧表を添付</Text>
          <Input type="file" accept=".xlsx" onChange={onChangeFile} />
        </Stack>
        <Button disabled={!file} onClick={onClickSubmit}>
          登録
        </Button>
      </Stack>

      <Stack px={8} py={4}>
        <Stack spacing={4} py={5}>
          <Text>届出受理医療機関名簿を添付</Text>
          <Input type="file" accept=".xlsx" onChange={onChangeReportFile} />
        </Stack>
        <Button disabled={!file} onClick={onClickSubmit}>
          登録
        </Button>
      </Stack>
    </SubmitForm>
  );
};

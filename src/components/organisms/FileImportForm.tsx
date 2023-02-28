import { Input, Stack, Text } from "@chakra-ui/react";
import { memo, MouseEvent, VFC } from "react";

import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { TitleCard } from "components/molecules/TitleCard";

type Props = {
  title: string;
  text: string;
  file: File | null;
  onChange: any;
  submit: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
};

export const FileImportForm: VFC<Props> = memo((props) => {
  const { title, text, onChange, file, submit } = props;
  return (
    <TitleCard title={title} baseSize={"3xl"} overSize={"4xl"}>
      <Stack spacing={6} py={4}>
        <Text textAlign="center">{text}</Text>
        <Input type="file" accept=".xlsx" onChange={onChange} />
      </Stack>
      <PrimaryButton disabled={!file} submit={submit}>
        登録
      </PrimaryButton>
    </TitleCard>
  );
});

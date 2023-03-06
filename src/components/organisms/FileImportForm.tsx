import { Input, Stack, Text } from "@chakra-ui/react";
import { memo, MouseEvent, VFC } from "react";

import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { TitleCard } from "components/molecules/TitleCard";

type Props = {
  title: string;
  text: string;
  files: File[];
  onChange: any;
  submit: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  disabled: boolean;
};

export const FileImportForm: VFC<Props> = memo((props) => {
  const { title, text, onChange, submit, disabled } = props;
  return (
    <TitleCard title={title} baseSize={"3xl"} overSize={"4xl"} spacing={2}>
      <Stack spacing={6} py={4}>
        <Text textAlign="center">{text}</Text>
        <Input type="file" multiple accept=".xlsx" onChange={onChange} />
      </Stack>
      <PrimaryButton  submit={submit} disabled={disabled}>
        登録
      </PrimaryButton>
    </TitleCard>
  );
});

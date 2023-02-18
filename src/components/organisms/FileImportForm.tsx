import { Center, Heading, Input, Stack, Text,  WrapItem } from "@chakra-ui/react";
import { SubmitButton } from "components/atoms/button/SubmitButton";
import { memo, MouseEvent, VFC } from "react";

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
    <WrapItem h="xsm">
      <Center bg="white" p={8} borderRadius="md" w="md" >
        <Stack pb={6}>
          <Heading textAlign="center" color="pink">
            {title}
          </Heading>
          <Stack spacing={6} py={4}>
            <Text textAlign="center">{text}</Text>
            <Input type="file" accept=".xlsx" onChange={onChange} />
          </Stack>
          <SubmitButton disabled={!file} submit={submit}>
            登録
          </SubmitButton>
        </Stack>
      </Center>
    </WrapItem>
  );
});

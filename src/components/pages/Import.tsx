import { Box, Button, Divider, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useState, VFC } from "react";

export const Import: VFC = () => {
  const [file, setFile] = useState<File | null>(null);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0].name.includes("コード内容別一覧表")) {
      setFile(files[0]);
    } else {
      alert("ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください");
    }
  };
  const onChangeSubmit = useCallback(async () => {
    console.log(file);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);
      try {
        await axios.post("http://localhost:3010/api/v1/pharmacies/import", formData).then((res) => {
          console.log(res.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [file]);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="md" p={4} borderRadius="md">
        <Heading textAlign="center">データ登録</Heading>
        <Divider my={4} />
        <Stack px={8} py={4}>
          <Stack spacing={4} py={5}>
            <Text>コード内容別医療機関一覧表を添付</Text>
            <Input type="file" accept=".xlsx" onChange={onChangeFile} />
          </Stack>
          <Button disabled={!file} onClick={onChangeSubmit}>
            登録
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

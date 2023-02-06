import { Box, Button, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { signUp } from "lib/api/auth";
import { ChangeEvent, memo, MouseEvent, useState, VFC } from "react";
import { useHistory } from "react-router-dom";
import { SignUpParams } from "types/api";

export const SignUp: VFC = memo(() => {
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onChangePasswordConfirmation = (e: ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value);

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    const params: SignUpParams = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    try {
      const res = await signUp(params);
      console.log(res);

      if (res.status === 200) {
        alert("登録しました");
        history.push("/");
      } else {
        alert("登録に失敗しました");
      }
    } catch (err) {
      alert("登録に失敗しました");
      console.log(err);
    }
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="md" p={4} borderRadius="md">
        <Heading textAlign="center">新規登録</Heading>
        <Divider my={4} />
        <Stack px={8} py={4}>
          <Stack spacing={4} py={5}>
            <Input placeholder="ニックネーム" value={name} onChange={onChangeName} />
            <Input placeholder="メールアドレス" value={email} onChange={onChangeEmail} />
            <Input placeholder="パスワード（６文字以上）" value={password} onChange={onChangePassword} />
            <Input placeholder="パスワード確認" value={passwordConfirmation} onChange={onChangePasswordConfirmation} />
          </Stack>
          <Button disabled={!name || !email || !password || !passwordConfirmation ? true : false} onClick={handleSubmit}>
            登録
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});

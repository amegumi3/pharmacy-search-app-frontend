import { Box, Button, Divider, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { signUp } from "lib/api/auth";
import { AuthContext } from "providers/Auth";
import { ChangeEvent, memo, MouseEvent, useCallback, useContext, useState, VFC } from "react";
import { useHistory } from "react-router-dom";
import { SignUpParams } from "types/api";

export const SignUp: VFC = memo(() => {
  const history = useHistory();
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onChangePasswordConfirmation = (e: ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value);

  const onCLickSignIn = useCallback(() => history.push("/signin"), [history]);

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
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
          Cookies.set("_access_token", res.headers["access-token"]);
          Cookies.set("_client", res.headers["client"]);
          Cookies.set("_uid", res.headers["uid"]);

          setIsSignedIn(true);
          setCurrentUser(res.data.data);

          alert("登録しました");
          history.push("/");
        } else {
          alert("登録に失敗しました");
        }
      } catch (err) {
        alert("登録に失敗しました");
        console.log(err);
      }
    },
    [email, history, name, password, passwordConfirmation, setCurrentUser, setIsSignedIn]
  );

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
          <Text textAlign="center" as="a" pt={8} _hover={{ cursor: "pointer" }} onClick={onCLickSignIn}>
            ログインはこちら
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
});

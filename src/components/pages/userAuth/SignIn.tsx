import { Box, Button, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { signIn } from "lib/api/auth";
import { AuthContext } from "providers/Auth";
import { ChangeEvent, memo, MouseEvent, useContext, useState, VFC } from "react";
import { useHistory } from "react-router-dom";
import { SignInParams } from "types/api";

export const SignIn: VFC = memo(() => {
  const history = useHistory();
  const {setIsSignedIn, setCurrentUser} = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    const params: SignInParams = {
      email: email,
      password: password,
    };

    try {
      const res = await signIn(params);

      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsSignedIn(true)
        setCurrentUser(res.data.data)

        alert("ログインしました");
        history.push("/");
      } else {
        alert("ログインに失敗しました");
      }
    } catch (err) {
      console.log(err);
      alert("ログインに失敗しました");
    }
  };
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="md" p={4} borderRadius="md">
        <Heading textAlign="center">ログイン</Heading>
        <Divider my={4} />
        <Stack px={8} py={4}>
          <Stack spacing={4} py={5}>
            <Input placeholder="メールアドレス" value={email} onChange={onChangeEmail} />
            <Input placeholder="パスワード（６文字以上）" value={password} onChange={onChangePassword} />
          </Stack>
          <Button disabled={!email || !password ? true : false} onClick={handleSubmit}>
            ログイン
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});

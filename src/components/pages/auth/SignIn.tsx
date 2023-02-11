import { Input } from "@chakra-ui/react";
import { memo, MouseEvent, VFC } from "react";

import { useSignIn } from "hooks/auth/useSignIn";
import { UserAuthForm } from "components/template/UserAuthForm";

export const SignIn: VFC = memo(() => {
  const { email, setEmail, password, setPassword, handleSubmit, onCLickSignUp } = useSignIn();
  const onClickSubmit = (e: MouseEvent<HTMLButtonElement>) => handleSubmit(e);

  return (
    <UserAuthForm
      title={"ログイン"}
      disabled={!email || !password ? true : false}
      submit={onClickSubmit}
      link={onCLickSignUp}
      linkName={"登録はこちら"}
      buttonName={"ログイン"}
    >
      <Input placeholder="メールアドレス" value={email} onChange={(event) => setEmail(event.target.value)} />
      <Input placeholder="パスワード（６文字以上）" value={password} onChange={(event) => setPassword(event.target.value)} />
    </UserAuthForm>
  );
});

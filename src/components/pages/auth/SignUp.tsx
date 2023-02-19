import { Input } from "@chakra-ui/react";
import { memo, MouseEvent,  VFC } from "react";

import { useSignUp } from "hooks/auth/useSignUp";
import { UserAuthForm } from "components/template/UserAuthForm";

export const SignUp: VFC = memo(() => {
  const { name, setName, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, handleSubmit, onCLickSignIn } =
    useSignUp();
  const onClickSubmit = (e: MouseEvent<HTMLButtonElement>) => handleSubmit(e);

  return (
    <UserAuthForm
      title={"新規登録"}
      submit={onClickSubmit}
      disabled={!name || !email || !password || !passwordConfirmation ? true : false}
      buttonName={"登録"}
      link={onCLickSignIn}
      linkName={"ログインはこちら"}
    >
      <Input placeholder="ニックネーム" value={name} onChange={(event) => setName(event.target.value)} />
      <Input placeholder="メールアドレス" value={email} onChange={(event) => setEmail(event.target.value)} />
      <Input placeholder="パスワード（６文字以上）" value={password} onChange={(event) => setPassword(event.target.value)} />
      <Input placeholder="パスワード確認" value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} />
    </UserAuthForm>
  );
});

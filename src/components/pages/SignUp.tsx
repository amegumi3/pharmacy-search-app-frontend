import { Input } from "@chakra-ui/react";
import { memo, MouseEvent, VFC } from "react";

import { useSignUp } from "hooks/auth/useSignUp";
import { UserAuthForm } from "components/template/UserAuthForm";
import { Page404 } from "./Page404";

export const SignUp: VFC = memo(() => {
  const { email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, handleSubmit, onCLickSignIn } = useSignUp();
  const onClickSubmit = (e: MouseEvent<HTMLButtonElement>) => handleSubmit(e);

  return (
    <>
      {process.env.REACT_APP_ENV === "local" ? (
        <UserAuthForm
          title={"新規登録"}
          submit={onClickSubmit}
          disabled={!email || !password || !passwordConfirmation ? true : false}
          buttonName={"登録"}
          link={onCLickSignIn}
          linkName={"ログインはこちら"}
        >
          <Input placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="パスワード（６文字以上）" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          <Input
            placeholder="パスワード確認"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
          />
        </UserAuthForm>
      ) : (
        <Page404 />
      )}
    </>
  );
});

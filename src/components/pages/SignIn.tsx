import { Input } from "@chakra-ui/react";
import { memo, MouseEvent, useCallback, VFC } from "react";

import { useSignIn } from "hooks/auth/useSignIn";
import { UserAuthForm } from "components/template/UserAuthForm";
import { Page404 } from "./Page404";

export const SignIn: VFC = memo(() => {
  const { email, setEmail, password, setPassword, handleSubmit, onCLickSignUp } = useSignIn();
  const onClickSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => handleSubmit(e), [handleSubmit]);

  return (
    <>
      {process.env.REACT_APP_ENV === "local" ? (
        <UserAuthForm
          title={"ログイン"}
          disabled={!email || !password ? true : false}
          submit={onClickSubmit}
          link={onCLickSignUp}
          linkName={"登録はこちら"}
          buttonName={"ログイン"}
        >
          <Input placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="パスワード（６文字以上）" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </UserAuthForm>
      ) : (
        <Page404 />
      )}
    </>
  );
});

import { Input } from "@chakra-ui/react";
import { UserAuthForm } from "components/template/UserAuthForm";
import { memo, VFC } from "react";

export const SignUp:VFC = memo(() => {
  return (
    <UserAuthForm title={"新規登録"}>
      <Input placeholder="ニックネーム"/>
      <Input placeholder="メールアドレス"/>
      <Input placeholder="パスワード"/>
      <Input placeholder="パスワード確認"/>
    </UserAuthForm>
  );
});
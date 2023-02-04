import { Input } from "@chakra-ui/react";
import { UserAuthForm } from "components/template/UserAuthForm";
import { memo, VFC } from "react";

export const SignIn:VFC = memo(() => {
  return (
    <UserAuthForm title={"ログイン"}>
          <Input placeholder="ニックネーム"/>
          <Input placeholder="メールアドレス"/>
    </UserAuthForm>
  );
});

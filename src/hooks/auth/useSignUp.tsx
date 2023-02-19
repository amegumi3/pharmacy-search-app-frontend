import { useMessage } from "hooks/useMessage";
import Cookies from "js-cookie";
import { client } from "lib/api/client";
import { AuthContext } from "providers/AuthProvider";
import { MouseEvent, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SignUpParams } from "types/auth";

export const useSignUp = () => {
  const history = useHistory();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const { showMessage } = useMessage();

  const onCLickSignIn = useCallback(() => history.push("/signin"), [history]);
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      const params: SignUpParams = {
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      };
      try {
        const res = await client.post("auth/sign_up", params);
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        showMessage({ status: "success", title: "登録しました" });
        history.push("/");
      } catch (err: any) {
        console.log(err);
        const errMessages = err.response.data.errors.fullMessages;
        errMessages.map((message: string) => console.log(message));
        showMessage({ status: "error", title: "登録に失敗しました" });
      }
    },
    [email, history, name, password, passwordConfirmation, setCurrentUser, setIsSignedIn, showMessage]
  );
  return { name, setName, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, handleSubmit, onCLickSignIn };
};

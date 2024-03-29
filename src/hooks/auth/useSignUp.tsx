import { MouseEvent, useCallback, useContext, useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import { useMessage } from "hooks/useMessage";
import { client } from "lib/api/client";
import { AuthContext } from "providers/AuthProvider";
import { SignUpParams } from "types/auth";

export const useSignUp = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setIsSignedIn, setCurrentUser, setLoading } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const onCLickSignIn = useCallback(() => history.push("/signin"), [history]);

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      const params: SignUpParams = {
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      };
      setLoading(true);

      try {
        const res = await client.post("auth", params);
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
      } finally {
        setLoading(false);
      }
    },
    [email, history, password, passwordConfirmation, setCurrentUser, setIsSignedIn, setLoading, showMessage]
  );
  return { email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, handleSubmit, onCLickSignIn };
};

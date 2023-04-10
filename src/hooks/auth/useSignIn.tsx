import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { MouseEvent, useCallback, useContext, useState } from "react";

import { client } from "lib/api/client";
import { SignInParams } from "types/auth";
import { AuthContext } from "providers/AuthProvider";
import { useMessage } from "hooks/useMessage";

export const useSignIn = () => {
  const history = useHistory();
  const { setIsSignedIn, setCurrentUser, setLoading } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { showMessage } = useMessage();
  const onCLickSignUp = useCallback(() => history.push("/signup"), [history]);

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      const params: SignInParams = {
        email: email,
        password: password,
      };
      setLoading(true);
      try {
        const res = await client.post("auth/sign_in", params);
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        console.log(res.data);
        showMessage({ status: "success", title: "ログインしました" });
        history.push("/");
      } catch (err) {
        console.log(err);
        showMessage({ status: "error", title: "ログインに失敗しました" });
      } finally {
        setLoading(false);
      }
    },
    [email, history, password, setCurrentUser, setIsSignedIn, setLoading, showMessage]
  );
  return { email, setEmail, password, setPassword, handleSubmit, onCLickSignUp };
};

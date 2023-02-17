import Cookies from "js-cookie";
import { client } from "lib/api/client";
import { AuthContext } from "providers/AuthProvider";
import { MouseEvent, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SignInParams } from "types/auth";

export const useSignIn = () => {
  const history = useHistory();
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onCLickSignUp = useCallback(() => history.push("/signup"), [history]);

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      const params: SignInParams = {
        email: email,
        password: password,
      };
      try {
        const res = await client.post("auth/sign_in", params);
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        console.log(res.data);
        alert("成功しました");
        history.push("/");
      } catch (err) {
        console.log(err);
        alert("失敗しました");
      }
    },
    [email, history, password, setCurrentUser, setIsSignedIn]
  );
  return { email, setEmail, password, setPassword, handleSubmit, onCLickSignUp };
};

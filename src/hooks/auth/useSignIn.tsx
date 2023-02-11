import Cookies from "js-cookie";
import { signIn } from "lib/api/auth";
import { AuthContext } from "providers/AuthProvider";
import { MouseEvent, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SignInParams } from "types/api";

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
        const res = await signIn(params);

        if (res.status === 200) {
          Cookies.set("_access_token", res.headers["access-token"]);
          Cookies.set("_client", res.headers["client"]);
          Cookies.set("_uid", res.headers["uid"]);

          setIsSignedIn(true);
          setCurrentUser(res.data.data);

          alert("ログインしました");
          history.push("/");
        } else {
          alert("ログインに失敗しました");
        }
      } catch (err) {
        console.log(err);
        alert("ログインに失敗しました");
      }
    },
    [email, history, password, setCurrentUser, setIsSignedIn]
  );
  return { email, setEmail, password, setPassword, handleSubmit, onCLickSignUp };
};

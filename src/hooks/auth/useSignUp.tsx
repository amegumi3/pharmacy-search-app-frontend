import Cookies from "js-cookie";
import { signUp } from "lib/api/auth";
import { AuthContext } from "providers/AuthProvider";
import { MouseEvent, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SignUpParams } from "types/api";

export const useSignUp = () => {
  const history = useHistory();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

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
        const res = await signUp(params);
        console.log(res);

        if (res.status === 200) {
          Cookies.set("_access_token", res.headers["access-token"]);
          Cookies.set("_client", res.headers["client"]);
          Cookies.set("_uid", res.headers["uid"]);

          setIsSignedIn(true);
          setCurrentUser(res.data.data);

          alert("登録しました");
          history.push("/");
        } else {
          alert("登録に失敗しました");
        }
      } catch (err: any) {
        alert("登録に失敗しました");
        console.log(err);
        const errMessages = err.response.data.errors.fullMessages;
        errMessages.map((message: string) => console.log(message));
      }
    },
    [email, history, name, password, passwordConfirmation, setCurrentUser, setIsSignedIn]
  );
  return { name, setName, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, handleSubmit, onCLickSignIn };
};

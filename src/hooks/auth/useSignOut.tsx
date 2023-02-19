import Cookies from "js-cookie";
import { client } from "lib/api/client";
import { AuthContext } from "providers/AuthProvider";
import { MouseEvent, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";

import { useMessage } from "hooks/useMessage";

export const useSignOut = () => {
  const history = useHistory();
  const { setIsSignedIn } = useContext(AuthContext);
  const { showMessage } = useMessage();

  const signOut = () => {
    return client.delete("auth/sign_out", {
      headers: {
        "access-token": Cookies.get("_access_token"),
        client: Cookies.get("_client"),
        uid: Cookies.get("_uid"),
      },
    });
  };

  const handleSignOut = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      try {
        const res = await signOut();
        if (res.data.success === true) {
          Cookies.remove("_access_token");
          Cookies.remove("_client");
          Cookies.remove("_uid");

          setIsSignedIn(false);
          history.push("/signin");
          showMessage({ status: "success", title: "ログアウトしました" });
        } else {
          showMessage({ status: "error", title: "ログアウトに失敗しました" });
        }
      } catch (err) {
        console.log(err);
      }
    },
    [history, setIsSignedIn, showMessage]
  );
  return { handleSignOut };
};

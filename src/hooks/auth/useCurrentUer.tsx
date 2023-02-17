import Cookies from "js-cookie";
import { client } from "lib/api/client";
import { AuthContext } from "providers/AuthProvider";
import { useCallback, useContext } from "react";

export const useCurrentUser = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const getCurrentUser = () => {
    if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return;
    return client.get("/auth/sessions", {
      headers: {
        "access-token": Cookies.get("_access_token"),
        client: Cookies.get("_client"),
        uid: Cookies.get("_uid"),
      },
    });
  };

  const handleGetCurrentUser = useCallback(async () => {
    try {
      const res = await getCurrentUser();
      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);

        console.log(res?.data.data);
      } else {
        console.log("ユーザーがいません");
      }
    } catch (err) {
      console.log(err);
    }
  }, [setCurrentUser, setIsSignedIn]);

  return { handleGetCurrentUser };
};

import { AuthContext } from "providers/Auth";
import { memo, useContext, VFC } from "react";

export const Home:VFC = memo(() => {
  const {currentUser, isSignedIn} = useContext(AuthContext)
  return (
    <>
    {
      isSignedIn && currentUser ? (
        <h2>{currentUser?.name}さん</h2>
      ) : (
        <h1>ゲスト</h1>
      )
    }
    </>
  );
});

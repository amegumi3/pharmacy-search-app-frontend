import { Flex, Heading, Link } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { getCurrentUser, signOut } from "lib/api/auth";
import { AuthContext } from "providers/Auth";
import { memo, MouseEvent, useCallback, useContext, useEffect, VFC } from "react";
import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/"), [history]);

  const {loading, isSignedIn, currentUser, setIsSignedIn, setCurrentUser, setLoading} =  useContext(AuthContext);
  console.log(loading);
  console.log(isSignedIn);
  console.log(currentUser);

    const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)

        console.log(res?.data.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  const onClickSignIn = useCallback(() => history.push("/signin"), [history]);

  const onClickSignOut = async (e: MouseEvent) => {
    try {
      const res = await signOut()

      if (res.data.success === true) {
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        setIsSignedIn(false)
        history.push("/signin")

        alert("ログアウトしました")
      } else {
        console.log("失敗")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Flex as="nav" bg="blue.100" padding={{ base: 3, md: 5 }} justify="space-between">
    <Flex as="a" _hover={{ cursor: "pointer" }}>
      <Heading as="h1" fontSize={{ base: "md", md: "lg" }} onClick={onClickHome} >
        PHARMACY-SEARCH
      </Heading>
    </Flex>
    <Flex fontSize="sm">
      {!loading ?
        isSignedIn ? 
         (<Link onClick={onClickSignOut}>ログアウト</Link>) :
         (<Link onClick={onClickSignIn}>ログイン</Link>) :
        (<p>ローディング中...</p>)  
    }
    </Flex>
  </Flex>
  );
})
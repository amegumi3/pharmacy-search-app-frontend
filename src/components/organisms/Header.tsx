import { Button, Flex, Heading, Link } from "@chakra-ui/react";
import { useCurrentUser } from "hooks/auth/useCurrentUer";
import { useSignOut } from "hooks/auth/useSignOut";

import { AuthContext } from "providers/AuthProvider";
import { memo, MouseEvent, useCallback, useContext, useEffect, VFC } from "react";
import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/"), [history]);
  const { handleGetCurrentUser } = useCurrentUser();
  const { handleSignOut } = useSignOut();
  const { isSignedIn } = useContext(AuthContext);

  useEffect(() => {
    handleGetCurrentUser();
  }, [handleGetCurrentUser]);

  const onClickSignIn = useCallback(() => history.push("/signin"), [history]);

  const onClickSignOut = (e: MouseEvent<HTMLButtonElement>) => handleSignOut(e);

  return (
    <Flex as="nav" bg="blue.100" padding={{ base: 3, md: 5 }} justify="space-between">
      <Flex as="a" _hover={{ cursor: "pointer" }}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }} onClick={onClickHome}>
          PHARMACY-SEARCH
        </Heading>
      </Flex>
      <Flex fontSize="sm">{isSignedIn ? <Button onClick={onClickSignOut}>ログアウト</Button> : <Link onClick={onClickSignIn}>ログイン</Link>}</Flex>
    </Flex>
  );
});

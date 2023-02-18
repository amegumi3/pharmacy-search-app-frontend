import { Button, Flex, Link } from "@chakra-ui/react";
import { HeaderLogo } from "components/atoms/logo/HeaderLogo";
import { useCurrentUser } from "hooks/auth/useCurrentUer";
import { useSignOut } from "hooks/auth/useSignOut";

import { AuthContext } from "providers/AuthProvider";
import { memo, MouseEvent, useCallback, useContext, useEffect, VFC } from "react";
import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
  const history = useHistory();
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
      <HeaderLogo />
      <Flex fontSize="sm">{isSignedIn ? <Button onClick={onClickSignOut}>ログアウト</Button> : <Link onClick={onClickSignIn}>ログイン</Link>}</Flex>
    </Flex>
  );
});

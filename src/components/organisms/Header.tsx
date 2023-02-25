import { Flex, HStack } from "@chakra-ui/react";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";
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

  const onClickImport = useCallback(() => history.push("/import"), [history]);
  const onClickSignOut = (e: MouseEvent<HTMLButtonElement>) => handleSignOut(e);

  return (
    <Flex as="nav" bg="blue.100" padding={{ base: 3, md: 5 }} justify="space-between">
      <HeaderLogo />
      <Flex fontSize="sm">
        {isSignedIn ? (
          <HStack spacing={1}>
            <PrimaryButton submit={onClickImport} bg={"gray.100"}>
              データ登録
            </PrimaryButton>
            <PrimaryButton submit={onClickSignOut} bg={"gray.100"}>
              ログアウト
            </PrimaryButton>
          </HStack>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
});

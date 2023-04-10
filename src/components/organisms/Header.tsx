import { Box, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { memo, MouseEvent, useCallback, useContext, useEffect, VFC } from "react";

import { useCurrentUser } from "hooks/auth/useCurrentUer";
import { useSignOut } from "hooks/auth/useSignOut";
import { AuthContext } from "providers/AuthProvider";
import { HeaderLogo } from "components/atoms/logo/HeaderLogo";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { PrologueButton } from "components/molecules/PrologueButton";
import { HambugerMenu } from "components/atoms/button/HambugerMenu";
import { MenuDrawer } from "components/molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleGetCurrentUser } = useCurrentUser();
  const { handleSignOut } = useSignOut();
  const { isSignedIn } = useContext(AuthContext);

  useEffect(() => {
    handleGetCurrentUser();
  }, [handleGetCurrentUser]);

  const onClickImport = useCallback(() => history.push("/import"), [history]);
  const onClickPrologue = useCallback(() => history.push("/prologue"), [history]);
  const onClickSignOut = (e: MouseEvent<HTMLButtonElement>) => handleSignOut(e);

  return (
    <Flex as="nav" bg="blue.100" p={{ base: 3, md: 5 }} justify="space-between">
      <HeaderLogo />
      <Flex fontSize="sm">
        {isSignedIn ? (
          <>
            <HStack spacing={1} display={{ base: "none", md: "block" }}>
              <PrimaryButton submit={onClickImport} bg={"gray.100"}>
                データ登録
              </PrimaryButton>
              <PrimaryButton submit={onClickSignOut} bg={"gray.100"}>
                ログアウト
              </PrimaryButton>
            </HStack>
            <Box display={{ base: "block", md: "none" }}>
              <HambugerMenu show={onOpen} />
            </Box>
          </>
        ) : (
          <PrologueButton show={onClickPrologue} />
        )}
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} onClickImport={onClickImport} onClickSignOut={onClickSignOut} />
    </Flex>
  );
});

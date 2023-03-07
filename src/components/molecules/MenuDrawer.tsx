import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { MouseEvent, VFC } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickImport: () => void;
  onClickSignOut: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
};

export const MenuDrawer: VFC<Props> = (props) => {
  const { onClose, isOpen, onClickImport, onClickSignOut } = props;
  
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton _focus={{ boxShadow: "none" }} />
          <DrawerHeader textAlign="center"></DrawerHeader>
          <DrawerBody p={0}>
            <Button onClick={onClickImport} bg={"white"} w={"100%"} _focus={{ boxShadow: "none" }}>
              データ登録
            </Button>
            <Button onClick={onClickSignOut} bg={"white"} w={"100%"} _focus={{ boxShadow: "none" }}>
              ログアウト
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

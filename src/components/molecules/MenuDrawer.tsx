import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
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
          <DrawerBody p={0}>
            <Button onClick={onClickImport} bg={"white"} w={"100%"}>
              データ登録
            </Button>
            <Button onClick={onClickSignOut} bg={"white"} w={"100%"}>
              ログアウト
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

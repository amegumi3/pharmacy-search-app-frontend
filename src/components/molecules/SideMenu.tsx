import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Dispatch, memo, VFC } from "react";
import { FaAngleDown } from "react-icons/fa";

type Props = {
  selectMenu: string;
  setSelectMenu: Dispatch<string>;
  menuList: Array<string>;
};

export const SideMenu: VFC<Props> = memo((props) => {
  const { selectMenu, setSelectMenu, menuList } = props;
  const onClickName = (name: string) => setSelectMenu(name);

  return (
    <Box >
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />} fontSize="xs">
          {selectMenu}
        </MenuButton>
        <MenuList fontSize="sxm">
          {menuList.map((menu, index) => (
            <MenuItem onClick={() => onClickName(menu)} key={index}>
              {menu}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
});

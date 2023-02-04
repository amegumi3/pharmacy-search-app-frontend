import { Button } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};
export const PrimaryButton:VFC<Props> = (props) => {
  const { children } = props;
  return (
    <Button bg="orange.100" color="blue.700" _hover={{ opacity:0.8 }} >
      { children }
    </Button>
  );
};

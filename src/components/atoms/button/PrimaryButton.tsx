import { Button } from "@chakra-ui/react";
import { MouseEvent, ReactNode, useContext, VFC } from "react";

import { AuthContext } from "providers/AuthProvider";

type Props = {
  children: ReactNode;
  submit: (e: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  disabled?: boolean;
  bg?: string;
  w?: string;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { loading } = useContext(AuthContext);
  const { children, submit, disabled, bg = "orange.100", w } = props;
  return (
    <Button
      onClick={submit}
      disabled={disabled}
      isLoading={loading}
      ml={4}
      p={5}
      bg={bg}
      w={w}
      _hover={{ opacity: 0.8, cursor: "pointer" }}
      fontSize={{ base: "xs", md: "lg" }}
      _focus={{ boxShadow: "none" }}
    >
      {children}
    </Button>
  );
};

import { Button } from "@chakra-ui/react";
import { MouseEvent, ReactNode, useContext, VFC } from "react";

import { AuthContext } from "providers/AuthProvider";

type Props = {
  children: ReactNode;
  submit: (e: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  disabled?: boolean;
  bg?: string;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { loading } = useContext(AuthContext);
  const { children, submit, disabled, bg = "orange.100" } = props;
  return (
    <Button onClick={submit} disabled={disabled} isLoading={loading} ml={4} bg={bg} _hover={{ opacity: 0.8, cursor: "pointer" }}>
      {children}
    </Button>
  );
};

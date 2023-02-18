import { Button } from "@chakra-ui/react";
import { MouseEvent, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  submit: (e: MouseEvent<HTMLButtonElement>) => Promise<void> |void;
  disabled?: boolean;
  bg?: string;
};
 export const PrimaryButton: VFC<Props> = (props) => {
  const { children, submit, disabled , bg="orange.100"} = props;
  return (
      <Button onClick={submit} disabled={disabled} ml={4} bg={bg}_hover={{ opacity: 0.8, cursor: "pointer" }}>
        {children}
      </Button>
  );
};

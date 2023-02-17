import { Button } from "@chakra-ui/react";
import { MouseEvent, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  submit: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  disabled?: boolean;
};
export const PrimaryButton: VFC<Props> = (props) => {
  const { children, submit, disabled } = props;
  return (
    <Button onClick={submit} disabled={disabled} bg="orange.100" color="blue.700" _hover={{ opacity: 0.8, cursor: "pointer" }}>
      {children}
    </Button>
  );
};

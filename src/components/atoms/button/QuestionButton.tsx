import { MouseEvent, ReactNode,  VFC } from "react";

type Props = {
  children: ReactNode;
  submit: (e: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  disabled?: boolean;
};
export const QuestionButton: VFC<Props> = (props) => {
  const { children, submit } = props;
  return (
    // <Button onClick={submit} disabled={disabled} isLoading={loading} ml={4} bg={bg} _hover={{ opacity: 0.8, cursor: "pointer" }}>
    //   {children}
    // </Button>
    <button onClick={submit} >
      {children}
    </button>
  );
};

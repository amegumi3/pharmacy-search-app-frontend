import { Stack, Text } from "@chakra-ui/react";
import { SubmitButton } from "components/atoms/button/SubmitButton";
import { SubmitForm } from "components/organisms/SubmitForm";
import { memo, MouseEvent, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  title: string;
  disabled: boolean;
  submit: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  buttonName: string;
  link: () => void;
  linkName: string;
};

export const UserAuthForm: VFC<Props> = memo((props) => {
  const { children, title, submit, disabled, link, linkName, buttonName } = props;
  return (
    <SubmitForm title={title}>
      <Stack spacing={4} py={5}>
        {children}
      </Stack>
      <SubmitButton submit={submit} disabled={disabled}>
        {buttonName}
      </SubmitButton>
      <Text textAlign="center" as="a" pt={8} _hover={{ cursor: "pointer" }} onClick={link}>
        {linkName}
      </Text>
    </SubmitForm>
  );
});

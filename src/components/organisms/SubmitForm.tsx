import { Divider, Heading, Stack } from "@chakra-ui/react";
import { CenterBox } from "components/atoms/form/CenterBox";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const SubmitForm: VFC<Props> = memo((props) => {
  const { children, title } = props;
  return (
    <CenterBox>
      <Heading textAlign="center">{title}</Heading>
      <Divider my={4} />
      <Stack px={8} py={4}>
        {children}
      </Stack>
    </CenterBox>
  );
});

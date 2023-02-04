import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const UserAuthForm:VFC<Props> = memo((props) => {
  const {children, title} = props;
  return (
    <Flex  align="center"  justify="center" height="100vh">
      <Box bg="white" w="md" p={4} borderRadius="md">
        <Heading textAlign="center">{title}</Heading>
        <Divider my={4} />
        <Stack px={8} py={4}>
          <Stack spacing={4} py={5} >
            {children}
          </Stack>
          <PrimaryButton>登録</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
    );
});
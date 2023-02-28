import { Center, Heading, Stack, WrapItem } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  title: string;
  children: ReactNode;
  baseSize?: string;
  overSize?: string;
};

export const TitleCard: VFC<Props> = memo((props) => {
  const { title, children, baseSize = "2xl", overSize = "3xl" } = props;
  return (
    <WrapItem>
      <Center bg="white" p={8} borderRadius="md" w={{ base: "500px", md: "700px" }}>
        <Stack pb={6} spacing={9}>
          <Heading textAlign="center" color="pink" fontSize={{ base: baseSize, md: overSize }}>
            {title}
          </Heading>
          {children}
        </Stack>
      </Center>
    </WrapItem>
  );
});

import { Center, Heading, Stack, WrapItem } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  title: string;
  children: ReactNode;
  baseSize?: string;
  overSize?: string;
  spacing?: number;
};

export const TitleCard: VFC<Props> = memo((props) => {
  const { title, children, baseSize = "xl", overSize = "3xl", spacing = 9 } = props;
  return (
    <WrapItem>
      <Center bg="white" p={8} borderRadius="md" w={{ base: "350px", md: "700px" }}>
        <Stack pb={6} spacing={spacing}>
          <Heading textAlign="center" color="pink" fontSize={{ base: baseSize, md: overSize }}>
            {title}
          </Heading>
          {children}
        </Stack>
      </Center>
    </WrapItem>
  );
});

import { Box } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  bgImage: string;
  children: ReactNode;
};

export const MainVisual: VFC<Props> = memo((props) => {
  const { bgImage, children } = props;

  return (
    <Box h={{base: "xs", md: "sm"}} w="100%" bgImage={bgImage} bgPosition="center" bgRepeat="no-repeat" bgSize="cover">
      {children}
    </Box>
  );
});

import { Box, Heading, Link, Slider } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Page404: VFC = memo(() => {
  return (
    <Box>
      <Heading>ページが存在しません</Heading>
      <Slider />
      <Link>トップページへ戻る</Link>
    </Box>
  );
});

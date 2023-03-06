import { Box, Heading, Link, Slider } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

export const Page404: VFC = memo(() => {
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/"), [history]);

  return (
    <Box>
      <Heading>ページが存在しません</Heading>
      <Slider />
      <Link onClick={onClickHome}>トップページへ戻る</Link>
    </Box>
  );
});

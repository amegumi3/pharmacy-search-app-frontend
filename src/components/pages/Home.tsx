import { memo, VFC } from "react";

import { SearchArea } from "components/organisms/SearchArea";
import { Card } from "components/organisms/Card";

export const Home: VFC = memo(() => {
  return (
    <>
      <SearchArea />
      <Card />
    </>
  );
});

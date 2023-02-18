import { memo, VFC } from "react";

import { SearchArea } from "components/organisms/home/SearchArea";
import { Card } from "components/organisms/home/Card";

export const Home: VFC = memo(() => {
  return (
    <>
      <SearchArea />
      <Card />
    </>
  );
});

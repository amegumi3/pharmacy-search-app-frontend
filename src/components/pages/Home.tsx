import { useSearchPharmacies } from "hooks/useSearchPharmacies";
import { memo, VFC } from "react";

import { SearchArea } from "components/organisms/SearchArea";
import { Card } from "components/organisms/Card";

export const Home: VFC = memo(() => {
  const { pharmacies } = useSearchPharmacies();

  return (
    <>
      <SearchArea />
      <Card pharmacies={pharmacies} />
    </>
  );
});

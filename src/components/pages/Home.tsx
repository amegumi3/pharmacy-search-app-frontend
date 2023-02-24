import { memo, useContext, useState, VFC } from "react";

import { SearchArea } from "components/organisms/home/SearchArea";
import { PharmacyCard } from "components/organisms/home/PharmacyCard";
import { AuthContext } from "providers/AuthProvider";

export const Home: VFC = memo(() => {
  const { currentUser, isSignedIn } = useContext(AuthContext);
  const [searchWord, setSearchWord] = useState<string>("");

  return (
    <>
      <SearchArea name={isSignedIn && currentUser ? currentUser.name : "ゲスト"}
      searchWord={searchWord}
      setSearchWord={setSearchWord}
      />
        <PharmacyCard />
    </>
  );
});

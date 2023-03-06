import { memo, useContext, useState, VFC } from "react";

import { SearchArea } from "components/organisms/home/SearchArea";
import { PharmacyCard } from "components/organisms/home/PharmacyCard";
import { AuthContext } from "providers/AuthProvider";
import { Box } from "@chakra-ui/react";

export const Home: VFC = memo(() => {
  const { currentUser, isSignedIn } = useContext(AuthContext);
  const [searchWord, setSearchWord] = useState<string>("");
  
  return (
    <Box mb={100}>
      <SearchArea name={isSignedIn && currentUser ? "管理者" : ""} searchWord={searchWord} setSearchWord={setSearchWord} />
      <PharmacyCard />
    </Box>
  );
});

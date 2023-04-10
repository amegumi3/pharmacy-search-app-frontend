import { index } from "lib/api/pharmacy";
import { useCallback, useContext } from "react";
import { useMessage } from "./useMessage";

import { AuthContext } from "providers/AuthProvider";
import { PharmacyContext } from "providers/PharmacyProvider";

export const useSearchPharmacies = () => {
  const { pharmacies, setPharmacies } = useContext(PharmacyContext);
  const { setLoading } = useContext(AuthContext);
  const { showMessage } = useMessage();

  const getPharmacies = useCallback(
    async (word: string, selectMenu: string) => {
      setLoading(true);
      try {
        const res = await index(word, selectMenu);
        if (res.status === 200) {
          const result = res.data;
          setPharmacies(result);
          console.log(res);
          if (res.data.length === 0) {
            showMessage({ status: "info", title: "検索結果は０件です。別のキーワードで検索してみてください" });
          }
        }
      } catch (err) {
        console.log(err);
        showMessage({ status: "error", title: "検索に失敗しました" });
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setPharmacies, showMessage]
  );
  return { getPharmacies, pharmacies, setPharmacies };
};

import { index } from "lib/api/pharmacy";
import { PharmacyContext } from "providers/PharmacyProvider";
import { useCallback, useContext } from "react";
import { useMessage } from "./useMessage";

export const useSearchPharmacies = () => {
  const { pharmacies, setPharmacies } = useContext(PharmacyContext);
  const { showMessage } = useMessage();

  const getPharmacies = useCallback(
    async (word: string, selectMenu: string) => {
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
      }
    },
    [setPharmacies, showMessage]
  );
  return { getPharmacies, pharmacies, setPharmacies };
};

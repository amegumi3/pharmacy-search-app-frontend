import { index } from "lib/api/pharmacy";
import { PharmacyContext } from "providers/PharmacyProvider";
import { useCallback, useContext } from "react";

export const useSearchPharmacies = () => {
  const { pharmacies, setPharmacies } = useContext(PharmacyContext);
  const getPharmacies = useCallback(
    async (word: string) => {
      try {
        const res = await index(word);
        if (res.status === 200) {
          const result = res.data;
          setPharmacies(result);
          console.log(res);
          if (res.data.length === 0) {
            console.log("検索結果は０件です");
          }
        }
      } catch (err) {
        console.log(err);
        console.log("取得に失敗しました");
      }
    },
    [setPharmacies]
  );
  return { getPharmacies, pharmacies, setPharmacies };
};

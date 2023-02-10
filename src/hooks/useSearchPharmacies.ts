import { searchPharmacy } from "lib/api/pharmacy";
import { useCallback, useState } from "react";
import { Pharmacy } from "types/pharmacy";

export const useSearchPharmacies = () => {
  const [pharmacies, setPharmacies] = useState<Array<Pharmacy>>([]);
  const getPharmacies = useCallback(async (word: string) => {
    try {
      const res = await searchPharmacy(word);
      if (res.status === 200) {
        const result = res.data;
        setPharmacies(result);
      }
    } catch (err) {
      console.log(err);
      console.log("取得に失敗しました");
    }
  }, []);
  return { getPharmacies, pharmacies, setPharmacies };
};

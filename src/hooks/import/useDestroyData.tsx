import { useCallback, useContext, useState } from "react";

import { useMessage } from "hooks/useMessage";
import { AuthContext } from "providers/AuthProvider";
import { destroyPharmacies, destroyReports } from "lib/api/pharmacy";

export const useDestroyData = () => {
  const { setLoading } = useContext(AuthContext);
  const { showMessage } = useMessage();
  const [selectMenu, setSelectMenu] = useState<string>("削除データを選択してください");

  const destroyData = useCallback(async () => {
    alert(`${selectMenu}してもいいですか？`);
    setLoading(true);
    try {
      if (selectMenu === "届出情報を削除") {
        await destroyReports();
        showMessage({ status: "success", title: "届出情報を削除しました" });
      } else if (selectMenu === "薬局基本情報を削除") {
        await destroyPharmacies();
        showMessage({ status: "success", title: "薬局基本情報を削除しました" });
      } else if (selectMenu === "すべてのデータを削除") {
        await destroyReports();
        await destroyPharmacies();
        showMessage({ status: "success", title: "すべてのデータをしました" });
      }
    } catch (err) {
      showMessage({ status: "error", title: "削除に失敗しました" });
    } finally {
      setLoading(false);
      setSelectMenu("削除データを選択してください");
    }
  }, [selectMenu, setLoading, showMessage]);
  return { destroyData, selectMenu, setSelectMenu };
};

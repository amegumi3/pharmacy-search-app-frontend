import { useCallback, useState } from "react";

import { useMessage } from "./useMessage";
import { show } from "lib/api/pharmacy";
import { Report } from "types/Report";

export const useDetailPharmacy = (id: number) => {
  const [reportList, setReportList] = useState<Array<Report | null>>([]);
  const { showMessage } = useMessage();

  const getReports = useCallback(async () => {
    console.log(id);
    try {
      const res = await show(id);
      const result = res.data;
      setReportList(result);
      console.log(res);
      if (res.data.length === 0) {
        showMessage({ status: "info", title: "届出している施設基準はありません" });
      }
    } catch (err) {
      console.log(err);
      showMessage({ status: "error", title: "表示に失敗しました" });
    }
  }, [id, showMessage]);

  // 特徴を表示するための処理
  const featureList: Array<string | undefined> = [];
  if (reportList) {
    for (var i: number = 0; i < reportList?.length; i++) {
      if (reportList[i]?.reportFeature === null) {
        continue;
      }
      featureList.push(reportList[i]?.reportFeature);
    }
  }
  const set = new Set(featureList);
  const features: Array<string | undefined> = Array.from(set);

  return { getReports, reportList, features };
};

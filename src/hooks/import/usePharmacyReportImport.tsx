import { ChangeEvent, useCallback, useState } from "react";

import { pharmacyReportImoprt } from "lib/api/pharmacy";
import { useMessage } from "hooks/useMessage";

export const usePharmacyReportImport = () => {
  const [pharmacyReportFile, setPharmacyReportFile] = useState<File | null>(null);
  const { showMessage } = useMessage();

  const getPharmacyReportFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0].name.includes("届出受理医療機関名簿")) {
      setPharmacyReportFile(files[0]);
    } else {
      showMessage({ status: "error", title: "ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください" });
    }
  };

  const pharmacyReportSubmit = useCallback(async () => {
    console.log(pharmacyReportFile);
    if (pharmacyReportFile) {
      const formData = new FormData();
      formData.append("file", pharmacyReportFile);
      try {
        if (pharmacyReportFile.name.includes("届出受理医療機関名簿")) {
          await pharmacyReportImoprt(formData);
          showMessage({ status: "success", title: "インポートしました" });
          setPharmacyReportFile(null);
        }
      } catch (err) {
        console.log(err);
        showMessage({ status: "error", title: "インポートに失敗しました" });
      }
    }
  }, [pharmacyReportFile, showMessage]);
  return { getPharmacyReportFile, pharmacyReportSubmit, pharmacyReportFile };
};

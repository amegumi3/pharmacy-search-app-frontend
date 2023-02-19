import { ChangeEvent, useCallback, useContext, useState } from "react";

import { pharmacyReportImoprt } from "lib/api/pharmacy";
import { useMessage } from "hooks/useMessage";
import { AuthContext } from "providers/AuthProvider";

export const usePharmacyReportImport = () => {
  const [pharmacyReportFile, setPharmacyReportFile] = useState<File | null>(null);
  const { showMessage } = useMessage();
  const { setLoading } = useContext(AuthContext);

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
      setLoading(true);
      try {
        if (pharmacyReportFile.name.includes("届出受理医療機関名簿")) {
          await pharmacyReportImoprt(formData);
          showMessage({ status: "success", title: "インポートしました" });
          setPharmacyReportFile(null);
        }
      } catch (err) {
        console.log(err);
        showMessage({ status: "error", title: "インポートに失敗しました" });
      } finally {
        setLoading(false);
      }
    }
  }, [pharmacyReportFile, setLoading, showMessage]);
  return { getPharmacyReportFile, pharmacyReportSubmit, pharmacyReportFile };
};

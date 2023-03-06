import { ChangeEvent, useCallback, useContext, useState } from "react";

import { useMessage } from "hooks/useMessage";
import { AuthContext } from "providers/AuthProvider";
import { pharmacyReportImoprt } from "lib/api/pharmacy";

export const usePharmacyReportImport = () => {
  const { setLoading } = useContext(AuthContext);
  const { showMessage } = useMessage();
  const [pharmacyReportFile, setPharmacyReportFile] = useState<Array<File>>([]);

  const getPharmacyReportFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const pharmacyReportFiles = Array.from(files).filter((file) => {
        if (file.name.includes("届出受理医療機関名簿")) {
          return true;
        } else if (file.name.includes("shisetsu")) {
          return true;
        } else {
          return false;
        }
      });
      if (pharmacyReportFiles.length === files.length) {
        setPharmacyReportFile(pharmacyReportFiles);
      } else {
        showMessage({
          status: "error",
          title: "ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください。全てのファイルが正しくセットされる必要があります。",
        });
      }
    }
  },[showMessage]);

  const pharmacyReportSubmit = useCallback(async () => {
    setLoading(true);
    if (pharmacyReportFile) {
      const formData = new FormData();
      pharmacyReportFile.forEach((file) => {
        formData.append("files[]", file);
      });
      try {
        await pharmacyReportImoprt(formData);
        showMessage({ status: "success", title: "インポートしました" });
        setPharmacyReportFile([]);
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

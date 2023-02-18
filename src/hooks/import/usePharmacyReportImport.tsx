import { pharmacyReportImoprt } from "lib/api/pharmacy";
import { ChangeEvent, useCallback, useState } from "react";

export const usePharmacyReportImport = () => {
  const [pharmacyReportFile, setPharmacyReportFile] = useState<File | null>(null);

  const getPharmacyReportFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0].name.includes("届出受理医療機関名簿")) {
      setPharmacyReportFile(files[0]);
    } else {
      alert("ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください");
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
          alert("成功しました");
          setPharmacyReportFile(null);
        }
      } catch (err) {
        console.log(err);
        alert("失敗しました");
      }
    }
  }, [pharmacyReportFile]);
  return { getPharmacyReportFile, pharmacyReportSubmit, pharmacyReportFile };
};

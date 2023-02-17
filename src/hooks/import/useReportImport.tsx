import { pharmacyReportImoprt } from "lib/api/pharmacy";
import { ChangeEvent, useCallback, useState } from "react";

export const useReportImport = () => {
  const [reportFile, setReportFile] = useState<File | null>(null);

  const getReportFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0].name.includes("届出受理医療機関名簿")) {
      setReportFile(files[0]);
    } else {
      alert("ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください");
    }
  };

  const reportSubmit = useCallback(async () => {
    console.log(reportFile);
    if (reportFile) {
      const formData = new FormData();
      formData.append("file", reportFile);
      try {
        if (reportFile.name.includes("届出受理医療機関名簿")) {
          await pharmacyReportImoprt(formData);
          alert("成功しました");
          setReportFile(null);
        }
      } catch (err) {
        console.log(err);
        alert("失敗しました");
      }
    }
  }, [reportFile]);
  return { getReportFile, reportSubmit, reportFile };
};

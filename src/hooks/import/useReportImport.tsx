import { ChangeEvent, useCallback, useContext, useState } from "react";

import { useMessage } from "hooks/useMessage";
import { reportImoprt } from "lib/api/pharmacy";
import { AuthContext } from "providers/AuthProvider";

export const useReportImport = () => {
  const [reportFile, setReportFile] = useState<File | null>(null);
  const { showMessage } = useMessage();
  const { setLoading } = useContext(AuthContext);

  const getReportFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0].name.includes("届出施設基準一覧表")) {
      setReportFile(files[0]);
    } else {
      showMessage({ status: "error", title: "ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください" });
    }
  };

  const reportSubmit = useCallback(async () => {
    console.log(reportFile);
    if (reportFile) {
      const formData = new FormData();
      formData.append("file", reportFile);
      setLoading(true);
      try {
        if (reportFile.name.includes("届出施設基準一覧表")) {
          await reportImoprt(formData);
          showMessage({ status: "success", title: "インポートしました" });
          setReportFile(null);
        }
      } catch (err) {
        console.log(err);
        showMessage({ status: "error", title: "インポートに失敗しました" });
      } finally {
        setLoading(false);
      }
    }
  }, [reportFile, setLoading, showMessage]);
  return { getReportFile, reportSubmit, reportFile };
};

import { ChangeEvent, useCallback, useContext, useState } from "react";

import { useMessage } from "hooks/useMessage";
import { reportImoprt } from "lib/api/pharmacy";
import { AuthContext } from "providers/AuthProvider";

export const useReportImport = () => {
  const [reportFile, setReportFile] = useState<Array<File>>([]);
  const { showMessage } = useMessage();
  const { setLoading } = useContext(AuthContext);

  const getReportFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const reportFiles = Array.from(files).filter((file) => file.name.includes("届出一覧表"));
      if (reportFiles.length === 1) {
        setReportFile(reportFiles);
      } else {
        showMessage({ status: "error", title: "ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください" });
      }
    }
  };

  const reportSubmit = useCallback(async () => {
    console.log(reportFile);
    if (reportFile) {
      const formData = new FormData();
      reportFile.forEach((file) => {
        formData.append("files[]", file);
      });
      setLoading(true);
      try {
        await reportImoprt(formData);
        showMessage({ status: "success", title: "インポートしました" });
        setReportFile([]);
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

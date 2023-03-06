import { ChangeEvent, useCallback, useContext, useState } from "react";

import { useMessage } from "hooks/useMessage";
import { AuthContext } from "providers/AuthProvider";
import { reportImoprt } from "lib/api/pharmacy";

export const useReportImport = () => {
  const { setLoading } = useContext(AuthContext);
  const { showMessage } = useMessage();
  const [reportFile, setReportFile] = useState<Array<File>>([]);

  const getReportFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
        const reportFiles = Array.from(files).filter((file) => file.name.includes("届出一覧表"));
        if (reportFiles.length === 1) {
          setReportFile(reportFiles);
        } else {
          showMessage({ status: "error", title: "ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください" });
        }
      }
    },
    [showMessage]
  );

  const reportSubmit = useCallback(async () => {
    setLoading(true);
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

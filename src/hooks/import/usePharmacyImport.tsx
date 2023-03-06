import { ChangeEvent, useCallback, useContext, useState } from "react";

import { useMessage } from "hooks/useMessage";
import { pharmacyImoprt } from "lib/api/pharmacy";
import { AuthContext } from "providers/AuthProvider";

export const usePharmacyImport = () => {
  const [pharmacyFile, setPharmacyFile] = useState<Array<File>>([]);
  const { showMessage } = useMessage();
  const { setLoading } = useContext(AuthContext);

  const getPharmacyFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const pharmacyFiles = Array.from(files).filter((file) => {
        if (file.name.includes("コード内容別一覧表")) {
          return true;
        } else if (file.name.includes("yakkyoku") && !file.name.includes("shisetsu")) {
          return true;
        } else {
          return false;
        }
      });
      console.log(files);
      if (pharmacyFiles.length === files.length) {
        setPharmacyFile(pharmacyFiles);
      } else {
        showMessage({
          status: "error",
          title: "ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください。全てのファイルが正しくセットされる必要があります。",
        });
      }
    }
  };
  const pharmacySubmit = useCallback(async () => {
    setLoading(true);
    if (pharmacyFile) {
      const formData = new FormData();
      pharmacyFile.forEach((file) => {
        formData.append("files[]", file);
      });
      try {
        await pharmacyImoprt(formData);
        showMessage({ status: "success", title: "インポートしました" });
        setPharmacyFile([]);
      } catch (err) {
        console.log(err);
        showMessage({ status: "error", title: "インポートに失敗しました" });
      } finally {
        setLoading(false);
      }
    }
  }, [pharmacyFile, setLoading, showMessage]);
  return { getPharmacyFile, pharmacySubmit, pharmacyFile };
};

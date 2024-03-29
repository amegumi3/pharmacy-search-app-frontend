import { ChangeEvent, useCallback, useContext, useState } from "react";

import { useMessage } from "hooks/useMessage";
import { pharmacyImport } from "lib/api/pharmacy";
import { AuthContext } from "providers/AuthProvider";

export const usePharmacyImport = () => {
  const [pharmacyFile, setPharmacyFile] = useState<Array<File>>([]);
  const { showMessage } = useMessage();
  const { setLoading } = useContext(AuthContext);

  const getPharmacyFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const pharmacyFiles = Array.from(files).filter((file) => {
        const name = file.name;
        return (
          name.includes("コード内容別") ||
          (name.includes("yakkyoku") && !(name.includes("shisetsu") || name.includes("sisetu"))) ||
          (name.includes("薬局") && !name.includes("届出"))
        );
      });

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
    if (pharmacyFile) {
      const formData = new FormData();
      pharmacyFile.forEach((file) => {
        formData.append("files[]", file);
      });
      setLoading(true);
      try {
        await pharmacyImport(formData);
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

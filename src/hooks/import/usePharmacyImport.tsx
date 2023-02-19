import { ChangeEvent, useCallback, useState } from "react";

import { useMessage } from "hooks/useMessage";
import { pharmacyImoprt } from "lib/api/pharmacy";

export const usePharmacyImport = () => {
  const [pharmacyFile, setPharmacyFile] = useState<File | null>(null);
  const { showMessage } = useMessage();

  const getPharmacyFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0].name.includes("コード内容別一覧表")) {
      setPharmacyFile(files[0]);
    } else {
      showMessage({ status: "error", title: "ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください" });
    }
  };

  const pharmacySubmit = useCallback(async () => {
    console.log(pharmacyFile);
    if (pharmacyFile) {
      const formData = new FormData();
      formData.append("file", pharmacyFile);
      try {
        if (pharmacyFile.name.includes("コード内容別一覧表")) {
          await pharmacyImoprt(formData);
          showMessage({ status: "success", title: "インポートしました" });
          setPharmacyFile(null);
        }
      } catch (err) {
        console.log(err);
        showMessage({ status: "error", title: "インポートに失敗しました" });
      }
    }
  }, [pharmacyFile, showMessage]);
  return { getPharmacyFile, pharmacySubmit, pharmacyFile };
};

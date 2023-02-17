import { pharmacyImoprt } from "lib/api/pharmacy";
import { ChangeEvent, useCallback, useState } from "react";

export const usePharmacyImport = () => {
  const [pharmacyFile, setPharmacyFile] = useState<File | null>(null);

  const getPharmacyFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0].name.includes("コード内容別一覧表")) {
      setPharmacyFile(files[0]);
    } else {
      alert("ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください");
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
          alert("成功しました");
          setPharmacyFile(null);
        }
      } catch (err) {
        console.log(err);
        alert("失敗しました");
      }
    }
  }, [pharmacyFile]);
  return { getPharmacyFile, pharmacySubmit, pharmacyFile };
};

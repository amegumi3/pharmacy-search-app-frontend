import axios from "axios";
import { ChangeEvent, useCallback, useState } from "react";

export const useImport = () => {
  const [file, setFile] = useState<File | null>(null);
  const getPharmacyFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0].name.includes("コード内容別一覧表")) {
      setFile(files[0]);
    } else {
      alert("ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください");
    }
  };

  const getReportFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0].name.includes("届出受理医療機関名簿")) {
      setFile(files[0]);
    } else {
      console.log(file?.name);
      alert("ファイルが正しくセットされませんでした。確認のうえもう一度添付し直してください");
    }
  };

  const getSubmit = useCallback(async () => {
    console.log(file);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);
      try {
        if (file.name.includes("コード内容別一覧表")) {
          await axios.post("http://localhost:3010/api/v1/pharmacies/import", formData).then((res) => {
            console.log(res.data);
            alert("成功しました");
            setFile(null);
          })} else if(file.name.includes("届出受理医療機関名簿")) {
            await axios.post("http://localhost:3010/api/v1/pharmacies/report_import", formData).then((res) => {
              console.log(res.data);
              alert("成功しました");
              setFile(null);
            })
          } ;
      } catch (err) {
        console.log(err);
        alert("失敗しました");
      }
    }
  }, [file]);
  return { file, setFile, getPharmacyFile, getSubmit, getReportFile };
};

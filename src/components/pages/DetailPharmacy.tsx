import { memo, useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Td, Tr } from "@chakra-ui/react";

import { PharmacyContext } from "providers/PharmacyProvider";
import { show } from "lib/api/pharmacy";
import { Report } from "types/Report";
import { PharmacyInfo } from "components/organisms/detailPharmacy/PharmacyInfo";
import { ReportInfo } from "components/organisms/detailPharmacy/ReportInfo";
import { useMessage } from "hooks/useMessage";

export const DetailPharmacy = memo(() => {
  const { id } = useParams<{ id: any }>();
  const { selectedPharmacy } = useContext(PharmacyContext);
  const [reportList, setReportList] = useState<Array<Report | null>>([]);
  const { showMessage } = useMessage();

  console.log(selectedPharmacy);
  const getReports = useCallback(async (id: number) => {
    try {
      const res = await show(id);
      const result = res.data;
      setReportList(result);
      console.log(res);
      if (res.data.length === 0) {
        showMessage({ status: "info", title: "届出している施設基準はありません" });
      }
    } catch (err) {
      console.log(err);
      showMessage({ status: "error", title: "表示に失敗しました" });
    }
  }, [showMessage]);

  useEffect(() => {
    getReports(id);
    console.log(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex direction="column" bgColor="pink.50">
      {selectedPharmacy !== null ? (
        <PharmacyInfo
          name={selectedPharmacy?.name}
          tel={selectedPharmacy?.tel}
          postalCode={selectedPharmacy?.postalCode}
          adress={selectedPharmacy?.adress}
        />
      ) : (
        <></>
      )}

      <ReportInfo>
        {reportList.map((report) =>
          report?.basic === true ? (
            <Tr key={report?.id}>
              <Td>{report?.name}</Td>
              <Td>{report?.point}</Td>
              <Td textAlign="center">◯</Td>
            </Tr>
          ) : (
            <Tr key={report?.id}>
              <Td>{report?.name}</Td>
              <Td>{report?.point}</Td>
            </Tr>
          )
        )}
      </ReportInfo>
    </Flex>
  );
});

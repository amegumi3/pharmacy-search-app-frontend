import { memo, useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Td, Tr, useDisclosure } from "@chakra-ui/react";

import { PharmacyContext } from "providers/PharmacyProvider";
import { show } from "lib/api/pharmacy";
import { Report } from "types/Report";
import { PharmacyInfo } from "components/organisms/detailPharmacy/PharmacyInfo";
import { ReportInfo } from "components/organisms/detailPharmacy/ReportInfo";
import { useMessage } from "hooks/useMessage";
import { PrimaryModal } from "components/molecules/PrimaryModal";
import { QuestionButton } from "components/atoms/button/QuestionButton";
import { FeatureLists } from "components/organisms/detailPharmacy/FeatureLists";

export const DetailPharmacy = memo(() => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [selectReportCase, setSelectReportCase] = useState<string | null>(null);
  const [selectReportName, setSelectReportName] = useState<string | null>(null);
  const { id } = useParams<{ id: any }>();
  const { selectedPharmacy } = useContext(PharmacyContext);
  const [reportList, setReportList] = useState<Array<Report | null>>([]);
  const { showMessage } = useMessage();

  const getReports = useCallback(
    async (id: number) => {
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
    },
    [showMessage]
  );

  useEffect(() => {
    getReports(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickButton = (name: any, calcCase: any) => {
    setSelectReportCase(calcCase);
    setSelectReportName(name);
    onOpen();
  };
  const featureList: Array<string | undefined> = [];
  if (reportList) {
    for (var i: number = 0; i < reportList?.length; i++) {
      if (reportList[i]?.reportFeature === null) {
        continue;
      }
      featureList.push(reportList[i]?.reportFeature);
    }
  }
  const set = new Set(featureList);
  const features: Array<string | undefined> = Array.from(set);
  return (
    <>
      <Flex direction="column">
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
        <FeatureLists features={features} />
        <ReportInfo>
          {reportList.map((report) => (
            <Tr key={report?.id}>
              {report?.basic === true ? (
                <>
                  <Td>{report?.name}</Td>
                  <Td>{report?.point}</Td>
                  <Td textAlign="center">◯</Td>
                </>
              ) : (
                <>
                  <Td>{report?.name}</Td>
                  <Td>
                    {report?.point}
                    <QuestionButton show={() => onClickButton(report?.name, report?.calcCase)} />
                  </Td>
                </>
              )}
            </Tr>
          ))}
        </ReportInfo>
      </Flex>
      <PrimaryModal isOpen={isOpen} onClose={onClose} name={selectReportName} text={`${selectReportCase}が算定されるケース`} />
    </>
  );
});

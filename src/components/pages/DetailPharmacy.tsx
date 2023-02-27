import { memo, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Td, Tr, useDisclosure } from "@chakra-ui/react";

import { PharmacyContext } from "providers/PharmacyProvider";
import { useDetailPharmacy } from "hooks/useDetailPharmacy";
import { QuestionButton } from "components/atoms/button/QuestionButton";
import { PrimaryModal } from "components/molecules/PrimaryModal";
import { FeatureLists } from "components/organisms/detailPharmacy/FeatureLists";
import { PharmacyInfo } from "components/organisms/detailPharmacy/PharmacyInfo";
import { ReportInfo } from "components/organisms/detailPharmacy/ReportInfo";

export const DetailPharmacy = memo(() => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [selectReportCase, setSelectReportCase] = useState<string | null>(null);
  const [selectReportName, setSelectReportName] = useState<string | null>(null);
  const { id } = useParams<{ id: any }>();
  const { selectedPharmacy } = useContext(PharmacyContext);

  const { getReports, reportList, features } = useDetailPharmacy(id);

  useEffect(() => {
    getReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickButton = (name: string, calcCase: string) => {
    setSelectReportCase(calcCase);
    setSelectReportName(name);
    onOpen();
  };

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
          {reportList.map((report: any) => (
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
      <PrimaryModal isOpen={isOpen} onClose={onClose} name={`${selectReportName}が算定されるケース`} text={selectReportCase} />
    </>
  );
});

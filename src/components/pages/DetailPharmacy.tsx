import { memo, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Td, Tr, useDisclosure } from "@chakra-ui/react";

import { PharmacyContext } from "providers/PharmacyProvider";
import { useDetailPharmacy } from "hooks/useDetailPharmacy";
import { QuestionButton } from "components/atoms/button/QuestionButton";
import { PrimaryModal } from "components/molecules/PrimaryModal";
import { FeatureLists } from "components/organisms/detailPharmacy/FeatureLists";
import { PharmacyInfo } from "components/organisms/detailPharmacy/PharmacyInfo";
import { ReportInfo } from "components/organisms/detailPharmacy/ReportInfo";

export const DetailPharmacy = memo(() => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { selectedPharmacy } = useContext(PharmacyContext);
  const { id } = useParams<{ id: any }>();
  const { getReports, reportList, features, dateCreated } = useDetailPharmacy(id);

  const [selectReportCase, setSelectReportCase] = useState<string | null>(null);
  const [selectReportName, setSelectReportName] = useState<string | null>(null);


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
    <Box mb={100}>
      <Flex direction="column">
        {selectedPharmacy !== null ? (
          <PharmacyInfo
            name={selectedPharmacy?.name}
            tel={selectedPharmacy?.tel}
            postalCode={selectedPharmacy?.postalCode}
            address={selectedPharmacy?.address}
            shuttered={selectedPharmacy?.shuttered}
          />
        ) : (
          <></>
        )}
        <FeatureLists features={features} />
        <ReportInfo dateCreated={dateCreated
        }>
          {reportList.map((report: any) => (
            <Tr key={report?.id}>
              {report?.basic === true ? (
                <>
                  <Td fontSize={{ base: "xs", md: "lg" }}>{report?.name}</Td>
                  <Td fontSize={{ base: "xs", md: "lg" }}>{report?.point}</Td>
                  <Td textAlign="center" fontSize={{ base: "sm", md: "lg" }}>
                    ◯
                  </Td>
                </>
              ) : (
                <>
                  <Td fontSize={{ base: "xs", md: "lg" }}>{report?.name}</Td>
                  <Td fontSize={{ base: "xs", md: "lg" }}>
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
    </Box>
  );
});

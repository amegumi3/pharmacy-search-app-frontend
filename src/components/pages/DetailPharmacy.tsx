import { memo, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Box, Flex, Td, Tr, useDisclosure } from "@chakra-ui/react";

import { PharmacyContext } from "providers/PharmacyProvider";
import { useDetailPharmacy } from "hooks/useDetailPharmacy";
import { QuestionButton } from "components/atoms/button/QuestionButton";
import { PrimaryModal } from "components/molecules/PrimaryModal";
import { FeatureLists } from "components/organisms/detailPharmacy/FeatureLists";
import { PharmacyInfo } from "components/organisms/detailPharmacy/PharmacyInfo";
import { ReportInfo } from "components/organisms/detailPharmacy/ReportInfo";
import { useSelectPharmacy } from "hooks/useSelectPharmacy";
import { Report } from "types/report";
import { NearPharmacy } from "components/organisms/detailPharmacy/NearPharmacy";

export const DetailPharmacy = memo(() => {
  const history = useHistory();
  const { onSelectPharmacy } = useSelectPharmacy();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { selectedPharmacy } = useContext(PharmacyContext);
  const { id } = useParams<{ id: string }>();
  const { getReports, reportList, features, dateCreated, nearPharmacies } = useDetailPharmacy();
  const [selectReportCase, setSelectReportCase] = useState<string | null>(null);
  const [selectReportName, setSelectReportName] = useState<string | null>(null);

  const onClickNearPharmacy = (id: number | undefined) => {
    onSelectPharmacy({ id, pharmacies: nearPharmacies });
    if (id !== undefined) getReports(id);
    window.scrollTo(0, 0);
    history.push(`/pharmacies/${id}`);
  };

  useEffect(() => {
    getReports(Number(id));
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
        {selectedPharmacy?.id ? (
          <PharmacyInfo
            name={selectedPharmacy.name}
            tel={selectedPharmacy.tel}
            postalCode={selectedPharmacy.postalCode}
            address={selectedPharmacy.address}
            shuttered={selectedPharmacy.shuttered}
          />
        ) : null}
        <FeatureLists features={features} />
        <ReportInfo dateCreated={dateCreated}>
          {reportList.map((report: Report | null) =>
            report?.id ? (
              <Tr key={report.id}>
                {report.basic === true ? (
                  <>
                    <Td fontSize={{ base: "xs", md: "lg" }}>{report.name}</Td>
                    <Td fontSize={{ base: "xs", md: "lg" }}>{report.point}</Td>
                    <Td textAlign="center" fontSize={{ base: "sm", md: "lg" }}>
                      ◯
                    </Td>
                  </>
                ) : (
                  <>
                    <Td fontSize={{ base: "xs", md: "lg" }}>{report.name}</Td>
                    <Td fontSize={{ base: "xs", md: "lg" }}>
                      {report.point}
                      <QuestionButton show={() => onClickButton(report.name, report.calcCase)} />
                    </Td>
                  </>
                )}
              </Tr>
            ) : null
          )}
        </ReportInfo>
        <NearPharmacy nearPharmacies={nearPharmacies} onClick={onClickNearPharmacy} />
      </Flex>
      <PrimaryModal isOpen={isOpen} onClose={onClose} name={`${selectReportName}が算定されるケース`} text={selectReportCase} />
    </Box>
  );
});

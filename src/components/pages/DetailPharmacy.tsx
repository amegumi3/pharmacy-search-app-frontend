import { useSelectPharmacy } from "hooks/useSelectPharmacy";
import { PharmacyContext } from "providers/PharmacyProvider";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { show } from "lib/api/pharmacy";
import { Report } from "types/Report";
import { Box, Flex, Heading, Slider, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export const DetailPharmacy = () => {
  const { pharmacies } = useContext(PharmacyContext);
  const { id } = useParams<{ id: any }>();
  const { onSelectPharmacy, selectedPharmacy } = useSelectPharmacy();
  onSelectPharmacy({ id, pharmacies });
  console.log(typeof selectedPharmacy);
  console.log(selectedPharmacy);
  const [reportList, setReportList] = useState<Array<Report | null>>([]);

  const getReports = async (id: number) => {
    try {
      const res = await show(id);
      if (res.status === 200) {
        const result = res.data;
        setReportList(result);
        console.log(res);
        if (res.data.length === 0) {
          console.log("検索結果は０件です");
        }
      }
    } catch (err) {
      console.log(err);
      console.log("失敗しました");
    }
  };
  useEffect(() => {
    getReports(id);
    console.log(reportList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(reportList);
  return (
    <Box ml={23}>
      <Flex direction="column">
      <Heading as="h6" my={23}>
        {selectedPharmacy?.name}
      </Heading>
      <Slider>
      <p> {selectedPharmacy?.postalCode}</p>
      <p> {selectedPharmacy?.adress}</p>
      </Slider>

      </Flex>

      <TableContainer>
        <Table variant="simple">
          <TableCaption>2023年1月時点</TableCaption>
          <Thead>
            <Tr>
              <Th>届出基準名</Th>
              <Th>目安点数</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reportList.map((report) => (
              <Tr>
                <Td>{report?.name}</Td>
                <Td>{report?.point}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

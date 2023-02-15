import { useSelectPharmacy } from "hooks/useSelectPharmacy";
import { PharmacyContext } from "providers/PharmacyProvider";
import { memo, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { show } from "lib/api/pharmacy";
import { Report } from "types/Report";
import { Box, Link, Flex, Heading, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

export const DetailPharmacy = memo(() => {
  const history = useHistory();
  const { pharmacies } = useContext(PharmacyContext);
  const { id } = useParams<{ id: any }>();
  const { onSelectPharmacy, selectedPharmacy } = useSelectPharmacy();
  onSelectPharmacy({ id, pharmacies });
  console.log(selectedPharmacy);

  const [reportList, setReportList] = useState<Array<Report | null>>([]);
  const onClickBack = () => history.goBack();
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
  return (
    <Flex direction="column" bgColor="pink.50">
      <Box>
        <Flex justifyContent="space-between" ml={23}>
          <Flex direction="column">
            <Heading as="h6" my={23}>
              {selectedPharmacy?.name}
            </Heading>
            <Stack spacing={1} mb={3}>
              <Text> ☎︎ {selectedPharmacy?.tel}</Text>
              <Box>
                <Text> {selectedPharmacy?.postalCode}</Text>
                <Text> {selectedPharmacy?.adress}</Text>
              </Box>
            </Stack>
          </Flex>
          <Flex>
            <Link onClick={onClickBack}>前のページにもどる</Link>
          </Flex>
        </Flex>
      </Box>

      <Box bgColor="gray.100" mt={2} mx={2} p={2} w="20%">
        <Heading fontSize="xl" ml={3}>
          届出基準一覧
        </Heading>
      </Box>
      <TableContainer bgColor="orange.50">
        <Table variant="simple">
          <TableCaption>2023年1月時点</TableCaption>
          <Thead textAlign="center">
            <Tr bgColor="orange.100" fontSize="xl">
              <Th fontSize="md">届出基準名</Th>
              <Th fontSize="md">目安点数</Th>
              <Th textAlign="center" fontSize="md">
                算定予想
              </Th>
            </Tr>
          </Thead>
          <Tbody>
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
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
});

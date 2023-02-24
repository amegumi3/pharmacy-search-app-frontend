import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Card } from "components/atoms/form/Cad";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const ReportInfo: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Card padding={4} width={"100%"}>
        <Box mt={2} mx={2} p={2} w="20%">
          <Heading size="ml" ml={3}>
            ー 届出基準一覧 ー
          </Heading>
        </Box>
        <TableContainer bgColor="orange.50">
          <Table variant="simple" fontSize={{ base: "sm", md: "lg" }}>
            <TableCaption>2023年1月時点</TableCaption>
            <Thead textAlign="center">
              <Tr bgColor="orange.100">
                <Th fontSize={{ base: "md", md: "lg" }}>届出基準名</Th>
                <Th fontSize={{ base: "md", md: "lg" }}>点数</Th>
                <Th textAlign="center">算定予想</Th>
              </Tr>
            </Thead>
            <Tbody>{children}</Tbody>
          </Table>
        </TableContainer>
      </Card>

      <Box ml={22} mt={22}>
        <Text fontSize={{ base: "12px", md: "15px" }}>
          * 経過措置の都合上、地域支援体制加算が２つ存在する可能性がありますが、令和５年３月３１日までは、基本的に番号の若いものが算定されます。
        </Text>
        <Text fontSize={{ base: "12px", md: "15px" }}>
          * 新型コロナウイルスによる臨時的な取り扱い等の都合により、点数が表記のものより高くなる可能性があります。
        </Text>
        <Text fontSize={{ base: "12px", md: "15px" }}>
          * ３ヶ月以内に処方箋を持参かつ手帳を持参している場合は、４５ 点。その他の場合は、５９点算定がされます（例外あり）。
        </Text>
      </Box>
    </>
  );
});

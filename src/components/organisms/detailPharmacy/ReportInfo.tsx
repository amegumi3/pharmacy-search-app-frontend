import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const ReportInfo: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Box  mt={2} mx={2} p={2} w="20%">
        <Heading size="ml" ml={3}>
          ー 届出基準一覧 ー
        </Heading>
      </Box>
      <TableContainer bgColor="orange.50">
        <Table variant="simple" fontSize={{ base: "sm", md: "lg" }}>
          <TableCaption>2023年1月時点</TableCaption>
          <Thead textAlign="center">
            <Tr bgColor="orange.100">
              <Th>届出基準名</Th>
              <Th>目安点数</Th>
              <Th textAlign="center">算定予想</Th>
            </Tr>
          </Thead>
          <Tbody>{children}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
});

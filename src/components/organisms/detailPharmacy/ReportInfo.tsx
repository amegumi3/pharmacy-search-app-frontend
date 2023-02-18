import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const ReportInfo: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
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
          <Tbody>{children}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
});

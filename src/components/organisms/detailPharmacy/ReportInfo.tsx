import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { InfoButton } from "components/atoms/button/InfoButton";
import { PrimaryCard } from "components/atoms/form/PrimaryCard";
import { PrimaryModal } from "components/molecules/PrimaryModal";
import { reportTime } from "lib";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const ReportInfo: VFC<Props> = memo((props) => {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const { children } = props;
  const onClickButton = () => {
    onOpen();
  };
  
  return (
    <>
      <PrimaryCard padding={4} width={"100%"}>
        <Box mt={2} mx={2} p={2} mb={3}>
          <Heading fontSize="3xl" ml={3} textAlign="center">
            Report List
          </Heading>
        </Box>

        <TableContainer bgColor="orange.50" >
          <Table variant="simple" fontSize={{ base: "sm", md: "lg" }} >
            <TableCaption>{reportTime}</TableCaption>
            <Thead>
              <Tr bgColor="orange.100">
                <Th fontSize={{ base: "xs", md: "lg" }}>届出名</Th>
                <Th fontSize={{ base: "xs", md: "lg" }}>点数</Th>
                <Th fontSize={{ base: "xs", md: "lg" }} textAlign="center">
                  調剤基本料
                  <InfoButton show={onClickButton} />
                </Th>
              </Tr>
            </Thead>
            <Tbody>{children}</Tbody>
          </Table>
        </TableContainer>
      </PrimaryCard>

      <Box ml={22} mt={22}>
        <Text fontSize={{ base: "12px", md: "15px" }}>
          * 経過措置の都合上、地域支援体制加算が2つ存在する可能性がありますが、令和5年3月31日までは、基本的に番号の若いものが算定されます。
        </Text>
        <Text fontSize={{ base: "12px", md: "15px" }}>* 関連通知により、点数が表記のものより高くなる可能性があります。</Text>
        <Text fontSize={{ base: "12px", md: "15px" }}>
          * 服薬管理指導料として、3ヶ月以内に処方箋を持参かつ手帳を持参している場合は45 点。その他の場合は59点算定がされます（例外あり）。
        </Text>
      </Box>
      <PrimaryModal isOpen={isOpen} onClose={onClose} name={""} text={"この欄にマルがついている場合は、お薬代の中に左の点数が含まれます。ついていない項目は、処方箋の内容等によって算定されるものです。"} />
    </>
  );
});

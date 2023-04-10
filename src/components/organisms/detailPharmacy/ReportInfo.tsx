import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

import { InfoButton } from "components/atoms/button/InfoButton";
import { PrimaryCard } from "components/atoms/form/PrimaryCard";
import { PrimaryModal } from "components/molecules/PrimaryModal";
import { reportNotions } from "lib/reportNotions";

type Props = {
  children: ReactNode;
  dateCreated: string | null;
};

export const ReportInfo: VFC<Props> = memo((props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { children, dateCreated } = props;
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

        <TableContainer bgColor="orange.50">
          <Table variant="simple" fontSize={{ base: "sm", md: "lg" }}>
            <TableCaption>{dateCreated}時点</TableCaption>
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
        {reportNotions.map((notion, index) => (
          <Text fontSize={{ base: "12px", md: "15px" }} key={index}>
            {notion}
          </Text>
        ))}
        <Text fontSize={{ base: "12px", md: "15px" }}></Text>
      </Box>
      <PrimaryModal
        isOpen={isOpen}
        onClose={onClose}
        text={"この欄にマルがついている場合は、お薬代の中に左の点数が含まれます。ついていない項目は、処方箋の内容等によって算定されるものです。"}
      />
    </>
  );
});

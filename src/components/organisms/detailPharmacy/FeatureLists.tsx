import { Box, Flex, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { PrimaryCard } from "components/atoms/form/PrimaryCard";
import { PrimaryModal } from "../../molecules/PrimaryModal";
import { InfoButton } from "components/atoms/button/InfoButton";

type Props = {
  features: Array<string | undefined>;
};

export const FeatureLists: VFC<Props> = memo((props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const onClickButton = () => {
    onOpen();
  };
  const { features } = props;
  return (
    <Flex ml={2}>
      {features.length > 0 ? (
        <PrimaryCard padding={3} width={"100%"} bg={"yellow.50"}>
          <Stack spacing={1}>
            <Text fontWeight="bold" fontSize="lg">
              こんな特徴がある薬局です
              <InfoButton show={onClickButton} />
            </Text>
            <Box>
              {features.map((feature, index: number) => (
                <Box key={index}>
                  <Text>・{feature}</Text>
                </Box>
              ))}
            </Box>
          </Stack>
        </PrimaryCard>
      ) : (
        <Box></Box>
      )}
      <PrimaryModal isOpen={isOpen} onClose={onClose} name={"特徴について"} text={"施設基準の届出状況に基づき特徴をあげています"} />
    </Flex>
  );
});

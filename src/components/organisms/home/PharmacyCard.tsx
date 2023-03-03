import { memo, useContext, VFC } from "react";
import { useHistory } from "react-router-dom";
import { Box, Heading, HStack, Image, Spacer, Stack, Text, VStack } from "@chakra-ui/react";

import { useSelectPharmacy } from "hooks/useSelectPharmacy";
import { PharmacyContext } from "providers/PharmacyProvider";
import { pharmacyImage } from "lib/imageLink";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";

export const PharmacyCard: VFC = memo(() => {
  const history = useHistory();
  const { pharmacies } = useContext(PharmacyContext);
  const { onSelectPharmacy } = useSelectPharmacy();

  const onClickPharmacy = (id: number) => {
    onSelectPharmacy({ id, pharmacies });
    history.push(`/pharmacies/${id}`);
  };

  return (
    <VStack mt={7}>
      {pharmacies.map((pharmacy) => (
        <Box w="90%" bg="pink.50" p={5} borderRadius="md" boxShadow="lg" key={pharmacy.id} h="130px">
          <HStack spacing={9} p={0}>
            <Image src={pharmacyImage} boxSize="55" />
            <Box w="100%">
              <Stack spacing={3}>
                <Heading fontSize={{ base: "sm", md: "xl" }}>{pharmacy.name}</Heading>
                <Stack spacing={1}>
                  <Text fontSize={{ base: "xs", md: "md" }}>{pharmacy.postalCode}</Text>
                  <Text fontSize={{ base: "xs", md: "md" }}>{pharmacy.adress}</Text>
                </Stack>
              </Stack>
            </Box>
            <Spacer />
            <PrimaryButton submit={() => onClickPharmacy(pharmacy.id)} >詳細情報</PrimaryButton>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
});

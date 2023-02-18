import { memo, useContext, VFC } from "react";
import { useHistory } from "react-router-dom";
import { Box, Heading, HStack, Image, Spacer, Stack, Text, VStack } from "@chakra-ui/react";

import { useSelectPharmacy } from "hooks/useSelectPharmacy";
import { PharmacyContext } from "providers/PharmacyProvider";
import { pharmacyImage } from "lib";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";

export const Card: VFC = memo(() => {
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
        <Box w="90%" h="135" bgColor="pink.50" p={5} borderRadius="md" boxShadow="lg" key={pharmacy.id}>
          <HStack spacing={9}>
            {}
            <Image src={pharmacyImage} boxSize="55" />
            <Box>
              <Stack spacing={3}>
                <Heading as="h6" size="md">
                  {pharmacy.name}
                </Heading>
                <Stack spacing={0.2}>
                  <Text>{pharmacy.postalCode}</Text>
                  <Text>{pharmacy.adress}</Text>
                </Stack>
              </Stack>
            </Box>
            <Spacer />
            <PrimaryButton submit={() => onClickPharmacy(pharmacy.id)}>詳細情報</PrimaryButton>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
});

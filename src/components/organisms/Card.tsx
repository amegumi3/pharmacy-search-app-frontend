import { Box, Button, Heading, HStack, Image, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { useSelectPharmacy } from "hooks/useSelectPharmacy";
import { PharmacyContext } from "providers/PharmacyProvider";
import { memo, useContext, VFC } from "react";
import { useHistory } from "react-router-dom";

export const Card: VFC = memo(() => {
  const history = useHistory();
  const { pharmacies } = useContext(PharmacyContext);
  const { onSelectPharmacy, selectedPharmacy } = useSelectPharmacy();
  console.log(selectedPharmacy);
 
  const onClickPharmacy = (id: number) => {
    onSelectPharmacy({ id, pharmacies });
    history.push(`/${id}`);
  };

  return (
    <VStack mt={7}>
      {pharmacies.map((pharmacy) => (
        <Box w="90%" h="110px" bgColor="pink.50" p={5} borderRadius="md" boxShadow="lg" key={pharmacy.id}>
          <HStack spacing={9}>
            <Image src="https://3.bp.blogspot.com/-tkXn5gIOMSo/UV1JBZK5k8I/AAAAAAAAPRU/eq5Rs79XDGQ/s1600/yakkyoku.png" boxSize="55" />
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
            <Button onClick={() => onClickPharmacy(pharmacy.id)}>詳細情報</Button>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
});

import { memo, VFC } from "react";
import { Box, Flex, Heading, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { pharmacyImage } from "lib/imageLink";
import { Pharmacy } from "types/pharmacy";

type Props = {
  nearPharmacies: Array<Pharmacy | null>;
  onClick?: any;
};

export const NearPharmacy: VFC<Props> = memo((props) => {
  const { nearPharmacies, onClick } = props;

  return (
    <>
      {nearPharmacies.length > 0 ? (
        <Box bg="orange.50" mt={100}>
          <Flex justifyContent="center">
            <Box mb={3} justifyContent="center">
              <Heading size="md" m={30}>
                〜 この薬局の周辺にある薬局 〜
              </Heading>
              <Wrap spacing="30px" justify="center">
                {nearPharmacies.map((pharmacy) => (
                  <WrapItem key={pharmacy?.id} bg="orange.100" p={5} borderRadius="md" boxShadow="md" _hover={{ boxShadow: "none" }}>
                    <Box w="140px" _hover={{ opacity: 0.5, cursor: "pointer" }} onClick={() => onClick(pharmacy?.id)}>
                      <Stack spacing={5} pb={2}>
                        <Flex justify="center">
                          <Image src={pharmacyImage} w="100px" />
                        </Flex>
                        <Text textAlign="center" fontSize="xs">
                          {pharmacy?.name}
                        </Text>
                      </Stack>
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Flex>
        </Box>
      ) : null}
    </>
  );
});

import { Box, Button, Heading, HStack, Image, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Pharmacy } from "types/pharmacy";

type Props = {
  pharmacies: Array<Pharmacy>;
};

export const Card: VFC<Props> = memo((props) => {
  const { pharmacies } = props;
  return (
    <>
      <VStack mt={7}>
        {pharmacies.map((paharmacy) => (
          <Box w="90%" h="110px" bgColor="pink.50" p={5} borderRadius="md" boxShadow="lg" key={paharmacy.id}>
            <HStack spacing={9}>
              <Image src="https://3.bp.blogspot.com/-tkXn5gIOMSo/UV1JBZK5k8I/AAAAAAAAPRU/eq5Rs79XDGQ/s1600/yakkyoku.png" boxSize="55" />
              <Box>
                <Stack spacing={3}>
                  <Heading as="h6" size="md">
                    {paharmacy.name}
                    {console.log(paharmacy.name)}
                  </Heading>
                  <Stack spacing={0.2}>
                    <Text>{paharmacy.postalCode}</Text>
                    <Text>{paharmacy.adress}</Text>
                  </Stack>
                </Stack>
              </Box>
              <Spacer />
              <Button>詳細情報</Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </>
  );
});

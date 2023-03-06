import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { FaSeedling } from "react-icons/fa";

type Props = {
  show: () => void;
};

export const PrologueButton: VFC<Props> = (props) => {
  const { show } = props;
  
  return (
    <Button onClick={show} _focus={{ boxShadow: "none" }} _hover={{ opacity: 0.8, cursor: "pointer" }}>
      <Flex display="column" alignItems="center">
        <Center>
          <FaSeedling size={22} />
        </Center>
        <Text fontSize="10px">初めての方</Text>
      </Flex>
    </Button>
  );
};

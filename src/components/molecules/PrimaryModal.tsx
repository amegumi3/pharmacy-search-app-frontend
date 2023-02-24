import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  name: string | null;
  text: string | null;
  isOpen: boolean;
  onClose: () => void;
};

export const PrimaryModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, name, text } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay >
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{text}</Text>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});

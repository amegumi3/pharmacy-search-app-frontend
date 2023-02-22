import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  name: string | null;
  calcCase: string | null;
  isOpen: boolean;
  onClose: () => void;
};

export const ReportDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, name, calcCase } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay >
        <ModalContent>
          <ModalHeader>{name}が算定されるケース</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{calcCase}</Text>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});

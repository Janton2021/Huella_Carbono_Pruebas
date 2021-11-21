import { Modal as Mdl, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react"

export const Modal = ({ content, isOpen, onClose }) => {
  return(
    <>
      <Mdl isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent py={8} w='80vh'>
          <ModalCloseButton/>
          <ModalBody>
            {content}
          </ModalBody>
        </ModalContent>
      </Mdl>
    </>
  )
}
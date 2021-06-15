import { VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { ModalContent } from "@chakra-ui/modal";
import { ModalBody } from "@chakra-ui/modal";
import { ModalOverlay } from "@chakra-ui/modal";
import { Modal } from "@chakra-ui/modal";
import { PRIMARY_COLOR, SEC_COLOR } from "../../utils/c";
import Loading from "../widgets/Loading";


export default function LoadingView({isLoading, msg}) {

    return (
        <Modal isOpen={isLoading} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent bg={"#fff"} color="gray.400">
                <ModalBody>
                    <VStack minW="300px" minH="300px" justifyContent="center" alignItems="center">
                        <Loading 
                        color={PRIMARY_COLOR}
                        width="50px"
                        height="50px"
                        type={Loading.TYPES.tailSpin} />
                        <Text mt="5px" fontStyle="italic">{msg || ""}</Text>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
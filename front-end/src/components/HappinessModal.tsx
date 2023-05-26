import {
    Heading,
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";
import HappinessForm from "./HappinessForm";
import { useForm } from "react-hook-form";
import { Tag } from "./HappinessForm";
import addPost from "../utils/addPost";

type FormValues = {
    happinessIndex: number;
    activities: Tag[];
    date: Date;
    description: string;
    id_User: string;
};

const HappinessModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { reset } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        addPost(data);
        reset();
        onClose();
    };

    return (
        <Box>
            <Button onClick={onOpen} width="2rem" height="2rem" borderRadius="50%" bg="transparent" border="solid 2px black" cursor="pointer" >+</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg="rgba(0, 0, 0, .3)" />
                <ModalContent bg="white" m="200px auto" w="65%" maxW="700px" p="15px" borderRadius="5px" border="solid #DDD 1px">
                    <Heading textAlign="center">How Are You ?</Heading>
                    <ModalCloseButton position="absolute" top="1rem" right="1rem" width="2rem" height="2rem" borderRadius="50%" bg="transparent" border="solid 2px black" cursor="pointer" />
                    <ModalBody>
                        <HappinessForm onSubmit={onSubmit} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default HappinessModal;
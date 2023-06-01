import {
    Heading,
    Box,
    IconButton,
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
import { AddIcon } from "@chakra-ui/icons";

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
        console.log(data)
        addPost(data);
        reset();
        onClose();
        window.location.reload();
    };

    return (
        <Box>
            <IconButton aria-label='AddIcon' icon={<AddIcon />} onClick={onOpen} position={'fixed'} bottom={'50px'} right={'50px'} zIndex={'6'} isRound={true} size={'lg'} colorScheme={"blue"}></IconButton>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg="rgba(0, 0, 0, .3)" />
                <ModalContent bg="white" m="5rem auto" w="65%" maxW="700px" p="15px" borderRadius="5px" border="solid #DDD 1px">
                    <Heading textAlign="center" mt={'1rem'}>How Are You ?</Heading>
                    <ModalCloseButton />
                    <ModalBody>
                        <HappinessForm onSubmit={onSubmit} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default HappinessModal;
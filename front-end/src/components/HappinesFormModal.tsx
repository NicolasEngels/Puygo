import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";

import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'

interface Tag {
    id: number;
    name: string;
}
interface HappinessForm {
    happinessIndex: number;
    activities: Tag[];
    description: string;
}

const HappinessFormModal = () => {

    const { user } = useAuth0()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<HappinessForm>();

    const onSubmit = (data: HappinessForm) => {
        console.log('happinessIndex : ' + data.happinessIndex);
        console.log('activities : ' + data.activities);
        console.log('description : ' + data.description);
        console.log(user)
        reset();
    };

    const { isOpen, onOpen, onClose } = useDisclosure()

    const tags = [{ id: 1, name: "maison" }, { id: 2, name: "travail" }, { id: 3, name: "bar" }]

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="white" m="auto" w="65%" p="15px" borderRadius="5px" border="solid #DDD 1px">
                    <ModalHeader>How Are You ?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="happinessIndex">Happiness Index:</label>
                            <input type="range" {...register("happinessIndex", { required: true })} />
                            {errors.happinessIndex && <span>This field is required</span>}

                            <label htmlFor="activities">Activities:</label>
                            {tags.map((tag) => (
                                <div key={tag.id}>
                                    <input type="checkbox" {...register(`activities.${tag.id}`)} />
                                    <label>{tag.name}</label>
                                </div>
                            ))}

                            <input
                                    type="text"
                                    id="proposition"
                                    name="proposition"
                                    placeholder="Ajouter une proposition"
                            />

                            <label htmlFor="description">Description:</label>
                            <input type="text" {...register("description", { required: false })} />
                            <Button variant='ghost' type="submit" onClick={onClose}>Submit</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>
    );
};

export default withAuthenticationRequired(HappinessFormModal, {
    onRedirecting: () => <Loading />,
});
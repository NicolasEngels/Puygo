import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";
import { Input, Text, Stack, Flex } from "@chakra-ui/react";
import addActivities from '../utils/addActivities';

export interface Tag {
    id_User: string;
    name: string;
    __v: Number;
    _id: string;
}

type FormValues = {
    happinessIndex: number;
    activities: Tag[];
    date: Date;
    description: string;
    id_User: string;
};

type FormComponentProps = {
    onSubmit: (data: any) => void;
};

const HappinessForm = ({ onSubmit }: FormComponentProps) => {

    const { user } = useAuth0()

    const { 
        register, 
        handleSubmit
    } = useForm<FormValues>();

    const [initialItems, setInitialItems] = useState<Tag[]>([]);

    const fetchActivities = async () => {
        try {
            const activities = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getTags/${user?.sub}`)
            const activitiesData = await activities.json();
            setInitialItems(activitiesData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchActivities(); 
    });

    const addTag = async() => {
        const inputElement = document.getElementById('newActivity') as HTMLInputElement
        const inputValue = inputElement.value
        const id_User = user?.sub || ''

        addActivities(inputValue, id_User)

        inputElement.value = ''
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <Input type="hidden" value={user?.sub} {...register("id_User")} />
                <Input type="hidden" value={formattedDate} {...register("date")} />
            </Stack>

            <Stack>
                <Text>Happiness Index : </Text>
                <Input type="range" {...register("happinessIndex")} />
            </Stack>

            <Stack>
                <Text>Activities : </Text>
                <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
                    {initialItems.map((tag: Tag) => (
                        <Flex key={tag._id} w={'33%'}>
                            <label>
                                <input type="checkbox" value={tag.name} {...register("activities")} />
                                {tag.name}
                            </label>
                        </Flex>
                    ))}
                </Flex>
                <div>
                    <input type="text" id='newActivity'  />
                    <button type="button" onClick={addTag}>add Tag</button>
                </div>
            </Stack>

            <Stack>
                <Text>Description : </Text>
                <Input {...register("description")} />
            </Stack>

            <Input type="submit"/>
        </form>
    );
}

export default HappinessForm;
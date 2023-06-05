import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";
import { 
    Input, 
    Text, 
    Stack, 
    Flex, 
    Checkbox,
    Slider,
    SliderFilledTrack, 
    SliderThumb, 
    SliderTrack,
    SliderMark,
    Button,
    InputGroup,
    InputRightElement,
    Textarea
} from "@chakra-ui/react";
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

const HappinessForm: React.FC<FormComponentProps> = ({ onSubmit }: FormComponentProps) => {

    const { user, getAccessTokenSilently } = useAuth0()

    const { 
        register, 
        handleSubmit,
        setValue
    } = useForm<FormValues>();

    const [initialItems, setInitialItems] = useState<Tag[]>([]);

    const fetchActivities = async () => {
        try {
            const token = await getAccessTokenSilently()

            const activities = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getTags/${user?.sub}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            const activitiesData = await activities.json();
            setInitialItems(activitiesData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchActivities()
    });

    const addTag = async() => {
        const inputElement = document.getElementById('newActivity') as HTMLInputElement
        const inputValue = inputElement.value
        const id_User = user?.sub || ''
        const token = await getAccessTokenSilently()

        addActivities(inputValue, id_User, token)

        inputElement.value = ''
        fetchActivities()
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    const [sliderValue, setSliderValue] = useState(50)

    const handleSliderChange = (value: number) => {
        setSliderValue(value)
    };

    useEffect(() => {
        setValue("happinessIndex", sliderValue);
    });

    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm'
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <Input type="hidden" value={user?.sub} {...register("id_User")} />
                <Input type="hidden" value={formattedDate} {...register("date")} />
            </Stack>

            <Stack m={'2.5rem 1rem'}>
                <Text fontSize='xl' as={'b'} mb={'.5rem'}>Happiness Index : </Text>

                <Slider aria-label='slider-ex-6' onChange={handleSliderChange}>
                    <SliderMark value={25} {...labelStyles}>
                        25%
                    </SliderMark>
                    <SliderMark value={50} {...labelStyles}>
                        50%
                    </SliderMark>
                    <SliderMark value={75} {...labelStyles}>
                        75%
                    </SliderMark>
                    <SliderMark
                        value={sliderValue}
                        textAlign='center'
                        bg='#3182CE'
                        color='white'
                        mt='-10'
                        ml='-5'
                        w='12'
                        borderRadius={'3px'}
                    >
                        {sliderValue}%
                    </SliderMark>
                    <SliderTrack bg={'blue.50'}>
                        <SliderFilledTrack bg='#3182CE' />
                    </SliderTrack>
                    <SliderThumb border={'solid .1px #3182CE'}/>
                </Slider>
            </Stack>

            <Stack m={'2.5rem 1rem'}>
                <Text fontSize='xl' as={'b'} mb={'.5rem'}>Activities : </Text>
                <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
                    {initialItems && initialItems.map((tag: Tag) => (
                        <Stack key={tag._id} w={'33%'}>
                            <Checkbox value={tag.name} {...register("activities")} size={'md'} >{tag.name}</Checkbox>
                                {/* {tag.name} */}
                        </Stack>
                    ))}
                </Flex>
                <Flex>
                    <InputGroup size='md' mt={'1rem'}>
                        <Input id='newActivity' placeholder='Enter a new Tag' />
                        <InputRightElement w={'15%'}>
                            <Button onClick={addTag} h='1.75rem' size='sm' mr={'.45rem'} colorScheme={'blue'} p={'1rem'}>add Tag</Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>
            </Stack>

            <Stack m={'2.5rem 1rem'}>
                <Text fontSize='xl' as={'b'} mb={'.5rem'}>Description : </Text>
                <Textarea 
                    {...register("description")} 
                    resize={'none'} 
                    placeholder='Describe your day'
                />
            </Stack>

            <Input type="submit" bgColor={'#3182CE'} color={'white'} fontWeight={'bold'} m={'1rem 1rem'} />
        </form>
    );
}

export default HappinessForm;
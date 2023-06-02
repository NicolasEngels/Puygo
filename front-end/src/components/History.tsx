import { useEffect, useState } from 'react';
import { Stack, Card, Text, Tag , Flex, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Tag as Activities } from "./HappinessForm";

interface FormValues {
    happinessIndex: number;
    activities: Activities[];
    date: Date;
    description: string;
    id_User: string;
};

function History() {

    const { user, getAccessTokenSilently } = useAuth0()

    const [Posts, setPosts] = useState<FormValues[]>([]);

    useEffect(() => {
        const call = async () => {
            try {
                const token = await getAccessTokenSilently()

                const posts = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getPosts/${user?.sub}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                const postsData = await posts.json();
                setPosts(postsData.reverse())
            } catch (error) {
                console.log(error)
            }
        }

        call();
    }, [user?.sub,getAccessTokenSilently]);

    const optionsDay = { day: 'numeric', month: 'numeric' } as const;
    const optionsTime = { hour: 'numeric', minute: 'numeric' } as const;

    const deletePost = async (post: any) => {
        try {
            const token = await getAccessTokenSilently()

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/deletePost/${post?._id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('La suppression du post a échoué.');
            }
            // window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Stack>
            <Flex w={"100%"} flexDir={'column'}>
                {Posts.map((post, indexPost)=>(
                    <Flex key={indexPost} w={"95%"} maxW={'1080px'} m={'.5rem auto'}>
                        <Flex flexDir={'column'} w={'10%'} justifyContent={'center'} alignItems={'center'}>
                            <Text fontSize='sm' letterSpacing={'wider'}>{new Date(post.date).toLocaleDateString(undefined, optionsDay)}</Text> 
                            <Text fontSize='xs'>{new Date(post.date).toLocaleTimeString(undefined, optionsTime)}</Text>
                        </Flex>

                        <Card id={`${indexPost}`} key={indexPost} variant={'filled'} w={'90%'} border={'solid 2px #DAE7F3'}>
                            <Flex justifyContent={'start'}>
                                <Flex borderRight={'solid 2px #DAE7F3'} p={'1%'} justifyContent={'center'} alignItems={'center'} w={'22%'} maxW={'180px'} minW={'130px'}>
                                    <Text fontSize='300%' textAlign={'center'} color={'gray.700'}>{post.happinessIndex}%</Text>
                                </Flex>

                                <Stack w={'60%'}>
                                    <Stack h={'auto'}>
                                        <Text fontSize='xs' m={'5px 0 0 5px'}>Activities : </Text>
                                        <Flex flexWrap={'wrap'} p={'0 10px'}>
                                            {post.activities.map((tag, indexActivity) => (
                                                <Tag key={indexActivity} m={'5px'} colorScheme='blue'>{tag.name}</Tag >
                                            ))}
                                        </Flex>
                                    </Stack>

                                    <Stack h={'auto'}>
                                        <Text fontSize='xs' m={'5px 0 0 5px'}>Description : </Text>
                                        <Text fontSize='sm' p={'0 0 10px 10px'}>{post.description}</Text>
                                    </Stack>
                                </Stack>
                            </Flex>

                            <IconButton onClick={() => deletePost(post)} aria-label='DeleteIcon' icon={<DeleteIcon />} position={'absolute'} right={'0'}></IconButton>
                        </Card>
                    </Flex>
                ))}
            </Flex>
        </Stack>
    );
}

export default History;
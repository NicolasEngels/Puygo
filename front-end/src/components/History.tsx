import { useEffect, useState } from 'react';
import { Stack, Heading, Box, Text } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { Tag } from "./HappinessForm";

interface FormValues {
    happinessIndex: number;
    activities: Tag[];
    date: Date;
    description: string;
    id_User: string;
};

function History() {

    const { user } = useAuth0()

    const [Posts, setPosts] = useState<FormValues[]>([]);

    useEffect(() => {
        const call = async () => {
            try {
                const posts = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getPosts/${user?.sub}`)
                const postsData = await posts.json();
                setPosts(postsData)
            } catch (error) {
                console.log(error)
            }
        }

        call();
    }, [user?.sub]);

    return (
        <Stack>
            <Heading>Ancient Posts</Heading>
            <Stack>
                {Posts.map((post, indexPost)=>(
                    <Box key={indexPost} border="solid 2px black" borderRadius='5px' w='90%' >
                        <Heading>happinessIndex</Heading>
                        <Text>{post.happinessIndex}</Text>

                        <Heading>activities</Heading>
                        {post.activities.map((tag, indexActivity) => (
                            <Text key={indexActivity} borderRadius='5px' bg='#CCC'>{tag.name}</Text>
                        ))}

                        <Heading>description</Heading>
                        <Text>{post.description}</Text>

                        <Heading>date</Heading>
                        <Text>{new Date(post.date).toLocaleDateString()} - {new Date(post.date).toLocaleTimeString()}</Text>
                    </Box>
                ))}
            </Stack>
        </Stack>
    );
}

export default History;
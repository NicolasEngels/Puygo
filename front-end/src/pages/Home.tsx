import { Box, Text } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import CallApiPublic from '../components/CallApiPublic';
import CallApiPrivate from '../components/CallApiPrivate';

function Home() {

    const {
        isAuthenticated,
        user
    } = useAuth0();

    return (
        <Box className="App">
            <Text>Hello World  - frontend</Text>

            <CallApiPublic />

            <CallApiPrivate endPoint="private"/>

            <Box>
                {isAuthenticated ? (
                    <>
                        <Text>Hello {user?.name} you're Loged in !</Text>
                        <Text>id : {user?.sub}</Text>
                    </>
                ) : (
                        <Text>Hello Guest you're not Loged in !</Text>
                )}
            </Box>
        </Box>
    );
}

export default Home;
import { Box, Text, Heading } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import CallApiPrivate from '../components/CallApiPrivate';

function Home() {

    const {
        isAuthenticated,
        user
    } = useAuth0();

    return (
        <Box className="App" ml="250px">
            <Heading>Homepage</Heading>

            <CallApiPrivate endPoint="private"/>

            <Box>
                {isAuthenticated ? (
                        <Text>Hello {user?.name} you're Loged in !</Text>
                ) : (
                        <Text>Hello Guest you're not Loged in !</Text>
                )}
            </Box>
        </Box>
    );
}

export default Home;
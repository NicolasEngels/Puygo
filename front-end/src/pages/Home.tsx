import { Box, Text } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
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

            <CallApiPrivate />

            <Box>
                {isAuthenticated ? (
                    <>
                        <Text>Hello {user?.name} you're Loged in !</Text>
                        <Text>id : {user?.sub}</Text>
                        <LogoutButton></LogoutButton>
                    </>
                ) : (
                    <LoginButton />
                )}
            </Box>
        </Box>
    );
}

export default Home;
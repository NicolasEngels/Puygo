import { Box, Text, Heading } from "@chakra-ui/react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

function Profile() {

    const { user } = useAuth0();

    return (
        <Box className="App">
            <Heading>Profile</Heading>
            <Text>Hello {user?.name}. Welcome in your profile page</Text>
            <Text>id : {user?.sub}</Text>
        </Box>
    );
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Loading />,
});
import { Stack, Text, Heading } from "@chakra-ui/react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import HappinessFormModal from "../components/HappinessModal";
import Loading from "../components/Loading";

function Profile() {

    const { user } = useAuth0();

    return (
        <Stack className="App">
            <Heading>Profile</Heading>
            <Text>Hello {user?.name}. Welcome in your profile page</Text>
            <Text>id : {user?.sub}</Text>

            <HappinessFormModal />
        </Stack>
    );
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Loading />,
});
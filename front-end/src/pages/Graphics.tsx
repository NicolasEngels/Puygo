import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Stack } from "@chakra-ui/react";
import HappinessFormModal from "../components/HappinessModal";


const Graphics = () => {
    const { user } = useAuth0()

    return (
        <Stack id="graphics" ml="250px"  w="100%">
            <h1>Graphics of {user?.name}</h1>

            <HappinessFormModal />
        </Stack>
    );
};

export default withAuthenticationRequired(Graphics, {
    onRedirecting: () => <Loading />,
});
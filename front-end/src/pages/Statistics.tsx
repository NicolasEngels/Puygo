import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Stack  } from "@chakra-ui/react";
import HappinessFormModal from "../components/HappinessModal";

export const Statistics = () => {
    const { user } = useAuth0()

    return (
        <Stack id="Statistics" ml="250px" w="100%">
            <h1>Statistics of {user?.name}</h1>

            <HappinessFormModal />
        </Stack>
    );
};

export default withAuthenticationRequired(Statistics, {
    onRedirecting: () => <Loading />,
});
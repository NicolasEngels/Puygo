import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Stack } from "@chakra-ui/react";
import HappinessFormModal from "../components/HappinessModal";
import History from "../components/History";

export const Historic = () => {
    const { user } = useAuth0()

    return (
        <Stack id="Historic">
            <h1>Historic of {user?.name}</h1>

            <HappinessFormModal />

            <History />
        </Stack>
    );
};

export default withAuthenticationRequired(Historic, {
    onRedirecting: () => <Loading />,
});
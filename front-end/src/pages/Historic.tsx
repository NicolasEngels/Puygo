import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Stack } from "@chakra-ui/react";
import HappinessFormModal from "../components/HappinessModal";
import History from "../components/History";

const Historic = () => {

    return (
        <Stack id="Historic" ml="250px" mt="60px" w="100%">

            <HappinessFormModal/>

            <History />
        </Stack>
    );
};

export default withAuthenticationRequired(Historic, {
    onRedirecting: () => <Loading />,
});
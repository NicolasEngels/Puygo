import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import HappinessFormModal from "../components/HappinesFormModal";

export const Statistics = () => {
    const { user } = useAuth0()

    return (
        <div id="Statistics">
            <h1>Statistics of {user?.name}</h1>
            <HappinessFormModal />
        </div>
    );
};

export default withAuthenticationRequired(Statistics, {
    onRedirecting: () => <Loading />,
});
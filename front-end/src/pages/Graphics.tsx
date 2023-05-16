import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import HappinessFormModal from "../components/HappinesFormModal";


export const Graphics = () => {
    const { user } = useAuth0()

    return (
        <div id="graphics">
            <h1>Graphics of {user?.name}</h1>

            <HappinessFormModal/>
        </div>
    );
};

export default withAuthenticationRequired(Graphics, {
    onRedirecting: () => <Loading />,
});
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const Historic = () => {
    const { user } = useAuth0()

    return (
        <div id="Historic">
            <h1>Historic of {user?.name}</h1>
        </div>
    );
};

export default withAuthenticationRequired(Historic, {
    onRedirecting: () => <Loading />,
});
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const Statistics = () => {
    const { user } = useAuth0()

    return (
        <div id="Statistics">
            <h1>Statistics of {user?.name}</h1>
        </div>
    );
};

export default withAuthenticationRequired(Statistics, {
    onRedirecting: () => <Loading />,
});
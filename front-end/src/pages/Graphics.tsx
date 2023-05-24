import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


export const Graphics = () => {
    const { user } = useAuth0()

    return (
        <div id="graphics">
            <h1>Graphics of {user?.name}</h1>
        </div>
    );
};

export default withAuthenticationRequired(Graphics, {
    onRedirecting: () => <Loading />,
});
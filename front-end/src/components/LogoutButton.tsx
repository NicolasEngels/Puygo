import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {

    const {
        logout
    } = useAuth0();

    const logoutWithRedirect = () =>
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            }
        });

    return (
        <Button variant='outline' size='xl' onClick={() => logoutWithRedirect()}>
            Logout
        </Button>
    );
}

export default LogoutButton;
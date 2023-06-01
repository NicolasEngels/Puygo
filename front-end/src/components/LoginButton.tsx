import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {

    const {
        loginWithRedirect
    } = useAuth0();

    return (
        <Button onClick={() => loginWithRedirect({})} w={'65%'} m={'.2rem auto'}>
            Login
        </Button>
    );
}

export default LoginButton;
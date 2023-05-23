import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {

    const {
        loginWithRedirect
    } = useAuth0();

    return (
        <Button variant='solid' onClick={() => loginWithRedirect({})}>
            Login
        </Button>
    );
}

export default LoginButton;
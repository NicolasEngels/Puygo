import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink as RouterNavLink } from "react-router-dom";

const Sidebar = () => {
    const {
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();

    const logoutWithRedirect = () =>
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            }
        });

    return (
        <Box bg="#EEE" h="100vh" w="250px" p="4">
            <VStack align="flex-start" spacing="4">
                <Text fontWeight="bold">Puygo</Text>
                {isAuthenticated ? (
                    <>
                        <Button
                            as={RouterNavLink}
                            to="/graphics"
                            variant='solid'
                        >
                            Graphics
                        </Button>
                        <Button
                            as={RouterNavLink}
                            to="/statistics"
                            variant='solid'
                        >
                            Statistics
                        </Button>
                        <Button
                            as={RouterNavLink}
                            to="/historic"
                            variant='solid'
                        >
                            Historic
                        </Button>
                        <Button
                            as={RouterNavLink}
                            to="/external-api"
                            variant='solid'
                        >
                            external-api
                        </Button>
                        <Button
                            as={RouterNavLink}
                            to="/profile"
                            variant='solid'
                        >
                            Profile
                        </Button>
                        <Button variant='solid' onClick={logoutWithRedirect}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            as={RouterNavLink}
                            to="/"
                            variant='solid'
                        >
                            Home
                        </Button>
                            <Button variant='solid' onClick={() => loginWithRedirect({})}>
                            Login
                        </Button>
                    </>
                )}
            </VStack>
        </Box>
    );
};

export default Sidebar;


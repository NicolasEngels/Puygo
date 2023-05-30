import { Box, VStack, Button, Heading } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Box bg="#EEE" position="fixed" h="100vh" w="250px" p="4" boxSizing='border-box'>
            <VStack align="flex-start" spacing="4">
                <Heading fontWeight="bold">Puygo</Heading>
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
                            to="/"
                            variant='solid'
                        >
                            Home
                        </Button>

                        <Button
                            as={RouterNavLink}
                            to="/profile"
                            variant='solid'
                        >
                            Profile
                        </Button>

                        <LogoutButton />
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
                        
                        <LoginButton />
                    </>
                )}
            </VStack>
        </Box>
    );
};

export default Navbar;
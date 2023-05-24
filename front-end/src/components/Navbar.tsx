import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

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
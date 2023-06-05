import { Box, Button, Heading, Stack, Flex } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Box bg={'gray.100'} position="fixed" h="100vh" w="250px" boxSizing='border-box' borderRight={'solid 2px #DAE7F3'}>
            <Stack align="flex-start" spacing="4">
                <Heading fontWeight="bold" w={"100%"} textAlign={'center'} bgColor={'white'} p={'1rem 0'} color={"blue.400"} borderBottom={'solid 2px #DAE7F3'}>Puygo</Heading>
                {isAuthenticated ? (
                    <Flex w={'100%'} flexDir={'column'}>
                        <Button
                            as={RouterNavLink}
                            to="/graphics"
                            variant='solid'
                            w={'65%'} 
                            m={'.2rem auto'}
                        >
                            Graphics
                        </Button>

                        <Button
                            as={RouterNavLink}
                            to="/statistics"
                            variant='solid'
                            w={'65%'}
                            m={'.2rem auto'}
                        >
                            Statistics
                        </Button>

                        <Button
                            as={RouterNavLink}
                            to="/historic"
                            variant='solid'
                            w={'65%'}
                            m={'.2rem auto'}
                        >
                            Historic
                        </Button>

                        <Button
                            as={RouterNavLink}
                            to="/"
                            variant='solid'
                            w={'65%'}
                            m={'.2rem auto'}
                        >
                            Home
                        </Button>

                        <Button
                            as={RouterNavLink}
                            to="/profile"
                            variant='solid'
                            w={'65%'}
                            m={'.2rem auto'}
                        >
                            Profile
                        </Button>

                        <LogoutButton />
                    </Flex>
                ) : (
                    <Flex w={'100%'} flexDir={'column'}>
                        <Button
                            as={RouterNavLink}
                            to="/"
                                variant='solid'
                                w={'65%'}
                                m={'.2rem auto'}
                        >
                            Home
                        </Button>
                        
                        <LoginButton />
                    </Flex>
                )}
            </Stack>
        </Box>
    );
};

export default Navbar;
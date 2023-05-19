import { useState } from 'react';
import { Box, Text, Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
    const [backendMessagePublic, setBackendMessagePublic] = useState<any>(null);

    const [state, setState] = useState({
        showResult: false,
        apiMessage: null,
        error: null,
    });

    const {
        isAuthenticated,
        loginWithRedirect,
        logout,
        getAccessTokenSilently
    } = useAuth0();

    const callApiPublic = () => {
        console.log(process.env.REACT_APP_BACKEND_URL)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/public` || '')
            .then(response => response.json())
            .then(data => {
                setBackendMessagePublic(data)
            })
            .catch(error => {
                setBackendMessagePublic(error);
            });
    }

    const callApiPrivate = async () => {
        try {
            const token = await getAccessTokenSilently()

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/private` || '', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            const responseData = await response.json();

            setState({
                ...state,
                showResult: true,
                apiMessage: responseData,
            });
        } catch (error: any) {
            setState({
                ...state,
                error: error.error,
            });
        }
    }

    const logoutWithRedirect = () =>
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            }
        });

    return (
        <Box className="App">
            <Text>Hello World  - frontend</Text>

            <Button onClick={callApiPublic}>call back-end - public</Button>
            {backendMessagePublic && (
                <Text>
                    <span>{JSON.stringify(backendMessagePublic, null, 2)}</span>
                </Text>
            )}

            <Box>
                <Button onClick={callApiPrivate}>call back-end - private</Button>
                {state.showResult && state.apiMessage && (
                    <Text>
                        <span>{JSON.stringify(state.apiMessage, null, 2)}</span>
                    </Text>
                )}
            </Box>

            <Box>
                {isAuthenticated ? (
                    <>
                        <Text>Loged in !</Text>

                        <Button variant='solid' onClick={logoutWithRedirect}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <Button variant='solid' onClick={() => loginWithRedirect({})}>
                            Login
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    );
}

export default Home;
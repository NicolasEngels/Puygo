import { Button, Text, Box } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';

function CallApiPrivate() {

    const [state, setState] = useState({
        showResult: false,
        apiMessage: null,
        error: null,
    });

    const {
        getAccessTokenSilently
    } = useAuth0();

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
                apiMessage: responseData.msg,
            });
        } catch (error: any) {
            setState({
                ...state,
                showResult: true,
                apiMessage: error.error,
            });
        }
    }

    return (
        <Box>
            <Button onClick={callApiPrivate}>call back-end - private</Button>
            {state.showResult && state.apiMessage && (
                <Text>
                    <span>{JSON.stringify(state.apiMessage, null, 2)}</span>
                </Text>
            )}
        </Box>
    );
}

export default CallApiPrivate;
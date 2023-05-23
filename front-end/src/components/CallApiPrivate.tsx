import { Button, Text, Box } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import config from "../config";

interface Props {
    endPoint: string;
}

const CallApiPrivate: React.FC<Props> = ({ endPoint }) => {

    const [state, setState] = useState({
        status : null as null | number,
        apiMessage: null,
        error: null as null | string,
    });

    const {
        getAccessTokenSilently
    } = useAuth0();

    const callApiPrivate = async () => {
        console.log(config.REACT_APP_APPORIGIN)
        try {
            const token = await getAccessTokenSilently()

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${endPoint}` || '', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            const responseData = await response.json();

            setState({
                ...state,
                status : 200,
                apiMessage: responseData,
            });
        } catch (error: any) {
            setState({
                ...state,
                status : 401,
                error: ' - Unauthorized',
            });
        }
    }

    return (
        <Box>
            <Button onClick={callApiPrivate}>call back-end - private</Button>
            {state.status !== null && (
                <Text>{JSON.stringify(state)}</Text>
            )}
        </Box>
    );
}

export default CallApiPrivate;
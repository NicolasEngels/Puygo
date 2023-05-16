import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import configJson from "../auth_config.json";
import { Button, Box, Text } from "@chakra-ui/react"; 
import { getConfig } from "../config";

// const useApiCall = () => {
//     const [state, setState] = useState({
//         showResult: false,
//         apiMessage: null,
//         error: null,
//     });

//     const { getAccessTokenSilently } = useAuth0();

//     const callApi = async () => {
//         try {
//             const token = await getAccessTokenSilently();

//             const response = await fetch(`${process.env.apiOrigin}/api/external`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             const responseData = await response.json();

//             setState({
//                 ...state,
//                 showResult: true,
//                 apiMessage: responseData,
//             });
//         } catch (error: any) {
//             setState({
//                 ...state,
//                 error: error.error,
//             });
//         }
//     };

//     return [state, callApi];
// };

// export default useApiCall;

// const useApiCall = async (setState: Function) => {

//     const [state] = useState({
//         showResult: false,
//         apiMessage: null,
//         error: null,
//     });

//     const { getAccessTokenSilently } = useAuth0();
//     try {
//         const token = await getAccessTokenSilently();

//         const response = await fetch(`${configJson.apiOrigin}/api/external`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         const responseData = await response.json();
//         console.log(response)

//         setState({
//             ...state,
//             showResult: true,
//             apiMessage: responseData,
//         });
//     } catch (error: any) {
//         setState({
//             ...state,
//             error: error.error,
//         });
//     }
// };

// export default useApiCall;

interface Props {
    endPoint: string;
}

const ApiCaller: React.FC<Props> = ({ endPoint }) => {

    const { audience } = getConfig();

    const [state, setState] = useState({
        showResult: false,
        apiMessage: null,
        error: null,
    });

    const { getAccessTokenSilently } = useAuth0();

    const callApi = async () => {
        try {
            const token = await getAccessTokenSilently();

            const response = await fetch(`${configJson.apiOrigin}/${endPoint}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const responseData = await response.json();
            console.log(response)

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
    };

    return (
        <>
            <Button
                color="primary"
                className="mt-5"
                onClick={callApi}
                disabled={!audience}
            >
                Ping API
            </Button>

            <Box className="result-block-container">
                {state.showResult && (
                    <Box className="result-block" data-testid="api-result">
                        <h6 className="muted">Result</h6>
                        <Text>
                            <span>{JSON.stringify(state.apiMessage, null, 2)}</span>
                        </Text>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default ApiCaller;
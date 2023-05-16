// import { useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
// import { getConfig } from "../config";
import Loading from "../components/Loading";
// import configJson from "../auth_config.json";
import { Text, Box } from "@chakra-ui/react";
import ApiCaller from "../utils/useApiCall";

export const ExternalApiComponent = () => {
    // const { audience } = getConfig();

    // const [state, setState] = useState({
    //     showResult: false,
    //     apiMessage: "",
    //     error: null,
    // });

    // const {
    //     getAccessTokenSilently
    // } = useAuth0();

    // const callApi = async () => {
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

    // const HandleApiCall = async () => {
    //     await useApiCall(setState);
    // };


    return (
        <>
            <Box className="mb-5">

                <h1>External API</h1>
                <Text className="lead">
                    Ping an external API by clicking the button below.
                </Text>

                <Text>
                    This will call a local API on port 3001 that would have been started
                    if you run <code>npm run dev</code>. An access token is sent as part
                    of the request's `Authorization` header and the API will validate it
                    using the API's audience value.
                </Text>

                {/* <Button
                    color="primary"
                    className="mt-5"
                    onClick={callApi}
                    disabled={!audience}
                >
                    Ping API
                </Button> */}

                
                {/* <button onClick={() => setState({ ...state, showResult: false })}>
                    Réinitialiser le résultat
                </button>
                {apiData.showResult && apiData.apiMessage !== null && (
                    <div>Résultat : {apiData.apiMessage}</div>
                )}
                {apiData.error && <div>Erreur : {apiData.error}</div>} */}

                <ApiCaller endPoint="api/external"/>
            </Box>

            {/* <Box className="result-block-container">
                {state.showResult && (
                    <Box className="result-block" data-testid="api-result">
                        <h6 className="muted">Result</h6>
                        <Text>
                            <span>{JSON.stringify(state.apiMessage, null, 2)}</span>
                        </Text>
                    </Box>
                )}
            </Box> */}
        </>
    );
};

export default withAuthenticationRequired(ExternalApiComponent, {
    onRedirecting: () => <Loading />,
});

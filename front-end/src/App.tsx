import { useState } from 'react';
import { Box, Text, Button } from "@chakra-ui/react";
import './App.css';

function App() {
    const [backendMessage, setBackendMessage] = useState<any>(null);

    const callApi = () => {

        fetch(process.env.REACT_APP_BACKEND_URL || '')
            .then(response => response.json())
            .then(data => {
                setBackendMessage(data)
            })
            .catch(error => {
                setBackendMessage(error);
            });
    }

    return (
        <Box className="App">
            <Text>Hello World  - frontend</Text>
            <Button onClick={callApi}>call back-end</Button>
            {backendMessage && (
                <Text>
                    <span>{JSON.stringify(backendMessage, null, 2)}</span>
                </Text>
            )}
        </Box>
    );
}

export default App;

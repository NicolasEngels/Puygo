import { Button, Text, Box } from "@chakra-ui/react";
import { useState } from 'react';

function CallApiPublic() {

    const [backendMessagePublic, setBackendMessagePublic] = useState<any>(null);

    const callApiPublic = () => {
        console.log(process.env)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/public` || '')
            .then(response => response.json())
            .then(data => {
                setBackendMessagePublic(data.msg)
            })
            .catch(error => {
                setBackendMessagePublic(error);
            });
    }

    return (
        <Box>
            <Button colorScheme='blue' onClick={callApiPublic}>call back-end - public</Button>
            {backendMessagePublic && (
                <Text>
                    <span>{JSON.stringify(backendMessagePublic, null, 2)}</span>
                </Text>
            )}
        </Box>
    );
}

export default CallApiPublic;
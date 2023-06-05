import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const providerConfig = {
    domain: process.env.REACT_APP_DOMAIN || 'default_domain',
    clientId: process.env.REACT_APP_CLIENTID || 'default_clientId',
    authorizationParams: {
        redirect_uri: window.location.origin,
        ...(process.env.REACT_APP_AUDIENCE ? { audience: process.env.REACT_APP_AUDIENCE } : null),
    },
};

root.render(
    <React.StrictMode>
        <Auth0Provider {...providerConfig}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </Auth0Provider>
    </React.StrictMode>
);
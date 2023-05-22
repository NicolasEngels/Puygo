interface Config {
    REACT_APP_DOMAIN?: string;
    REACT_APP_CLIENTID?: string;
    REACT_APP_AUDIENCE?: string;
    REACT_APP_APPORIGIN?: string;
    REACT_APP_BACKEND_URL?: string;
    REACT_APP_SERVER_PORT?: string;
    REACT_APP_APP_PORT?: string;
}

const config: Config = {
    REACT_APP_DOMAIN: process.env.REACT_APP_DOMAIN,
    REACT_APP_CLIENTID: process.env.REACT_APP_CLIENTID,
    REACT_APP_AUDIENCE: process.env.REACT_APP_AUDIENCE,
    REACT_APP_APPORIGIN: process.env.REACT_APP_APPORIGIN,
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
    REACT_APP_SERVER_PORT: process.env.REACT_APP_SERVER_PORT,
    REACT_APP_APP_PORT: process.env.REACT_APP_APP_PORT
};

export default config;

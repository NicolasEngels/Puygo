import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import './App.css';

function App() {

    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Box className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home} />
                </Routes>
            </BrowserRouter>
        </Box>
    );
}

export default App;

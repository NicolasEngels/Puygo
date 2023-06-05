import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Graphics from "./pages/Graphics";
import Statistics from "./pages/Statistics";
import Historic from "./pages/Historic";
import Profile from "./pages/Profile";
import Loading from "./components/Loading";
import './App.css';

function App() {

    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Box className="App">
            <BrowserRouter >
                <Box display='flex' bgColor='#F6F7F9' h={'100vh'}>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/graphics" element={<Graphics />} />
                        <Route path="/statistics" element={<Statistics />} />
                        <Route path="/historic" element={<Historic />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </Box>
    );
}

export default App;

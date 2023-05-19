import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';

function App() {
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

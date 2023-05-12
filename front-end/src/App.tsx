import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Graphics from "./pages/Graphics";
import Statistics from "./pages/Statistics";
import Historic from "./pages/Historic";
import ExternalApi from "./pages/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";

// styles
import "./App.css";

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app">
        <BrowserRouter>
            <div id="app" className="d-flex flex-column h-100">
                <NavBar />
                
                <Container className="flex-grow-1 mt-5">
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/profile" Component={Profile} />
                        <Route path="/external-api" Component={ExternalApi} />
                        <Route path="/graphics" Component={Graphics} />
                        <Route path="/statistics" Component={Statistics} />
                        <Route path="/historic" Component={Historic} />
                    </Routes>
                </Container>
            </div>
        </BrowserRouter>
    </div>
  );
};

export default App;

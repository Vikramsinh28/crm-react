import SignupPage from "./pages/SignupPage";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<SignupPage/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

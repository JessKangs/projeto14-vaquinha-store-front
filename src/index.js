import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./tools/GlobalStyle";

import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Home from "./pages/home";
import Cart from "./pages/cart";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<SignIn/>} /> 
                <Route path="/cadastro" element={<SignUp/>} /> 
                <Route path="/home" element={<Home/>} /> 
                <Route path="/carrinho" element={<Cart/>} /> 
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))
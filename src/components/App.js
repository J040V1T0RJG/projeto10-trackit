import { BrowserRouter, Routes, Route} from "react-router-dom"

import Login from "./Login";
import Register from "./Register";
import Today from "./Today";

function App () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/habitos"/>
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historico"/>
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default App;
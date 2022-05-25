import { BrowserRouter, Routes, Route} from "react-router-dom"

import Login from "./Login";

function App () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro"/>
                    <Route path="/habitos"/>
                    <Route path="/hoje"/>
                    <Route path="/historico"/>
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default App;
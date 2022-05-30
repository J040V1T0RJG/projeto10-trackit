import { BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react";

import Login from "./Login";
import Register from "./Register";
import Today from "./Today";
import Habits from "./Habits";
import UserContext from "./UserContext";
import Historic from "./Historic";



function App () {

    const [loginPromiseData, setLoginPromiseData] = React.useState({});
    const [quantityDone, setQuantityDone] = React.useState(0);
    const [totalDone, setTotalDone] = React.useState(0);
    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value={{  
                                                loginPromiseData, 
                                                setLoginPromiseData, 
                                                quantityDone, 
                                                setQuantityDone,
                                                totalDone,
                                                setTotalDone
                                            }}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Register />} />
                        <Route path="/habitos" element={<Habits />} />
                        <Route path="/hoje" element={<Today />} />
                        <Route path="/historico" element={<Historic />}/>
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}


export default App;
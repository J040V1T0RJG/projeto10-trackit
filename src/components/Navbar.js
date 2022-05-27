import styled from "styled-components";
import { useContext } from "react"
import UserContext from "./UserContext";

function Navbar () {
    const { loginPromiseData } = useContext(UserContext)
    const URLimage = loginPromiseData.response.data.image

    return (
        <>
            <NavbarStyle>
                <div className="organizate">
                    <img src="img/TrackIt.png" alt="LOGO" />
                    <img src={URLimage} alt="Foto de perfil" />
                </div>
            </NavbarStyle>
        </>
    )
}

const NavbarStyle = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    z-index: 1;

    .organizate {
        width: 100%;
        height: 70px;
        position: relative;
    }

    .organizate>:first-child {
        width: 97px;
        height: 49px;
        position: absolute;
        top: 10px;
        left: 20px;
    }
    .organizate>:last-child {
        width: 51px;
        height: 51px;
        position: absolute;
        background-color: red;
        border-radius: 98.5px;
        top: 10px;
        right: 20px;
        
    }
`
    


export default Navbar;
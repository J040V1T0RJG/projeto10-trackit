import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import {easeQuadInOut} from "d3-ease"
import 'react-circular-progressbar/dist/styles.css';



import AnimatedProgressProvider from "./AnimatedProgressProvider";

function Menu () {

    function routsToday () {
        alert("aa routaaaaaaaaa")
    }

    let percentage = 60;
    return (
        <>
            <MenuStyle>
                <div className="organizate">
                    <LinkStyle to={"/"} ><p className="firstChild">Hábitos</p></LinkStyle>
                    <ProgressbarStyle >
                        <Link to={"/"}>
                            <CircularProgressbar
                                value={percentage}
                                text={`Hoje`}
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                                })}
                            />
                        </Link>

                    </ProgressbarStyle>
                    <LinkStyle to={"/historico"} ><p className="secondChild">Histórico</p></LinkStyle>
                </div>
            </MenuStyle>
        </>
    )
}



const MenuStyle = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background-color: #FFFFFF;

    .organizate {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;

    }

`;

const LinkStyle = styled(Link)`
    text-decoration: none;
    cursor: pointer;

    p {
        width: 68px;
        height: 22px;
        left: 36px;
        top: 619px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
    }
    .firstChild {
        margin-right: 100px;
    }
    >:first-child {
        
    }
`;

const ProgressbarStyle = styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    bottom: 10px;



    
`;
export default Menu;
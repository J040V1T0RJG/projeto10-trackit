import styled from "styled-components";

import Navbar from "./Navbar";
import Menu from "./Menu";

function Historic () {
    return (
        <>
            <Navbar /> 
            <HistoricStyle>
                <p>Histórico</p>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoricStyle>
            <Menu /> 
        </>
    )
};

const HistoricStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    padding-left: 18px;

    >:first-child {
        width: 100px;
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-top: 18px;
        margin-bottom: 18px;
    }

    >:last-child {
        width: 338px;
        height: 74px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;


export default Historic;
import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import { useState, useContext, useEffect } from "react";
import axios from "axios";

import UserContext from "./UserContext";
import Navbar from "./Navbar";
import Menu from "./Menu";


function Today () {
    dayjs.locale('pt-br');
    let nameTitle;
    const { loginPromiseData } = useContext(UserContext);
    const token = {
        headers: {
            "Authorization": `Bearer ${loginPromiseData.response.data.token}`
        }
    };
    const [dataTodays, setDataTodays] = useState([])

    const URLtoday = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

    useEffect(() => {
        const promise = axios.get(URLtoday, token)
        promise.then(response => {
            console.log("response.data", response.data)
            setDataTodays([...dataTodays, response.data])
        })
    },[]);

    function BuildBoxToday (props) {

        function test () {

        }
        console.log("nametitle", props.title)

        return (
            <>
                <BoxTodayStyle>
                    <div className="organizate">
                        <p>catapimbas</p>
                        <div className="current">
                            <p>sequencia atual:</p>
                            <p>3 dias</p>
                        </div>
                        <div className="record">
                            <p>seu record:</p>
                            <p>5 dias</p>
                        </div>

                    </div>
                    <div className="check" onClick={() => test()}>
                        <img src="img/Vector.png" alt="Check" />
                    </div>
                </BoxTodayStyle>          
            </>
        )
    }







    const variavelporcentagem = 0;
    const formBoxToday = BuildBoxToday()
    return (
        <>
            <Navbar />
            <TodayStyle>
                <p>{dayjs().format("dddd")}, {dayjs().format("DD/MM")} </p>
                {variavelporcentagem > 0 ? <p className="percentageVar">{variavelporcentagem} dos habitos concluidos</p> : <p className="noPercentage">Nenhum habito concluido</p> }
                {console.log("dataTodays dado central",dataTodays)}
           {/**      {dataTodays[0].map((dataToday, index) => (
                    nameTitle = dataTodays[0],
                    <BuildBoxToday key={index} title={nameTitle}/>
                ))} */}




            </TodayStyle>
            <Menu /> 
        </>
    )
}

const TodayStyle = styled.div`
    margin-top: 70px;
    padding-left: 16px;

    >:first-child {
        margin-top: 28px;
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        
    }

    .percentageVar {
        width: 238px;
        height: 22px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #8FC549;
        margin-bottom: 28px;
    }

    .noPercentage {
        width: 278px;
        height: 22px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        margin-bottom: 28px;
    }
`;
const BoxTodayStyle = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    padding-left: 15px;

    .check {
        width: 69px;
        height: 69px;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 13px;
        right: 13px;
    }

    .check img {
        width: 35px;
        height: 28px;
    }

    .organizate {
        display: flex;
        flex-direction: column;
    }

    .organizate p {
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }

    .organizate > p {
        height: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-top: 13px;
        margin-bottom: 7px;
    }

    .current {
        display: flex;
    }

    .current :first-child {
        margin-right: 5px;
    }

    .record {
        display: flex;
    }

    .record :first-child {
        margin-right: 5px;
    }
`;

export default Today;
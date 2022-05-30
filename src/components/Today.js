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

    const { loginPromiseData, totalDone, setTotalDone,  quantityDone, setQuantityDone } = useContext(UserContext);
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
            setDataTodays( response.data)
        })
    },[]);

    function RenderBoxTodayList () {

        setTotalDone(dataTodays.length)
        console.log("passo1", dataTodays)
        console.log("passo2", dataTodays[0])

            return (
                <>
                    {dataTodays.map((dataToday, index) => (
                        <BuildBoxToday key={index} dados={dataToday}/>
                    ))}
                </>
            )
    } 

    function BuildBoxToday (props) {

        const [greencheck, setGreenCheck] = useState("")
        const [greenCurrent, setGreenCurrent] = useState("")
        const [greenRecord, setGreenRecord] = useState("")
    //    const [truff, setTruff] = useState(false)

/*
       if((props !== undefined && props.dados.currentSequence) == (props !== undefined && props.dados.highestSequence) && (props !== undefined && props.dados.highestSequence) > 0) {
            setGreenRecord("greenRecord")
        }
*/
/*
    const truf = ((props !== undefined && props.dados.done ) == true);
    const [truff, setTruff] = useState(truf)
     if (truff) {
            setQuantityDone(quantityDone + 1)
            setTruff(false)
     }  
*/
        function temporaria () {
            if(greencheck === "green"){
                setGreenCheck("")
                setGreenCurrent("")
            }
            else {
                setGreenCheck("green") 
                setGreenCurrent("greenCurrent")
            } 
        }

        function toggleSelect () {
            temporaria()

            if (greencheck === "green") {
                setQuantityDone(quantityDone - 1)

                const URLunchecked = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props !== undefined && props.dados.id}/uncheck`
                const promiseUnchecked = axios.post(URLunchecked, {}, token)
                promiseUnchecked.then(alert("desmarquei"))
                promiseUnchecked.catch(err => {
                    alert(err.response.data.message)
                })
            }
            else {
                setTruff(true)
                setQuantityDone(quantityDone + 1)

                const URLchecked = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props !== undefined && props.dados.id}/check`
                const promiseChecked = axios.post(URLchecked, {}, token);
                promiseChecked.then(alert("marquei"))
                promiseChecked.catch(err => {
                    alert(err.response.data.message)
                })  
            } 
        }

            return (
                <>
                    <BoxTodayStyle>
                        <div className="organizate">
                            <p>{props !== undefined && props.dados.name}</p> 
                            <div className="current">
                                <p>sequencia atual:</p>
                                <p className={greenCurrent}>{ props !== undefined && props.dados.currentSequence} dias</p>
                            </div>
                            <div className="record">
                                <p>seu record:</p>
                                <p className={greenRecord}>{props !== undefined && props.dados.highestSequence} dias</p>
                            </div>
    
                        </div>
                        <div className={`check ${greencheck}`} onClick={() => toggleSelect()}>
                            <img src="img/Vector.png" alt="Check" />
                        </div>
                    </BoxTodayStyle>          
                </>
            )
    }

    let variavelporcentagem = ((quantityDone * 100)/totalDone).toFixed(1)
    const formBoxToday = BuildBoxToday()
    return (
        <>
            <Navbar />
            <TodayStyle>
                <p>{dayjs().format("dddd")}, {dayjs().format("DD/MM")} </p>
                {variavelporcentagem > 0 ? <p className="percentageVar">{variavelporcentagem}% dos habitos concluidos</p> : <p className="noPercentage">Nenhum habito concluido</p> }
                {console.log("dataTodays dado central",dataTodays)}
                <RenderBoxTodayList />
            </TodayStyle>
            <Menu /> 
        </>
    )
}

const TodayStyle = styled.div`
    margin-top: 98px;
    padding-left: 16px;

    >:first-child {
       
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    >:last-child {
        margin-bottom: 110px;
    }

    .percentageVar {
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
    margin-bottom: 10px;

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
    .check.green {
        background-color: #8FC549;
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

    .current p.greenCurrent {
        color: #8FC549;
    }

    .record {
        display: flex;
    }

    .record :first-child {
        margin-right: 5px;
    }

    .record p.greenRecord {
        color: #8FC549;
    }
`;

export default Today;
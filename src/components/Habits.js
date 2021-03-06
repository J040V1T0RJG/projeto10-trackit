import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"

import UserContext from "./UserContext";
import Navbar from "./Navbar";
import Menu from "./Menu";

function Habits () {

    const [disabled, setDisabled] = useState(false);
    const [pluxButton, setPluxButton] = useState(false);;
    const [dataHabits, setDataHabits] = useState({name: ""}); 
    const [dataHabitsList, setDataHabitsList] = useState([]);
    const [reload, setReload] = useState(true);

    const { loginPromiseData } = useContext(UserContext);
    const token = {
        headers: {
            "Authorization": `Bearer ${loginPromiseData.response.data.token}`
        }
    };
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const URLreceive = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    let selectedDays = [];
    let nameTitle;

    if (reload) {
        const receive = axios.get(URLreceive, token);
        receive.then(response => {
            setDataHabitsList(response.data)
            setReload(false)
        })
    }

    function displayForm () {
        if (pluxButton) {
            setPluxButton(false);
        }
        else {
            setPluxButton(true);
        }
    };

    function cancelHabitsForm () {
        setPluxButton(false);
    };

    function sendNewHabit (e) {
        e.preventDefault();
        setDisabled(true)
  
        const URlsend = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const promise = axios.post(URlsend, {
            name: dataHabits.name,
            days: selectedDays
        }, token);

        promise.then(response => {
            setDataHabits({...dataHabits, name: ""});
            setDisabled(false);
            setPluxButton(false);
            setReload(true)
        });

        promise.catch(err => {
            setDisabled(false)
            alert(`${err.response.data.message}`)
        })

    };

    function BuildHabitCreationBox () {
        return (
            <>
                <HabitCreationBoxStyle>
                    <FormCreationHabitsStyle onSubmit={sendNewHabit}>
                        <input 
                            type="text"
                            placeholder="nome do h??bito"
                            value={dataHabits.name}
                            required
                            onChange={e => setDataHabits({...dataHabits, name: e.target.value})}
                            disabled={disabled}
                        />
                        <div className="organizate">
                            {days.map((day, index) => (
                                <RenderDays key={index} index={index} day={day} />
                            ))}
                        </div>
                        <div className="button">
                            <div className="cancelButton" onClick={() => cancelHabitsForm()}><p>Cancelar</p></div>
                            <button type="submit" className="saveButton" disabled={disabled} >{!disabled ? <p>Salvar</p> : <ThreeDots color="#FFFFFF" width="60px" height="30px"/>}</button>
                        </div>
                    </FormCreationHabitsStyle>
                </HabitCreationBoxStyle>
            </>
        )
    };

    function RenderDays (props) {
        const { index  } = props
        const dayId = index 
        const [boxColor, setBoxColor] = useState("");

        function toggleSelectDay () {
            if (boxColor === "selected") {
                setBoxColor("");
                let newarray = selectedDays.filter((day) => day !== dayId);
                selectedDays = newarray;
            }
            else {
                setBoxColor("selected");
                selectedDays.push(dayId);
            }
        };
        return (<><button className={boxColor} disabled={disabled} type="button" onClick={() => toggleSelectDay()}><p>{props.day}</p></button></>)
    };

    function BuildHabitLists () {
        return (
            <>
                {dataHabitsList.map((dataHabitList, index,) => (
                    nameTitle = dataHabitsList[index].name,
                    <BuildHabitList key={index} namee={`${nameTitle}`} numberDays={dataHabitsList[index].days} id={dataHabitsList[index].id}/>
                ))}
            </>
        )
    };

    function BuildHabitList (props) {

        function EraseHabit () {
            const confirmErase = window.confirm("Gostaria realmente de apagar?")

            if(confirmErase === true) {
                const URLdelete = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`
                const promise = axios.delete(URLdelete, token)
                promise.then(response => {
                    setReload(true)
                })
            }
            else {
                alert("exclus??o cancelada")
            }
        };

        return (
            <>
                <HabitListsStyle>
                    <div className="organizate1">
                        <p>{props.namee}</p>
                        <ion-icon onClick={() => EraseHabit()} name="trash-outline"></ion-icon>
                    </div>
                    <div className="organizate2">
                        {days.map((day, index) => (
                            <RenderDaysList key={index} index={index} day={day} indexDays={index} numberDays={props.numberDays} />
                        ))}
                    </div>
                </HabitListsStyle>
            </>
        )
    };

    function RenderDaysList (props) {
        const { indexDays, numberDays } = props

        for (let i = 0; i < 7; i++) {
                if (indexDays === numberDays[i]) {

                    return (
                        <>
                            <button className="selected" type="button"><p>{props.day}</p></button>
                        </>
                    )
                }
        }
        return (
            <>
                <button type="button"><p>{props.day}</p></button>
            </>
        )
    };
    
    function BuildNoHabit () {
        return (
            <>
                <NoHabitStyle>
                    <p>Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para come??ar a trackear!</p>
                </NoHabitStyle>
            </>
        )
    };

    return (
        <>
            <Navbar /> 
            <HabitsStyle>
                <div className="myHabits" >
                    <p>Meus H??bitos </p>
                    <div className="button" onClick={() => displayForm()} ><p>+</p></div>
                </div>
                {pluxButton ? <BuildHabitCreationBox /> : <></>}
                {dataHabitsList.length < 1 ? <BuildNoHabit /> : <BuildHabitLists />}
            </HabitsStyle>
            <Menu /> 
        </>
    )
};

const HabitsStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
    margin-top: 70px;

    >:last-child {
        margin-bottom: 110px;
    }

    .myHabits {
        display: flex;
        position: relative;
        width: 100vw;
        margin-bottom: 80px;
    }

    .myHabits > p {
        height: 29px;
        left: 18px;
        top: 28px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        position: absolute;
    }

    .myHabits .button {
        width: 40px;
        height: 35px;
        right: 18px;
        top: 28px;
        background: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
    }

    .myHabits .button > p {
        width: 16px;
        height: 34px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
`;

const HabitCreationBoxStyle = styled.div`
    width: 340px;
    height: 180px;
    left: 17px;
    top: 147px;
    background: #FFFFFF;
    border-radius: 5px;
`;

const FormCreationHabitsStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    input {
        width: 303px;
        height: 45px;
        left: 36px;
        top: 165px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-top: 18px;
        margin-bottom: 8px;
        padding-left: 10px;
    }

    input::placeholder {
        width: 153px;
        height: 25px;
        left: 47px;
        top: 174px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    .organizate {
        width: 340px;
        display: flex;
        margin-left: 32px;
    }

    .organizate button {
        width: 30px;
        height: 30px;
        left: 36px;
        top: 218px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
    }

    .organizate button p {
        width: 13px;
        height: 25px;
        left: 78px;
        top: 220px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    .button {
        width: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        right: 16px;
        top: 130px;
    }

    .button .cancelButton {
        width: 69px;
        height: 20px;
        left: 165px;
        top: 284px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
    }

    .button .saveButton {
        width: 84px;
        height: 35px;
        left: 257px;
        top: 277px;
        background: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
    }

    .button .saveButton p {
        width: 50px;
        height: 20px;
        left: 274px;
        top: 284px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
    }

    .organizate button.selected {
        background-color: #CFCFCF;
    }

    .organizate button.selected p{
        color: #FFFFFF;
    }
`;

const NoHabitStyle = styled.div`
    margin-top: 28px;

    p {
        width: 338px;
        height: 74px;
        left: 17px;
        top: 155px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;

const HabitListsStyle = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 10px;

    .organizate1 {
        width: 340px;
        display: flex;
        margin-bottom: 10px;
        margin-top: 12px;
        align-items: center;
    }

    .organizate1 p {
        width: 320px;
        height: 25px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    .organizate1 ion-icon {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .organizate2 {
        width: 340px;
        display: flex;
        
    }

    .organizate2 button {
        width: 30px;
        height: 30px;
        left: 36px;
        top: 218px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
    }

    .organizate2 button p {
        width: 13px;
        height: 25px;
        left: 78px;
        top: 220px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    .organizate2 button.selected {
        background-color: #CFCFCF;
    }

    .organizate2 button.selected p{
        color: #FFFFFF;
    }
`;

export default Habits;
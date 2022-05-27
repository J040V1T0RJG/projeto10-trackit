import styled from "styled-components";

import Navbar from "./Navbar";
import Menu from "./Menu";



function Habits () {
    return (
        <>
              <Navbar /> 
            <HabitsStyle>
                <div className="myHabits" >
                    <p>Meus Hábitos </p>
                    <div className="button"><p>+</p></div>
                </div>
                <HabitCreationBoxStyle>

                </HabitCreationBoxStyle>
                <NoHabitStyle>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </NoHabitStyle>





            </HabitsStyle>

             <Menu /> 
        </>
    )
}

const HabitsStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
    margin-top: 70px;

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
`
const HabitCreationBoxStyle = styled.div`
    width: 340px;
    height: 180px;
    left: 17px;
    top: 147px;

    background: #FFFFFF;
    border-radius: 5px;
`
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




`






export default Habits;
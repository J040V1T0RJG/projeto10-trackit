import styled, { StyledComponent } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"
import { useContext } from "react";
import UserContext from "./UserContext";


function Login () {
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState({email: "", password: ""});
    const [disabled, setDisabled] = useState(false);
    const { loginPromiseData , setLoginPromiseData } = useContext(UserContext);

    function sendLogin (e) {
        e.preventDefault();
        setDisabled(true)

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const promise = axios.post(URL, {
            email: dataLogin.email,
            password: dataLogin.password
        });
        promise.then(response => {
            setLoginPromiseData({...loginPromiseData, response})
            navigate("/hoje")
        });
        promise.catch(err => {
            setDisabled(false)
            alert(`${err.response.data.message}`)
        });
    }

    function buildLoginForm () {
        return (
            <>
                    <label htmlFor="email" />
                    <input 
                        type="email"
                        id="email" 
                        placeholder="email" 
                        value={dataLogin.email}
                        required
                        onChange={e => setDataLogin({...dataLogin, email: e.target.value})}
                        disabled={disabled}
                    />
                    <label htmlFor="senha" />
                    <input 
                        type="password"
                        id="senha" 
                        placeholder="senha" 
                        value={dataLogin.password}
                        required
                        onChange={e => setDataLogin({...dataLogin, password: e.target.value})}
                        disabled={disabled}
                    />
                    <button>{!disabled ? <p>Entrar</p> : <ThreeDots color="#FFFFFF" height="40px"/>}</button>
            </>
        )
    }

const formLogin = buildLoginForm();
    return (
        <>
            <LoginStyle>
                <img src="img/Group 8.png" alt="Logomarca TranckIt" />
                <FormLoginStyle onSubmit={sendLogin}>{formLogin}</FormLoginStyle>  
                <LinkStyle to={"/cadastro"}><div className="button"><p>Não tem uma conta? Cadastre-se!</p></div></LinkStyle>
            </LoginStyle>
        </>
    )
}

const LoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
        width: 180px;
        height: 178px;
        margin-top: 62px;
        margin-bottom: 32px;
    }

    button {
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
        cursor: pointer;
    }

    button p {
        height: 26px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    }

    .button {
        width: 232px;
        height: 17px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`;

const FormLoginStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 10px;
        padding-left: 10px;
    }

    input::placeholder {
        height: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
`;

const LinkStyle = styled(Link)`
    text-decoration: none;
`;

export default Login;
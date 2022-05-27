import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

function Register () {
    const navigate = useNavigate();
    const [dataRegister, setDataRegister] = useState({email: "", name: "", image: "", password: ""})
    const [disabled, setDisabled] = useState(false)

    function sendRegistration (e) {
        e.preventDefault();
        setDisabled(true);

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const promise = axios.post(URL, {
            email: dataRegister.email,
            name: dataRegister.name,
            image: dataRegister.image,
            password: dataRegister.password
        });
        promise.then(response => {
            alert("Usuario cadastrado com sucesso")
            navigate("/");
        });
        promise.catch(err => {
            setDisabled(false)
            alert(`${err.response.data.message}`)
        });
    }

    function buildRegistrationForm () {
        return (
            <>
                <label htmlFor="email" />
                <input 
                    type="email" 
                    id="email" 
                    placeholder="email"
                    value={dataRegister.email} 
                    required
                    onChange={e => setDataRegister({...dataRegister, email: e.target.value})} 
                    disabled={disabled}
                />
                <label htmlFor="senha" />
                <input 
                    type="password" 
                    id="senha" 
                    placeholder="senha"
                    value={dataRegister.password}
                    required
                    onChange={e => setDataRegister({...dataRegister, password: e.target.value})}
                    disabled={disabled}
                />
                <label htmlFor="nome" />
                <input 
                    type="text" 
                    id="nome" 
                    placeholder="nome"
                    value={dataRegister.name}
                    required
                    onChange={e => setDataRegister({...dataRegister, name: e.target.value})}
                    disabled={disabled} 
                />
                <label htmlFor="foto" />
                <input 
                    type="url" 
                    id="foto" 
                    placeholder="foto"
                    value={dataRegister.image}
                    required
                    onChange={e => setDataRegister({...dataRegister, image: e.target.value})}
                    disabled={disabled}
                />
                <button disabled={disabled}>{!disabled ? <p>Cadastrar</p> : <ThreeDots color="#FFFFFF" height="40px"/>}</button>
            </>
        )
    }

const formRegister = buildRegistrationForm();

    return (
        <>
            <RegisterStyle>
                <img src="img/Group 8.png" alt="Logomarca TranckIt" />
                <FormRegisterStyle onSubmit={sendRegistration}>{formRegister}</FormRegisterStyle>
                <LinkStyle to={"/"}><div className="button">Já tem uma conta? Faça login!</div></LinkStyle>
            </RegisterStyle>
        </>
    )
}

const RegisterStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        height: 178px;
        margin-top: 62px;
        margin-bottom: 32px;
    }

    .button {
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

const FormRegisterStyle = styled.form`
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

    button Audio {
        color: red;
        height: 1000px;
    }
`;

const LinkStyle = styled(Link)`
    text-decoration: none;
`

export default Register;
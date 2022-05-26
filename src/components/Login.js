import styled, { StyledComponent } from "styled-components";
import { Link } from "react-router-dom";

function Login () {
    console.log("LOGIN")
    return (
        <>
            <LoginStyle>
                <img src="img/Group 8.png" alt="Logomarca TranckIt" />
                <form>
                    <label htmlFor="email" />
                    <input id="email" placeholder="email" />
                    <label htmlFor="senha" />
                    <input id="senha" placeholder="senha" />
                    <button><p>Entrar</p></button>
                </form>
                <Link to={"/cadastro"}>
                    <div className="button"><p>Não tem uma conta? Cadastre-se!</p></div>
         {/*        {isLoading ? animação : butão} */}  
                </Link>
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

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    form input::placeholder {
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
`
const LinkStyle = styled(Link)`
    text-decoration: none;
`

export default Login;
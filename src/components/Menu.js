import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import {easeQuadInOut} from "d3-ease"
import 'react-circular-progressbar/dist/styles.css';



import AnimatedProgressProvider from "./AnimatedProgressProvider";

function Menu () {

    function Example(props) {
        return (
          <div style={{ marginBottom: 80 }}>
            <hr style={{ border: "2px solid #ddd" }} />
            <div style={{ marginTop: 30, display: "flex" }}>
              <div style={{ width: "300px", paddingRight: 30 }}>{props.children}</div>
              <div style={{ width: "700px" }}>
                <h3 className="h5">{props.label}</h3>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
        );
      }

    let percentage = 0.5;
    return (
        <>
            <MenuStyle>
                <LinkStyle to={"/"} ><p>Hábitos</p></LinkStyle>

                <div style={{ padding: "40px 40px 40px 40px", width: "200px", height: "200px", color: "red" }}>
                    
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                  
                </div>



             {/*  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={66}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    repeat
                >
                    {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        /* This is important to include, because if you're fully managing the
                    animation yourself, you'll want to disable the CSS animation. tagcoment(* /)
                        styles={buildStyles({ pathTransition: "none" })}
                        />
                    );
                    }}
                </AnimatedProgressProvider>*/} 


                <LinkStyle to={"/"} ><p>Histórico</p></LinkStyle>
            </MenuStyle>
        </>
    )
}



const MenuStyle = styled.div`
    width: 100%;
    height: 70px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;

`
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
`;
export default Menu;
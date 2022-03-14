import React from "react";

import styled from 'styled-components';

import { Link } from 'react-router-dom';

function Presentation () {
    
    const PresentationBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 560px;
    background: rgb(39,60,131);
    background: linear-gradient(0deg, rgba(54, 85, 191, 1) 30%, rgba(80,120,255,1) 84%);
    @media only screen and ( max-width: 900px)  {
        height: 690px;
    }
    `
    const BallContainer = styled.div`
    height: 54px;
    width: 16px;
    display: flex;
    justify-content: center;
    border: 1px solid white;
    border-radius: 50px;
    margin: 12px;
    margin-top: -72px;
    `
    const Ball = styled.div`
    @keyframes animation {
        0% {
            margin-top: 2px;
        }
        10% {
            margin-top: 4px;
            height: 10px;
            width: 10px;
        }
        20% {
            margin-top: 6px;
            height: 10.5px;
            width: 10.5px;
        }
        30% {
            margin-top: 10px;
            height: 11px;
            width: 11px;
        }
        40% {
            margin-top: 18px;
            height: 12px;
            width: 12px;
       }
        50% {
            margin-top: 34px;
            height: 14px;
            width: 14px;      
        }
        60% {
            margin-top: 2px;
            height: 12px;
            width: 12px;      
        }
        70% {
            margin-top: 2px;
            height: 10.5px;
            width: 10.5px;
        }
        80% {
            margin-top: 2px;
            height: 10px;
            width: 10px;
        }
        90% {
            margin-top: 2px;
            height: 10px;
            width: 10px;
        } 
        }
        100% {
            margin-top: 2px;
            height: 10px;
            width: 10px;
        }
    };
    height: 10px;
    width: 10px;
    border-radius: 100%;
    margin-top: 2px;
    background-color: rgba(255, 255, 255, 0.75);
    animation-name: animation;
    animation-duration: 1.5s;
    animation-iteration-count: infinite; 
    `

    const PuzzlePresentation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 90%;
    width: 90%;
    margin-top: 12px;
    align-items: center;
    margin-top: 30px;
    
    .logoSVG {
        width: 260px;
        height: 260px;
        
        opacity: 0.81;
        transition: 0.2s;
        align-self: center;
        :hover {
            opacity: 0.9;
            transition: 0.2s;
        }
    }
    .changedWelcomeStroke {
        -webkit-text-stroke: 2px #fff;
    }
    .welcomeTextHome {
        width: 100%;
        text-align: center;
    }
    .welcomeBigBox {
        width: 30%;
        display: flex;
        flex-direction: column;
        margin-top: -45px;
        align-items: center;
    }
    @media only screen and ( max-width: 900px)  {
        flex-direction: column;
        .logoSVG {
            display: none;
        }
        .welcomeTextHome {
            padding: 30px;
            
        }
        .welcomeBigBox {
            width: 100%;
        }
    }
    `
    const TreeImage = styled.img`
    width: 337px;
    height: 441px;
    opacity: 0.75;
    transition: 0.2s;
    :hover {
        opacity: 1;
        transition: 0.2s;
    }
    @media only screen and ( max-width: 900px)  {
        align-self: center;

    }
    `
    const Division = styled.div`
    height: 60%;
    width: 3px;
    background-color: rgb(240, 240, 240);
    @media only screen and ( max-width: 900px)  {
        display: none;

    }
    `
    const SelectionTextDiv = styled.div`
    
    @media only screen and ( max-width: 900px)  {
        align-self: center;

    }
    `
    const SelectionText1 = styled.p`
    font-size: 15px;
    color: #fff;
    opacity: 0.75;
    transition: 0.2s;
    font-weight: 800;
    text-shadow: 1px 4px 12px rgba(255, 255, 255, 0.75);
    :hover {
        opacity: 1;
        transition: 0.2s;
        text-shadow: 1px 4px 12px rgba(255, 255, 255, 1);
    }
    `
    const LogoWelcome = styled.p`
    font-weight: 900;
    font-size: 37px;
    
    color: #fff;
    opacity: 0.81;
    transition: 0.2s;
    :hover {
        opacity: 1;
        transition: 0.2s;
    }
    @media only screen and ( max-width: 900px)  {
        align-self: center;
        margin-left: 0%;
    }
    `
    return (
        <PresentationBox>
            <PuzzlePresentation>
                
                <div className="welcomeBigBox">
                    <div className="welcomeTextHome" style={{width: "100%"}}>
                        <LogoWelcome>SAUDAÇÕES!</LogoWelcome>
                        <LogoWelcome className="changedWelcomeStroke" style={{color: "transparent"}}>SAUDAÇÕES!</LogoWelcome>
                        <LogoWelcome className="changedWelcomeStroke" style={{color: "transparent"}}>SAUDAÇÕES!</LogoWelcome>
                    </div>
                   
                    <svg className="logoSVG"  viewBox="0 0 902 902" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1V901H53.3073C52.1837 427 439.684 399 451 901H901V1H849.817C838.5 503 451 475 452.124 1H1Z" fill="#fff" stroke="#E7EDFF"/>
                   </svg>

                </div>
                <Division></Division>
                
                <div style={{ alignItems: "center", width: "30%", height: "500px", display: "flex", flexDirection: "column" }}>
                    <TreeImage src={require("./tree.png")}></TreeImage>
                    <SelectionTextDiv style={{ marginTop: "-450px", textAlign: "center" }}>
                        <SelectionText1 style={{marginTop: "9px", cursor: "default"}}>BASTIDORES</SelectionText1>
                        <div style={{ display: "flex", flexDirection: "row", width: "100%", textAlign: "center" }}>
                            <div style={{ display: "flex", flexDirection: "row", width: "100%", textAlign: "center" }}>
                                <Link style={{textDecoration: "none"}} to="/timeline"><SelectionText1 style={{ marginTop: "51px", marginLeft: "-30px", cursor: "default" }}>REALIZAÇÕES</SelectionText1></Link>
                                <Link style={{textDecoration: "none"}} to="/timeline"><SelectionText1 style={{ marginTop: "27px", marginLeft: "0px", cursor: "default" }}>PRÊMIOS</SelectionText1></Link>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", width: "100%", textAlign: "center" }}>
                                <Link style={{textDecoration: "none"}} to="/perfil"><SelectionText1 style={{ marginTop: "27px", marginLeft: "50px", cursor: "default" }}>EXPERIÊNCIA</SelectionText1></Link>
                                <Link style={{textDecoration: "none"}} to="/perfil"><SelectionText1 style={{ marginTop: "51px", marginLeft: "-33px", cursor: "default" }}>PROJETOS</SelectionText1></Link>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", width: "100%", textAlign: "center" }}>
                            <Link style={{textDecoration: "none"}} to="/timeline"><SelectionText1 style={{ marginTop: "33px", marginLeft: "90px", cursor: "default" }}>TIMELINE</SelectionText1></Link>
                            <Link style={{textDecoration: "none"}} to="/perfil"><SelectionText1 style={{ marginTop: "33px", marginLeft: "45px", cursor: "default" }}>PERFIL</SelectionText1></Link>
                        </div>
                        <SelectionText1 style={{ marginTop: "198px", marginLeft: "-18px", cursor: "default" }}>VOCÊ ESTÁ AQUI</SelectionText1>
                        
                    </SelectionTextDiv>
                </div>
            </PuzzlePresentation>
            <BallContainer>
                <Ball></Ball>
            </BallContainer>
        </PresentationBox>
    );
}

export default Presentation;

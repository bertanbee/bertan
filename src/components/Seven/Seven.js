import styled from 'styled-components';

import { FaWindows, FaApple, FaLinux } from'react-icons/fa';

export default function Seven () {
    const Seven = styled.div`
    @keyframes Seven {
        0% {
            margin-left: -120px;
            opacity: 0;
        }
        100% {
            margin-left: 0px;
            opacity: 1;
        }
    }
    animation-name: Seven;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    transition: 0.25s;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    padding: 45px;
    border-radius: 10px;
    background: rgb(39,60,131);
    background: linear-gradient(340deg, rgba(10, 10, 10, 1) 30%, rgba(60,60,60,1) 84%);
    width: 800px;
    align-self: center;
    margin-top: 30px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.9);
    @media only screen and ( max-width: 1000px)  {
        width: 80%;
    }  
    @media only screen and ( max-width: 700px)  {
        width: 70%;
    } 
    `
    const IntroductionDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media only screen and ( max-width: 1000px)  {
        width: 100%;
        flex-direction: column;
        padding-bottom: 12px;
        text-align: center;
    }  
    `
    const SevenLogo = styled.img`
    height: 100px;
    width: 100px;
    @media only screen and ( max-width: 1000px)  {
        height: 80px;
        width: 80px;
    }  
    `
    const SubtitleText = styled.p`
    color: rgb(210, 210, 210);
    font-size: 21px;
    font-weight: 900;
    @media only screen and ( max-width: 700px)  {
        font-size: 17px;
    } 
    `
    const BottomBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and ( max-width: 1000px)  {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }  
    `
    const AdvantagesBox = styled.div`
    display:flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    `
    const Advantage = styled.p`
    color: rgb(210, 210, 210);
    font-weight: 900;
    padding: 12px;
    `
    const ToWebsiteAnchor = styled.a`
    align-self: end;
    text-decoration: none;
    color: rgb(20, 20, 20);
    letter-spacing: 2px;
    text-weight: 800;
    `
    const ButtonToWebsite = styled.div`
    border-radius: 1px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 24px;
    background: linear-gradient(340deg, rgba(160,160,160,1) 30%, rgba(254, 255, 255, 1) 84%);
    box-shadow: 0 4px 12px rgba(240, 240, 240, 0.3);
    transition: 0.2s;
    :hover {
        box-shadow: 0 4px 25px rgba(240, 240, 240, 0.5);
        transition: 0.2s;
    }
    `
    const PresentationWithComputerAndButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    @media only screen and ( max-width: 1000px)  {
        align-items: center;
        width:100%;
    }  
    `
    const ComputerImg = styled.img`
    padding: 12px;
    width: 337.66px;
    height: 176.12px;
    @media only screen and ( max-width: 1000px)  {
        width: 306.96px;
        height: 160.11px;
    } 
    `
    return (
        <Seven>
            <IntroductionDiv>
                <SevenLogo src="https://i.ibb.co/s9kptds/Mediamodifier-Design-Template-1.png"></SevenLogo>
                <SubtitleText>Sua semana organizada como ela deve ser!</SubtitleText>
            </IntroductionDiv>
            <BottomBox>
                <AdvantagesBox>
                    <Advantage> • Repetição de uma rotina semanal.</Advantage>
                    <Advantage> • Não é necessário criar nenhuma conta.</Advantage>
                    <Advantage> • Os dados são armazenados por meio de cookies.</Advantage>
                    <Advantage> • O código está disponível em <a style={{color:"rgb(200, 200, 200)"}} target="_blank" rel="noreferrer" href="https://github.com/bertanbee/7weekseven">7weekseven</a>.</Advantage>
                </AdvantagesBox>
                <PresentationWithComputerAndButtonDiv >
                    <ComputerImg src={require("./sevencomputershowcase.png")}></ComputerImg>
                    <div style={{display: "flex", flexDirection: "row",alignItems: "center", justifyContent: "right"}}>
                        <FaWindows fill="rgb(240, 240, 240)" style={{padding: "6px"}}></FaWindows>
                        <FaApple fill="rgb(240, 240, 240)" style={{padding: "6px"}}></FaApple>
                        <FaLinux fill="rgb(240, 240, 240)" style={{padding: "6px"}}></FaLinux>
                        <ToWebsiteAnchor target="_blank" rel="nonreferrer" href="https://7week.lucasbertan.com.br/"><ButtonToWebsite>EXPLORAR</ButtonToWebsite></ToWebsiteAnchor>
                    </div>
                </PresentationWithComputerAndButtonDiv>
                
            </BottomBox>
        </Seven>
    );
}

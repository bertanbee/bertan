import styled from 'styled-components'

export default function LanguageComp () {
    const LanguageBox = styled.div`
    @keyframes languagebox {
        0% {
            margin-right: -120px;
            opacity: 0;
        }
        100% {
            margin-right: 0px;
            opacity: 1;
        }
    }
    animation-name: languagebox;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    transition: 0.25s;
    margin-right: 0px;

    display: flex;
    flex-direction: column;
    
    align-self:center;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 60px;

    background: rgb(39,60,131);
    background: linear-gradient(20deg, rgba(54, 85, 191, 1) 30%, rgba(80,120,255,1) 84%);
    border-radius: 10px;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    width: 30%;
    @media only screen and ( max-width: 1000px)  {
        width: 80%;
    }  
    @media only screen and ( max-width: 700px)  {
        width: 70%;
    } 
    `
    const LanguageMiniBox = styled.div`
    display: flex;
    flex-direction: row;
    align-self:center;
    padding: 30px;
    padding-right: 60px;
    width: 100%;
    @media only screen and ( max-width: 700px)  {
        padding-right: 90px;
    } 
    `
    const LanguageNameAndLevelInfoBox = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-left: 27px;
    `
    const LanguageProgressBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: right;
    `
    const Progress = styled.div`
    display: flex;
    width:60%;
    height: 6px;
    background: #001d75;
    align-self: right;
    border-radius: 3px;
    margin-left: 60px;
    @media only screen and ( max-width: 700px)  {
        width:180px;
    } 
    `
    const LanguageName = styled.p`
    color: rbg(40, 40, 40);
    font-weight: 900;
    letter-spacing: 3px;
    font-size: 18px;
    @media only screen and ( max-width: 700px)  {
        font-size: 15px;
    } 
    `
    const LanguageStatus = styled.p`
    color: rbg(100, 100, 100);
    font-weight: 900;
    letter-spacing: 3px;
    @media only screen and ( max-width: 700px)  {
        font-size: 15px;
    } 
    `
    return (
        <>
        <LanguageBox>
            <LanguageMiniBox>
                <img alt="brazilian-flag" src="https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" style={{height:"40px", width:"60px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"}}></img>
            
                <LanguageProgressBox>
                    <LanguageNameAndLevelInfoBox>
                        <LanguageName>PORTUGUÊS</LanguageName>
                        <LanguageStatus>NATIVO</LanguageStatus>
                    </LanguageNameAndLevelInfoBox>
                    <Progress>
                        <div style={{
                            height: "100%",
                            width: "100%",
                            background: "linear-gradient(90deg, rgba(0,39,118,1) 17%, rgba(254,223,0,1) 50%, rgba(0,155,58,1) 100%",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                            borderRadius: "3px"
                        }}></div>
                    </Progress>
                </LanguageProgressBox>
            </LanguageMiniBox> 

            <LanguageMiniBox>
                <img alt="uk-flag" src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" style={{height:"30px", width:"60px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"}}></img>
            
                <LanguageProgressBox>
                    <LanguageNameAndLevelInfoBox>
                        <LanguageName>INGLÊS</LanguageName>
                        <LanguageStatus>AVANÇADO</LanguageStatus>
                    </LanguageNameAndLevelInfoBox>
                    <Progress>
                        <div style={{
                            height: "100%",
                            width: "90%",
                            background: "linear-gradient(90deg, rgba(0,39,118,1) 17%, rgb(240, 240, 240) 50%, #ff3838 100%",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                            borderRadius: "3px"
                        }}></div>
                    </Progress>
                </LanguageProgressBox>
            </LanguageMiniBox> 

            <LanguageMiniBox>
                <img alt="spain-flag" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg" style={{height:"40px", width:"60px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"}}></img>
            
                <LanguageProgressBox>
                    <LanguageNameAndLevelInfoBox>
                        <LanguageName>ESPANHOL</LanguageName>
                        <LanguageStatus>INTERMEDIÁRIO</LanguageStatus>
                    </LanguageNameAndLevelInfoBox>
                    <Progress>
                        <div style={{
                            height: "100%",
                            width: "70%",
                            background: "linear-gradient(90deg, #aa151b  17%, #f1bf00 50%, #aa151b  100%",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                            borderRadius: "3px"
                        }}></div>
                    </Progress>
                </LanguageProgressBox>
            </LanguageMiniBox> 
        </LanguageBox>
        </>
    );
}

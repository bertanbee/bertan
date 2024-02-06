import styled from 'styled-components'

export default function Interests () {
    const LanguageBox = styled.div`
    @keyframes interestsbox {
        0% {
            margin-left: -120px;
            opacity: 0;
        }
        100% {
            margin-left: 5%;
            opacity: 1;
        }
    }

    @keyframes interestsboxzero {
        0% {
            margin-left: -120px;
            opacity: 0;
        }
        100% {
            margin-left: 0%;
            opacity: 1;
        }
    }
    
    animation-name: interestsbox;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    transition: 0.25s;

    display: flex;
    flex-direction: column;

    margin-top: 30px;
    margin-bottom: 30px;
    padding: 30px;

    margin-left: 5%;

    align-items: center;
    background: rgb(39,60,131);
    background: linear-gradient(20deg, rgba(54, 85, 191, 1) 30%, rgba(80,120,255,1) 84%);
    border-radius: 10px;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    width: 20.4%;
    
    @media only screen and ( max-width: 1000px)  {
        width: 85%;
        animation-name: interestsboxzero;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        transition: 0.25s;
    }  

    `
    const TitleInterests = styled.p`
    letter-spacing: 3px;
    font-size: 21px;
    padding: 30px;
    `
    const InterestsMiniBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    `
    const Interest = styled.p`
    letter-spacing: 1px;
    padding: 12px;
    `
    return (

        <LanguageBox>
            <TitleInterests><b>INTERESSES</b></TitleInterests>
            <InterestsMiniBox>
                <Interest>Computação aplicada ao campo</Interest>
                <Interest>Inteligêcia Artificial</Interest>
                <Interest>Economia</Interest>
                <Interest>IoT e cidades inteligentes</Interest>
                <Interest>Desafios tecnológicos em países emergentes</Interest>
            </InterestsMiniBox>
            
        </LanguageBox>

    );
}

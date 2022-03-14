import styled from 'styled-components';

import { Link } from 'react-router-dom';

function NewTopic (props) {
    const ContainBox = styled.div`
    @media only screen and ( min-width: 1000px)  {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        padding-top: 100px;
        padding-bottom: 100px;
        @keyframes animation1 {
            0% {
                margin-bottom: -60px;
                margin-top: 60px;
            }
            100% {
                margin-bottom: 0px;
                margin-top: 0px;
            }
        }
    
        @keyframes animation2 {
            0% {
                margin-bottom: 0px;
                color: transparent;
                -webkit-text-stroke: 4px transparent;
            }
            100% {
                margin-bottom: 0px;
                color: #5078FF;
                -webkit-text-stroke: 4px #5078FF;
            }
        }
        @keyframes animation3 {
            0% {
                margin-top: -60px;
                color: transparent;
                -webkit-text-stroke: 4px transparent;
            }
            100% {
                margin-top: 0px;
                color: #7d9aff;
                -webkit-text-stroke: 4px #7d9aff;
            }
        }
        @keyframes animation4 {
            0% {
                margin-bottom: 0px;
                margin-top: 0px;
                
            }
            100% {
                margin-bottom: -60px;
                margin-top: 60px;
                
            }
        }
    
        @keyframes animation5 {
            0% {
                color: #5078FF;
                -webkit-text-stroke: 4px #5078FF;
            }
            100% {
                color: transparent;
                -webkit-text-stroke: 4px transparent;
            }
        }
        @keyframes animation6 {
            0% {
                margin-top: 0px;
                color: #7d9aff;
                -webkit-text-stroke: 4px #7d9aff;
            }
            100% {
                margin-top: -60px;
                color: transparent;
                -webkit-text-stroke: 4px transparent;
            }
        }
        :hover .NewTopicBox .LeftDivision .TextDivision #one {
            animation-name: animation1;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            
            
            
        }
        :hover .NewTopicBox .LeftDivision .TextDivision #two {
            animation-name: animation2;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            
            
        }
        :hover .NewTopicBox .LeftDivision .TextDivision #three {
            animation-name: animation3;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            
        } 
        .NewTopicBox .LeftDivision .TextDivision #one {
            font-weight: 1000;
            animation-name: animation4;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #273C83;
            -webkit-text-stroke: 4px #273C83;
            
        }
        .NewTopicBox .LeftDivision .TextDivision #two {
            font-weight: 1000;
            trasition: 0.1s;
            animation-name: animation5;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #5078FF;
            -webkit-text-stroke: 4px #5078FF;
        }
        .NewTopicBox .LeftDivision .TextDivision #three {
            font-weight: 1000;
            trasition: 0.1s;
            animation-name: animation6;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #7d9aff;
            -webkit-text-stroke: 4px #7d9aff;
        }
        .notes {
            height: 268.65px; 
            width: 236px;
            transition: 0.1s;
            margin-left: -450px;
            margin-top: 0px;
            transform: rotate(15deg); 
            
        }
        .pencil {
            height: 181.25px;
            width: 122.5px;
            margin-left: 50px;
            margin-top: 30px;
            transition: 0.1s;
            transform: rotate(-15deg); 
        }
        :hover .pencil {
            height: 217.5px;
            width: 147px;
            transition: 0.1s;
            margin-left: 60.5px;
            margin-top: 30px;
            transform: rotate(0deg); 
        }
        :hover .notes {
            height: 332.38px; 
            width: 283.2px;
            margin-left: -495px;
            transition: 0.1s;
            margin-top: -30px;
            transform: rotate(0deg); 
        }
    } 
    @media only screen and ( max-width: 1000px)  {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        padding-top: 100px;
        padding-bottom: 100px;
        @keyframes animation1 {
            0% {
                margin-bottom: -60px;
                margin-top: 60px;
            }
            100% {
                margin-bottom: 0px;
                margin-top: 0px;
            }
        }
    
        @keyframes animation2 {
            0% {
                margin-bottom: 0px;
                color: transparent;
                -webkit-text-stroke: 4px transparent;
            }
            100% {
                margin-bottom: 0px;
                color: #5078FF;
                -webkit-text-stroke: 4px #5078FF;
            }
        }
        @keyframes animation3 {
            0% {
                margin-top: -60px;
                color: transparent;
                -webkit-text-stroke: 4px transparent;
            }
            100% {
                margin-top: 0px;
                color: #7d9aff;
                -webkit-text-stroke: 4px #7d9aff;
            }
        }
        
        .NewTopicBox .LeftDivision .TextDivision #one {
            font-weight: 1000;
            animation-name: animation1;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #273C83;
            -webkit-text-stroke: 4px #273C83;
        }
        .NewTopicBox .LeftDivision .TextDivision #two {
            font-weight: 1000;
            trasition: 0.1s;
            animation-name: animation2;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #5078FF;
            -webkit-text-stroke: 4px #5078FF;
        }
        .NewTopicBox .LeftDivision .TextDivision #three {
            font-weight: 1000;
            trasition: 0.1s;
            animation-name: animation3;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #7d9aff;
            -webkit-text-stroke: 4px #7d9aff;
        }
        .notes {
            height: 244.22px; 
            width: 214.54px;
            transition: 0.1s;
            margin-left: -420px;
            margin-top: 0px;
            transform: rotate(15deg); 
            
        }
        .pencil {
            height: 164.77px;
            width: 111.36px;
            margin-left: 40px;
            margin-top: 21px;
            transition: 0.1s;
            transform: rotate(-15deg); 
        }
        
    } 
    `
    const NewTopicBox = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    flex-direction: row;
    align-self: center;
    padding-bottom: 24px;
    justify-content: center;
    align-items: center;
    @media only screen and ( max-width: 900px)  {
        flex-direction: column;
    }
    
    `
    const LeftDivision = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: auto;
    justify-content: space-between;
    .routeLink {
        text-decoration: none;
    }
    @media only screen and ( max-width: 900px)  {
        .routeLink {
            margin-bottom: -270px;
            align-self: center;
        }
    }
    
    `
    const TextDivision = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 100%;
    
    
    `
    const ImgContainer = styled.div`
    display: flex;
    
    height: 330px;
    width: 540px;
    padding-left: 120px;
    @media only screen and ( max-width: 900px)  {
        width:auto;
        height: auto;
        padding-left: 0;
        margin-top: -60px;
        margin-left: -50px;
    }
    
    `
    const Img = styled.img`
    display: flex;
    
    object-fit: contain;
    
    height: 270px;
    width: 480px;
    @media only screen and ( max-width: 900px)  {
        height: 245.45px;
        width: 436.36px;
        justify-self: center;
    }
    `
    const Title = styled.p`
    display: flex;
    font-size: 50px;
    letter-spacing: 5px;
    text-align: right;
    `
    const Text = styled.button`
    display: flex;
    align-items: center;
    padding: 12px;
    font-size: 21px;
    text-align: center;
    justify-content: center;
    color: #E7EDFF; 
    background-color: #273C83;
    border: 3px solid #273C83;
    width: 200px;
    border-radius: 3px;
    font-weight: 800;
    transition: 0.2s;
    :hover {
        color: #273C83;
        background-color: #E7EDFF;
        cursor: pointer;
        transition: 0.2s;

    }
    `
    return (

        <ContainBox>
            <NewTopicBox className="NewTopicBox">
                <LeftDivision className="LeftDivision">
                    <TextDivision className="TextDivision">
                        <Title id="one">{props.title}</Title>
                        <Title id="two">{props.title}</Title>
                        <Title id="three">{props.title}</Title>
                        
                    </TextDivision>
                    <Link className="routeLink" to="/timeline"><Text>{props.description}</Text></Link>
                </LeftDivision>
                <ImgContainer className="ImageContainer">
                    <Img src={require(`./image.png`)}></Img>
                    <Img className="notes" src={require(`./notes.png`)}></Img>
                    <Img className="pencil" src={require(`./pencil.png`)}></Img>
                </ImgContainer>
            </NewTopicBox>
        </ContainBox>
    );
}

export default NewTopic;
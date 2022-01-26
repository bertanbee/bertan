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
    background: rgb(39,60,131);
    background: linear-gradient(0deg, rgba(54, 85, 191, 1) 30%, rgba(80,120,255,1) 84%);
    @keyframes animation12 {
        0% {
            margin-bottom: -60px;
            margin-top: 60px;
        }
        100% {
            margin-bottom: 0px;
            margin-top: 0px;
        }
    }

    @keyframes animation22 {
        0% {
            margin-bottom: 0px;
            color: transparent;
            -webkit-text-stroke: 4px transparent;
        }
        100% {
            margin-bottom: 0px;
            color: #a5bbfb;
            -webkit-text-stroke: 4px #a5bbfb;
        }
    }
    @keyframes animation32 {
        0% {
            margin-top: -60px;
            color: transparent;
            -webkit-text-stroke: 4px transparent;
        }
        100% {
            margin-top: 0px;
            color: #5777da;
            -webkit-text-stroke: 4px #5777da;
        }
    }
    @keyframes animation42 {
        0% {
            margin-bottom: 0px;
            margin-top: 0px;
            
        }
        100% {
            margin-bottom: -60px;
            margin-top: 60px;
            
        }
    }

    @keyframes animation52 {
        0% {
            color: #a5bbfb;
            -webkit-text-stroke: 4px #a5bbfb;
        }
        100% {
            color: transparent;
            -webkit-text-stroke: 4px transparent;
        }
    }
    @keyframes animation62 {
        0% {
            margin-top: 0px;
            color: #5777da;
            -webkit-text-stroke: 4px #5777da;
        }
        100% {
            margin-top: -60px;
            color: transparent;
            -webkit-text-stroke: 4px transparent;
        }
    }
    :hover .NewTopicBox .LeftDivision .TextDivision #one2 {
        animation-name: animation12;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        
        
        
    }
    :hover .NewTopicBox .LeftDivision .TextDivision #two2 {
        animation-name: animation22;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        
        
    }
    :hover .NewTopicBox .LeftDivision .TextDivision #three2 {
        animation-name: animation32;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        
    } 
    .NewTopicBox .LeftDivision .TextDivision #one2 {
        font-weight: 1000;
        animation-name: animation42;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        color: #e7edff;
        -webkit-text-stroke: 4px #e7edff;
        
    }
    .NewTopicBox .LeftDivision .TextDivision #two2 {
        font-weight: 1000;
        trasition: 0.1s;
        animation-name: animation52;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        color: #a5bbfb;
        -webkit-text-stroke: 4px #a5bbfb;
    }
    .NewTopicBox .LeftDivision .TextDivision #three2 {
        font-weight: 1000;
        trasition: 0.1s;
        animation-name: animation62;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        color: #5777da;
        -webkit-text-stroke: 4px #5777da;
    }

    .graphic {
        height: 194.963px; 
        width: 213.37px;
        transition: 0.1s;
        margin-top: 0px;
        transform: rotate(15deg); 
        margin-top: 30px;
    }
    .gear {
        height: 219.263px;
        width: 247.68px;
        transition: 0.1s;
        transform: rotate(-15deg); 
        margin-left: -500px;
        margin-top: 30px;
    }
    :hover .gear {
        height: 265.309px;
        width: 299.684px;
        transition: 0.1s;
        margin-left: -540px;
        transform: rotate(0deg); 
        margin-top: 0px;
    }
    :hover .graphic {
        height: 284.9px; 
        width: 258.1777px;
        transition: 0.1s;
        transform: rotate(0deg); 
        margin-top: 0px;
    }
    }
    @media only screen and ( max-width: 1000px)  { display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        padding-top: 100px;
        padding-bottom: 100px;
        background: rgb(39,60,131);
        background: linear-gradient(0deg, rgba(54, 85, 191, 1) 30%, rgba(80,120,255,1) 84%);
        @keyframes animation12 {
            0% {
                margin-bottom: -60px;
                margin-top: 60px;
            }
            100% {
                margin-bottom: 0px;
                margin-top: 0px;
            }
        }
    
        @keyframes animation22 {
            0% {
                margin-bottom: 0px;
                color: transparent;
                -webkit-text-stroke: 4px transparent;
            }
            100% {
                margin-bottom: 0px;
                color: #a5bbfb;
                -webkit-text-stroke: 4px #a5bbfb;
            }
        }
        @keyframes animation32 {
            0% {
                margin-top: -60px;
                color: transparent;
                -webkit-text-stroke: 4px transparent;
            }
            100% {
                margin-top: 0px;
                color: #5777da;
                -webkit-text-stroke: 4px #5777da;
            }
        }
        
        
        .NewTopicBox .LeftDivision .TextDivision #one2 {
            font-weight: 1000;
            animation-name: animation12;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #e7edff;
            -webkit-text-stroke: 4px #e7edff;
            
        }
        .NewTopicBox .LeftDivision .TextDivision #two2 {
            font-weight: 1000;
            trasition: 0.1s;
            animation-name: animation22;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #a5bbfb;
            -webkit-text-stroke: 4px #a5bbfb;
        }
        .NewTopicBox .LeftDivision .TextDivision #three2 {
            font-weight: 1000;
            trasition: 0.1s;
            animation-name: animation32;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #5777da;
            -webkit-text-stroke: 4px #5777da;
        }
    
        .graphic {
            height: 161.126px; 
            width: 176.33px;
            transition: 0.1s;
            margin-top: 0px;
            transform: rotate(15deg); 
            margin-top: 30px;
        }
        .gear {
            height: 181.20px;
            width: 204.69px;
            transition: 0.1s;
            transform: rotate(-15deg); 
            margin-left: -430px;
            margin-top: 30px;
        }
    }
    `
    const NewTopicBox = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
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
    align-content: right;
    height: 250px;
    justify-content: space-between;
    .routeLink {
        text-decoration: none;
    }
    @media only screen and ( max-width: 900px)  {
        .routeLink {
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
    margin-right: -80px;
    height: 330px;
    width: 540px;
    padding-right: 120px;
    @media only screen and ( max-width: 900px)  {
        width:auto;
        height: auto;
        padding-left: 0;
        align-self: center;
        padding-bottom: 12px;
    }
    
    `
    const Img = styled.img`
    display: flex;
    
    object-fit: contain;
    
    @media only screen and ( max-width: 900px)  {
        height: 245.45px;
        width: 436.36px;
        justify-self: center;
    }
    `
    const Title = styled.p`
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
                <ImgContainer className="ImageContainer">
                    <Img height="270px" width="480px" src={require(`./image.png`)}></Img>
                    <Img className="gear" src={require(`./gear.png`)}></Img>
                    <Img className="graphic" src={require(`./graphic.png`)}></Img>
                </ImgContainer>
                <LeftDivision className="LeftDivision">
                    <TextDivision className="TextDivision">
                        <Title id="one2">{props.title}</Title>
                        <Title id="two2">{props.title}</Title>
                        <Title id="three2">{props.title}</Title>
                        
                    </TextDivision>
                    <Link className="routeLink" to="/perfil"><Text>{props.description}</Text></Link>
                </LeftDivision>
            </NewTopicBox>
        </ContainBox>
    );
}

export default NewTopic;
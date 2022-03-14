import styled from 'styled-components';

function NewTopic3 (props) {
    const ContainBox = styled.div`
    @media only screen and ( min-width: 1000px)  {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        padding-top: 100px;
        padding-bottom: 100px;
        
        :hover .NewTopic3Box .LeftDivision .TextDivision #one3 {
            animation-name: animation1;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            
            
            
        }
        :hover .NewTopic3Box .LeftDivision .TextDivision #two3 {
            animation-name: animation2;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            
            
        }
        :hover .NewTopic3Box .LeftDivision .TextDivision #three3 {
            animation-name: animation3;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            
        } 
        .NewTopic3Box .LeftDivision .TextDivision #one3 {
            font-weight: 1000;
            animation-name: animation4;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #273C83; 
            -webkit-text-stroke: 4px #273C83;
            
        }
        .NewTopic3Box .LeftDivision .TextDivision #two3 {
            font-weight: 1000;
            trasition: 0.1s;
            animation-name: animation5;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #5078FF;
            -webkit-text-stroke: 4px #5078FF;
        }
        .NewTopic3Box .LeftDivision .TextDivision #three3 {
            font-weight: 1000;
            trasition: 0.1s;
            animation-name: animation6;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #7d9aff;
            -webkit-text-stroke: 4px #7d9aff;
        }
        .bulb {
            height: 257.84px; 
            width: 237.51px;
            transition: 0.1s;
            margin-left: -500px;
            margin-top: 0px;
            transform: rotate(15deg); 
            
        }
        .palette {
            height: 183.77px;
            width: 224.61px;
            margin-left: 10px;
            margin-top: 30px;
            transition: 0.1s;
            transform: rotate(-15deg); 
        }
        :hover .palette {
            height: 202.147px;
            width: 247.071px;
            transition: 0.1s;
            margin-left: 50px;
            margin-top: 30px;
            transform: rotate(0deg); 
        }
        :hover .bulb {
            height: 332.38px; 
            width: 283.2px;
            margin-left: -560px;
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
        
        .NewTopic3Box .LeftDivision .TextDivision #one3 {
            font-weight: 1000;
            animation-name: animation1;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #273C83; 
            -webkit-text-stroke: 4px #273C83;
            
        }
        .NewTopic3Box .LeftDivision .TextDivision #two3 {
            font-weight: 1000;
            trasition: 0.1s;
            animation-name: animation2;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #5078FF;
            -webkit-text-stroke: 4px #5078FF;
        }
        .NewTopic3Box .LeftDivision .TextDivision #three3 {
            font-weight: 1000;
            trasition: 0.1s;
            animation-name: animation3;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            color: #7d9aff;
            -webkit-text-stroke: 4px #7d9aff;
        }
        .bulb {
            height: 213.09px; 
            width: 196.29px;
            transition: 0.1s;
            margin-left: -440px;
            margin-bottom: -20px;
            margin-top: 0px;
            transform: rotate(15deg); 
            
        }
        .palette {
            height: 151;87px;
            width: 185.62px;
            margin-left: 10px;
            margin-top: 0px;
            transition: 0.1s;
            transform: rotate(-15deg); 
        }
    }
    
    `
    const NewTopic3Box = styled.div`
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
    const ImgContainer = styled.div`
    display: flex;
    height: 330px;
    width: 540px;
    padding-left: 120px;
    @media only screen and ( max-width: 900px)  {
        width:auto;
        height: auto;
        margin-left: -140px;
        align-self: center;
        padding-bottom: 12px;
        margin-top: -70px;
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
    return (

        <ContainBox>
            <NewTopic3Box className="NewTopic3Box">
                <LeftDivision className="LeftDivision">
                    <TextDivision className="TextDivision">
                        <Title id="one3">{props.title}</Title>
                        <Title id="two3">{props.title}</Title>
                        <Title id="three3">{props.title}</Title>
                        
                    </TextDivision>
                    <a target='_blank' rel='noreferrer' href='https://github.com/bertanbee'><Text>{props.description}</Text></a>
                </LeftDivision>
                <ImgContainer className="ImageContainer">
                    <Img height="270px" width="480px" src={require(`./image.png`)}></Img>
                    <Img className="bulb" src={require(`./bulb.png`)}></Img>
                    <Img className="palette" src={require(`./palette.png`)}></Img>
                </ImgContainer>
            </NewTopic3Box>
        </ContainBox>
    );
}

export default NewTopic3;
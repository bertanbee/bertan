import styled from 'styled-components';

function  OwnerCard () {
    const OwnerCard = styled.div`
    display: flex;
    flex-direction: row;
    height: 400px;
    width: 300px;
    justify-content: center;
    `
    const ImageCard = styled.img`
    display:flex;
    height: 400px;
    width: 239px;
    margin-top: -20.6px;
    
    `
    const ProfilePicture = styled.img`
    display:flex;
    height: 145px;
    width: 145px;
    border-radius: 100%;
    margin-left: -192px;
    `
    const LevelBackground = styled.img`
    height: 60px;
    width: 60px;
    margin-left: -50px;
    margin-top: -15px;
    `
    const LevelNumber = styled.p`
    margin-left: -43px;
    font-weight: 900;
    font-size: 25px;
    color: #FFDEAC;
    paddig: 3px;
    margin-top: 3px;
    transition: 0.1s;
    text-align: left;
    p {
        height: 0;
        width: 0;
        font-size: 0;
        margin-left: -4px;
        margin-top: -3px;
        transition: 0.1s;
    }
    :hover p {
        height: 10px;
        width: 10px;
        font-size: 15px;
        margin-top: -4px;
        transition: 0.1s;
    }
    :hover {
        margin-top: 0px;
        cursor: default;
        transition: 0.1s;
    }
    `
    const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    
    
    
    margin-left: -160px;
    margin-top: 150px;
    `
    const InfoNanoBox = styled.div`
    display: flex;
    flex-direction: row;
    height: 39px;
    
    
    .Name {
        margin-top: 10px;
        transition: 0.1s;
        color: rgb(30, 30, 30);
    }
    :hover .Name {
        margin-top: 0;
        transition: 0.1s;
        color: rgb(230, 230, 230);
        cursor: default;
    }
    .TitleInfo {
        font-size: 0;
        transition: 0.1s;
    }
    :hover .TitleInfo  {
        font-size: 15px;
        transition: 0.1s;
        cursor: default;
    }
    `
    const TitleInfo = styled.p`
    font-weight: 900;
    color: rgb(30, 30, 30);
    text-align: left;
    `
    const Name = styled.p`
    font-weight: 900;
    text-align: left;
    margin-left: -2px;
    `
    const TextNanoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2px;
    margin-bottom: 5px;
    text-align: left;
    `
    const IconOcup = styled.img`
    height: 35px;
    width: 35px;
    
    `
    const BadgeBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 3px;
    height:33px;
    
    `
    const BadgeNanoBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 30px;
    width: 30px;
    :hover {
        cursor: default;
    }
    :hover .BadgeInfo {
        height: 26px;
        width: 100px;
        font-size: 17px;
        transition: 0.1s;
        color: rgb(240, 240, 240);
    }
    `
    const Badge = styled.img`
    height: 30px;
    width: 30px;
    `
    const BadgeInfo = styled.div`
    display: flex;
    height: 0px;
    width: 0px;
    text-align: center;
    font-size: 0px;
    align-items: center;
    justify-content: center;
    margin-top: -60px;
    margin-left: 12px;
    transition: 0.1s;
    border: solid rgb(40, 40, 40) 1px;
    border-radius: 40px;
    `
    return (
        <OwnerCard>
                    <ImageCard src={require("./card.png")}></ImageCard>
                    <ProfilePicture src={require("./photo.jpg")}></ProfilePicture>
                    
                    <LevelBackground src={require("./level.png")}></LevelBackground>
                    <LevelNumber><p style={{color: "#FFCD82"}} >Level</p>17</LevelNumber>
                    <InfoBox> 
                        <InfoNanoBox>
                            <IconOcup src={require("./name.png")}></IconOcup>
                            <TextNanoBox>
                                <TitleInfo className="TitleInfo">Nome: </TitleInfo>
                                <Name className="Name">Lucas S. Bertan</Name>
                            </TextNanoBox>
                        </InfoNanoBox>

                        <InfoNanoBox>
                            <IconOcup src={require("./occupation.png")}></IconOcup>
                            <TextNanoBox>
                                <TitleInfo className="TitleInfo">Profissão: </TitleInfo>
                                <Name className="Name">Programador</Name>
                            </TextNanoBox>
                        </InfoNanoBox>

                        <InfoNanoBox style={{marginLeft: "3px" }}>
                            <IconOcup src={require("./guilda.png")}></IconOcup>
                            <TextNanoBox>
                                <TitleInfo className="TitleInfo">Guilda: </TitleInfo>
                                <Name className="Name">Campinas/SP</Name>
                            </TextNanoBox>
                        </InfoNanoBox>


                        <BadgeBox style={{width: "84%", alignSelf:"center"}}>
                            <BadgeNanoBox>
                                <Badge alt="React" src={require('./react.png')}></Badge>
                                <BadgeInfo style={{backgroundImage: `url(${require("./frame.png")})`, backgroundSize: "cover"}} className="BadgeInfo"><p>React</p></BadgeInfo>
                            </BadgeNanoBox>
                            <BadgeNanoBox>
                                <Badge src={require('./css.png')}></Badge>
                                <BadgeInfo style={{backgroundImage: `url(${require("./frame.png")})`, backgroundSize: "cover"}} className="BadgeInfo"><p>CSS</p></BadgeInfo>
                            </BadgeNanoBox>
                            <BadgeNanoBox>
                                <Badge src={require('./react.png')}></Badge>
                                <BadgeInfo style={{marginLeft:"-30px", backgroundImage: `url(${require("./frame.png")})`, backgroundSize: "cover"}} className="BadgeInfo"><p>React Native</p></BadgeInfo>
                            </BadgeNanoBox>  
                        </BadgeBox>
                        
                        <BadgeBox style={{width: "60%", alignSelf:"center"}}>
                            <BadgeNanoBox>
                                <Badge src={require('./js.png')}></Badge>
                                <BadgeInfo style={{backgroundImage: `url(${require("./frame.png")})`, backgroundSize: "cover"}} className="BadgeInfo"><p>JavaScript</p></BadgeInfo>
                            </BadgeNanoBox>
                            <BadgeNanoBox>
                                <Badge src={require('./python.png')}></Badge>
                                <BadgeInfo style={{marginLeft:"-12px", backgroundImage: `url(${require("./frame.png")})`, backgroundSize: "cover"}} className="BadgeInfo"><p>Python</p></BadgeInfo>
                            </BadgeNanoBox>
                            
                            
                        </BadgeBox>
                    </InfoBox>
                    
                </OwnerCard>
    );
}

export default OwnerCard;
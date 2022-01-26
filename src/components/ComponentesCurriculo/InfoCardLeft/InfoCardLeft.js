import styled from  'styled-components';

export default function InfoCardLeft (props) {
    const InfoCardLeftBox = styled.div`
    @media only screen and ( max-width: 1000px)  {
        width: 90%;
        
    } 
    @keyframes curriculoleft {
        0% {
            margin-left: -240px;
            opacity: 0;
        }
        100% {
            margin-left: 0px;
            opacity: 1;
        }
    }
    margin-right: 0px;
    :hover {
        margin-right: 60px;
        transition: 0.25s;
    }

    display: flex;
    flex-direction: row;
    width: 70%;
    
    margin-top: 30px;
    background: rgb(39,60,131);
    background: linear-gradient(20deg, rgba(54, 85, 191, 1) 30%, rgba(80,120,255,1) 84%);
    
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    
    
    transition: 0.25s;
    height: auto;
    .routeLink2 {
        text-decoration: none;
        justify-self: center;
        align-self: center;
    }
    :hover .text {
        padding: 12px;
        font-size: 12px;
        width: 200px;
        opacity: 1;
        margin: 12px;
    }
   .text {
        display: flex;
        margin: 0px;
        align-items: center;
        opacity: 0;
        padding: 0px;
        font-size: 0px;
        width: 0px;
        text-align: center;
        justify-content: center;
        color: #E7EDFF; 
        background-color: #273C83;
        border: 3px solid #273C83;
        border-radius: 3px;
        font-weight: 800;
        transition: 0.2s;
        
        :hover {
            color: #273C83;
            background-color: #E7EDFF;
            background-color: transparent;
            cursor: pointer;
            transition: 0.2s;
        }
    }
    .Date {
        transition: 0.25s;
        height: inherit;
        width: 120px;
        background-color: #f7faff;
    }
    :hover .Date  {
        height: inherit;
        transition: 0.25s;
    }
    .moreinfo {
        transition: 0.1s;
        text-align: center;
        font-size: 0;
        width: 100%;
        align-self: right;
    }
    :hover .moreinfo {
        transition: 0.1s;
        height: 100%;
        font-size: 21px;
    }
    @media only screen and ( max-width: 1000px)  {
        width: 90%;
    }  
    @media only screen and ( max-width: 700px)  {
        width: 90%;
        .Date {
            width: 60px;
        }
        .moreinfo {
            width: 90%;
        }
        margin-right: 0px;
        :hover {
            margin-right: 0px;
        }
        :hover .text {
            padding: 9px;
            font-size: 12px;
            width: 150px;
            opacity: 1;
            margin: 6px;
    }
    `
    const Date = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .year {
        color: rgb(33, 33, 33);
        letter-spacing: 2px;
        font-size: 21px;
    }
    .subyear {
        color: rgb(99, 99, 99);
        letter-spacing: 2px;
        font-size: 15px;
    }
    @media only screen and ( max-width: 700px)  {
        .subyear {
            font-size: 0px;
        }
        .year {
            font-size: 18px;
        }
    }  
    `
    const RightInformation = styled.div`
    display: flex;
    flex-direction: column;
    width: 84%;
    align-items: center;
    margin-right: -20%;
    @media only screen and ( max-width: 700px)  {
        width: 100%;
        margin-right: 0;
        .recognize {
            display: none;
        }
    }  
    `
    const Title = styled.p`
    color: rgb(33, 33, 33);
    letter-spacing: 5px;
    font-size: 30px;
    padding-top: 30px;
    @media only screen and ( max-width: 700px)  {
        font-size:21px;
        text-align: center;
    }  
    `
    const PrizeDescription = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    color: rgb(54, 54, 54);
    padding-bottom: 30px;
    .gerador {
        padding-left: 3px;
        color: rgb(33, 33, 33);
    }
    @media only screen and ( max-width: 700px)  {
        width: 100%;
        margin-right: 0;
    }  
    `
    const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding-right: 30px;
    `
    
    return (
        <InfoCardLeftBox>
            
            <Date className="Date">
                <p className="year">{props.ano}</p>
                <p className="subyear">{props.mes}</p>
            </Date>
            
            <RightInformation>
                <Title className="title">{props.premio}</Title>
                <PrizeDescription><p className="recognize">Reconhecido por</p> <p className="gerador">{props.quem}</p></PrizeDescription>
                
                <div className="moreinfo">
                    <Links>
                    <a className="routeLink2" target="_blank" href={props.link1href}><button className="text">{props.link1}</button></a>
                    </Links>
                    
                </div>
            </RightInformation>
            
        </InfoCardLeftBox>
    );
}
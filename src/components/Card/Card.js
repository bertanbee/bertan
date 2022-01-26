import styled from 'styled-components';

import { FaGithub, FaInstagram, FaDiscord, FaReact, FaPython, FaJs, FaCss3Alt, FaUnity } from 'react-icons/fa';
import { SiCsharp,SiBlender } from 'react-icons/si'

export default function Card () {
    const CardBox = styled.div`
    @keyframes cardbox {
        0% {
            margin-left: -120px;
            opacity: 0;
        }
        100% {
            margin-left: 0px;
            opacity: 1;
        }
    }
    animation-name: cardbox;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    transition: 0.25s;
    margin-left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 45px;
    border-radius: 10px;
    background: rgb(39,60,131);
    background: linear-gradient(340deg, rgba(54, 85, 191, 1) 30%, rgba(80,120,255,1) 84%);
    width: 62.4%;
    align-self: center;
    margin-top: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    @media only screen and ( max-width: 1200px)  {
        flex-direction: column;
        width: 80%;
    }
    @media only screen and ( max-width: 700px)  {
        width: 70%;
    }  
    #informationDIV {
        width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media only screen and ( max-width: 1200px)  {
            flex-direction: column;
            width: 90%;
            align-self: center;
            padding-top: 30px;
        }
    }
    #location {
        color: #1a2b63;
        transition: 0.1s;
        :hover {
            color: #253a80;
            transition: 0.1s;
        }
    }
    .noStyleAnchor {
        text-decoration: none;
  color: inherit;
  outline: 0;

    }
    .iconlattes {
        height: 22px;
        width: 22px;
        opacity: 0.6;
        transition: 0.1s;
        fill: #000e47;
        :hover {
            opacity: 0.15;
            cursor: pointer;
            transition: 0.1s;
        }
 
    }
    `
    const ProfileImg = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `
   const NewDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   `
   const Division = styled.div`
   height: 100px;
   width: 1px;
   background-color: rgb(240, 240, 240);
   border-radius: 100%;
   align-self:center;
   @media only screen and ( max-width: 1200px)  {
    display: none;
}
   `
   const SocialMediaDiv = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   width: 90%;
   justify-self: center;
   padding: 12px;
   @media only screen and ( max-width: 1200px)  {
       width: 21%;
   }    
   @media only screen and ( max-width: 700px)  {
    width: 36%;
}  
   .icon {
       height: 21px;
       width: 21px;
       fill: #1a2b63;
       transition: 0.1s;
       :hover {
           fill: rgba(54, 85, 191, 1);
           cursor: pointer;
           transition: 0.1s;
       }
   }
   #copytoclipboard {
       font-size: 0;
   }
   #discordcopy {
       background: none;
       border: none;

   }
   
   `
   const BadgesDiv = styled.div`
   display: flex;
   flex-direction: column;
   padding: 12px;
   justify-self: center;
   width: 100%;
   @media only screen and ( max-width: 1200px)  {
    width: 21%;
}  
@media only screen and ( max-width: 700px)  {
    width: 36%;
}  
   `
   const MiniBadgeDiv = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 100%;
   padding-bottom: 12px;
   .iconbadge {
       height: 30px;
       width: 30px;
       opacity: 1;
       transition: 0.1s;
       fill: #000e47;
       :hover {
           opacity: 0.5;
           cursor: pointer;
           transition: 0.1s;
       }

   }
   `
   const Quote = styled.img`
   height: 45px;
   width: 45px;
   padding: 15px;
   @media only screen and ( max-width: 700px)  {
       height: 40px;
       width: 40px;
   } 
   `
   const QuoteText = styled.p`
   width: 80%;
   text-align: center;
   color: #101936;
   font-size: 21px;
   @media only screen and ( max-width: 700px)  {
    font-size: 17px;
   } 
   `

   function handleCopyTextFromParagraph() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#copytoclipboard');
    cb.writeText(paragraph.innerText).then(() => alert('O nome de usuário node#7563 foi copiado!'));
  }

    return (
        <CardBox>
            <NewDiv>
                <ProfileImg alt="Lucas' photo"src={require("./photo.jpg")}></ProfileImg>
                <SocialMediaDiv>
                    <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://github.com/bertanbee/"><FaGithub className="icon"></FaGithub></a>
                    <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://www.instagram.com/lucassbertan/"><FaInstagram className="icon"></FaInstagram></a>
                    <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="http://lattes.cnpq.br/6724167976039252"><img alt="curriculo-latter-logo" src={require("./lattes.png")} className="iconlattes"></img></a>
                    <div>
                        <p id="copytoclipboard">node#7563</p>
                        <button onClick={handleCopyTextFromParagraph} id="discordcopy" rel="noreferrer" target="_blank" ><FaDiscord className="icon"></FaDiscord></button>
                        
                    </div>
                    
                </SocialMediaDiv>
                <BadgesDiv>
                    <MiniBadgeDiv>
                        <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://www.python.org/"><FaPython className="iconbadge"></FaPython></a>
                        <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://www.javascript.com/"><FaJs className="iconbadge"></FaJs></a>
                        <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://pt.wikipedia.org/wiki/CSS3"><FaCss3Alt className="iconbadge"></FaCss3Alt></a>
                    </MiniBadgeDiv>
                    <MiniBadgeDiv>
                        <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://threejs.org/"><img alt="three-js-logo" src={require("./threejs.png")} className="iconbadge"></img></a>
                        <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://reactjs.org/"><FaReact className="iconbadge"></FaReact></a>
                        <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://reactnative.dev/"><FaReact className="iconbadge"></FaReact></a>
                    </MiniBadgeDiv>
                    <MiniBadgeDiv>
                        <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://docs.microsoft.com/en-us/dotnet/csharp/"><SiCsharp className="iconbadge"></SiCsharp></a>
                        <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://unity.com/"><FaUnity className="iconbadge"></FaUnity></a>
                        <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://www.blender.org/"><SiBlender className="iconbadge"></SiBlender></a>
                    </MiniBadgeDiv>
                    
                </BadgesDiv>
            </NewDiv>
            <Division></Division>
            <NewDiv id="informationDIV">
                <h1 style={{color: "#101936", textAlign: "center"}}>Lucas Suzin Bertan</h1>
                <div style={{ display: "flex", flexDirection: "row", alignItems:"center"}}>
                    <a className="noStyleAnchor" target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Campinas+-+State+of+S%C3%A3o+Paulo/@-22.8951606,-47.1711223,11z/data=!3m1!4b1!4m5!3m4!1s0x94c8c8f6a2552649:0x7475001c58043536!8m2!3d-22.9050824!4d-47.0613327"><h3 id="location">Campinas, São Paulo</h3></a>
                    <img alt="brazilian-flag" src={require("./flag.png")} style={{height:"20px", width:"30px", padding:"6px"}}></img>
                </div>
                <br></br>
                <br></br>
                <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "left"}}>
                    <Quote src={require("./quoteright.png")}></Quote>
                </div>
                <QuoteText>Apesar de não ter escrito nenhuma linha de código, o antigo curso de informática básica me fez perceber que a minha engenhosidade podia ser canalizada pelos computadores. Assim, após me mudar do interior da Região Sul, as oportunidades acadêmicas paulistas tornaram-se o escopo para transformar esse ideal em ação.</QuoteText>
                <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "right"}}>
                    <Quote src={require("./quoteleft.png")}></Quote>
                </div>
            </NewDiv>
            
            
        </CardBox>

    );
}
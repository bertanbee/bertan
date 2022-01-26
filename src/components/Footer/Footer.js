import { FaGithub, FaInstagram, FaDiscord, FaReact, FaPython, FaJs, FaCss3Alt, FaUnity, FaHome, FaPaperclip, FaUser, FaCamera } from 'react-icons/fa';
import { SiCsharp,SiBlender } from 'react-icons/si'

import { Link } from 'react-router-dom';

import styled from 'styled-components';

export default function Footer () {
    const FooterBox = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    `
    const Division = styled.div`
    height: 300px;
    width: 2px;
    background-color: #fff;
    `
    const LeftCard = styled.div`
    `
    
    const CardBox = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 45px;
    @media only screen and ( max-width: 700px)  {
        padding: 21px;
    } 
    #informationDIV {
        width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
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
   const SocialMediaDiv = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   width: 90%;
   justify-self: center;
   padding: 12px;
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

    function handleCopyTextFromParagraph() {
        const cb = navigator.clipboard;
        const paragraph = document.querySelector('#copytoclipboard');
        cb.writeText(paragraph.innerText).then(() => alert('O nome de usuário node#7563 foi copiado!'));
    }

    const RightContentLinks = styled.div`
    display: flex;
    flex-direction: column;
    .NavigationLinks {
        color: rgb(30, 30, 30);
        padding: 12px;
        text-decoration: none;
        fontSize: 17px;
        transition: 0.2s;
        
    }
    .NavigationLinks:hover {
        color: rgb(60,60,60);
        transition: 0.2s;
    }
    width: 36%;
    @media only screen and ( max-width: 700px)  {
        padding-right: 45px;
    } 
    `
    const NavegationTitle = styled.p`
    letter-spacing: 3px;
    font-weight: 800;
    font-size: 21px;
    color: rgb(20, 20, 20);
    padding-bottom: 12px;
    @media only screen and ( max-width: 700px)  {
        font-size: 18px;
    } 
    `
    const FooterBiggerBox = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(39,60,131);
    background: linear-gradient(0deg, rgba(54, 85, 191, 1) 30%, rgba(80,120,255,1) 84%);
    margin-top: 60px;
    `
    const CopyrightDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 6px; 
    align-items: center;
    @media only screen and ( max-width: 700px)  {
        flex-direction: column;
        align-items: center;
        text-align: center;
    } 
    `

    return (
        <FooterBiggerBox>
        <FooterBox>
            <RightContentLinks>
                <NavegationTitle>NAVEGAÇÃO</NavegationTitle>
                <Link className="NavigationLinks"  to="/"><FaHome style={{ marginBottom: "-2px" }}></FaHome> Início</Link>
                <Link className="NavigationLinks" to="/curriculo"><FaPaperclip style={{ marginBottom: "-2px" }}></FaPaperclip> Currículo</Link>
                <Link className="NavigationLinks" to="/perfil"><FaUser style={{ marginBottom: "-2px" }}></FaUser> Perfil</Link>
                <Link className="NavigationLinks" to="/bastidores"><FaCamera style={{ marginBottom: "-2px" }}></FaCamera> Bastidores</Link>
            </RightContentLinks>
            <Division></Division>
            <LeftCard>
            <CardBox>
            <NewDiv>
                <ProfileImg alt="Lucas' photo"src={require("../Card/photo.jpg")}></ProfileImg>
                <SocialMediaDiv>
                    <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://github.com/bertanbee/"><FaGithub className="icon"></FaGithub></a>
                    <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://www.instagram.com/lucassbertan/"><FaInstagram className="icon"></FaInstagram></a>
                    <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="http://lattes.cnpq.br/6724167976039252"><img alt="curriculo-latter-logo" src={require("./../Card/lattes.png")} className="iconlattes"></img></a>
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
                        <a rel="noreferrer" className="noStyleAnchor" target="_blank" href="https://threejs.org/"><img alt="three-js-logo" src={require("../Card/threejs.png")} className="iconbadge"></img></a>
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
        </CardBox>
            </LeftCard>
            

        </FooterBox>
        <CopyrightDiv >
            <a rel="license" style={{paddingRight: "6px"}} href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style={{borderWidth:0, paddingRight: "3px"}} src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a style={{ paddingLeft: "6px", color: "rgb(20, 20, 20)" }} rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>
        </CopyrightDiv>
        
        </FooterBiggerBox>
    );
}

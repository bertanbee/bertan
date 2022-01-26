import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import LanguageComp from '../components/LanguageComp/LanguageComp';
import Interests from '../components/Interests/Interests';
import Seven from '../components/Seven/Seven';
import Footer from "../components/Footer/Footer";

import styled from 'styled-components';

import { useEffect } from 'react'

export default function Perfil () {
    const PerfilBox = styled.div`
    display: flex;
    flex-direction: column;
    
    `
    const ProjetosTitle = styled.p`
    color: rgb(30, 30, 30);
    text-align: center;
    padding-top: 45px;
    padding-bottom: 15px;
    font-weight: 800;
    font-size: 27px;
    letter-spacing: 3px;
    `
    const DownDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media only screen and ( max-width: 1000px)  {
        width: 90%;
        flex-direction: column;
        align-items: center;
        align-self: center;
    }  
    `
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <PerfilBox>
            <Header></Header>
            <Card></Card>
            <DownDiv>
                <LanguageComp></LanguageComp>
                <Interests></Interests>
            </DownDiv>
            <ProjetosTitle>PROJETOS</ProjetosTitle>
            <Seven></Seven>
            <Footer></Footer>
        </PerfilBox>
    );
}
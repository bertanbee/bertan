import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header () {
    const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    height: 75px;
    background-color: #5078FF;
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: 0.1s;
    width: 100%;
    :hover {
        background-color: rgba(54, 85, 191, 1);
        transition: 0.1s;
    }
    .logo {
        fill: #E7EDFF;
        stroke: #E7EDFF;
        transition: 0.1s;
    }
    .logo:hover {
        fill: #d0d0d0;
        stroke: #d0d0d0;
        transition: 0.1s;
        cursor: pointer;
    }
    .routeLink {
        text-decoration: none;
    }
    `
    const Selection = styled.a`
    font-weight: 800;
    letter-spacing: 3px;
    color: #E7EDFF;
    transition: 0.1s;
    border: 3px transparent solid;
    padding: 3px;
    text-decoration: none;
    :hover {
        color: #d0d0d0;
        transition: 0.1s;
        border-bottom: 3px #d0d0d0 solid;
        border-radius: 4px;
        cursor: pointer;
    }
    `
    return (
        <HeaderBox>
            <Link className="routeLink" to="/bastidores">
                <svg width="42" height="42" viewBox="0 0 902 902" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="logo" d="M1 1V901H53.3073C52.1837 427 439.684 399 451 901H901V1H849.817C838.5 503 451 475 452.124 1H1Z" />
                </svg>
            </Link>
            <Link className="routeLink" to="/"><Selection>INÍCIO</Selection></Link>
            <Link className="routeLink" to="/curriculo"><Selection>CURRÍCULO</Selection></Link>
            <Link className="routeLink" to="/perfil"><Selection>PERFIL</Selection></Link>
            
        </HeaderBox>
    );
}

export default Header;
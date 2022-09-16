import styled, { keyframes } from "styled-components";
import imglogo from "../assets/imglogo.png"
import { BsCart4 } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const rotate = keyframes`
    0% {filter: hue-rotate(0deg);}
    100% {filter: hue-rotate(360deg);}
`
export default function Header() {

    const navigate = useNavigate()
    return (

        <HeaderO>
            <HeaderP1>

                <HeaderP2>
                    <LogoBody>
                        <Logo src={imglogo}></Logo>
                    </LogoBody>

                    <PrincipalText>Vaquinha Store</PrincipalText>
                </HeaderP2>


                <IconBody>
                    <IconContext.Provider value={{ color: 'pink', size: '35px' }}>
                        <AiOutlineHome onClick={() => navigate("/home")}></AiOutlineHome>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: 'pink', size: '35px' }}>
                        <BsCart4 onClick={() => navigate("/carrinho")}></BsCart4>
                    </IconContext.Provider>
                </IconBody>
            </HeaderP1>


            <RGBline>
                <Line />
                <span />
            </RGBline>
        </HeaderO>

    )
}



const HeaderO = styled.div`
    background-color: black;
    position: fixed; 
    top: 0; 
    width: 100%;
    z-index: 999;
`

const HeaderP1 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const HeaderP2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const IconBody = styled.div`
    animation: ${rotate} 1.5s linear infinite;
    display: flex;
    width: 100px;
    justify-content: space-between;
`

/* Logo  */

const LogoBody = styled.div`
    height: 75px;
    width: 100px;
`
const Logo = styled.img`
    width: 100%;
    height: 100%;
    color: inherit;
`
const PrincipalText = styled.p`
    color: white;
    font-family: 'Rubik Moonrocks', cursive;
    font-size: 16px;
`

/* Line  */

const RGBline = styled.div`
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    animation: ${rotate} 1.5s linear infinite;
    height: 3px;
    width: 100vw;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: relative;

    & > span:nth-child(2) {
        height: 100%;
        width: 15000vw;
        background: inherit;
        filter: blur(4px);
        border-radius: 5px;
    }
`

const Line = styled.div`
    height: 2px;
    width: 100vw;
    color: black;
`


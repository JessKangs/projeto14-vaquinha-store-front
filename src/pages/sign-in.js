import styled, { keyframes } from "styled-components";
import imglogo from "../assets/imglogo.png"
import { useNavigate } from "react-router-dom";

const rotate = keyframes`
    0% {filter: hue-rotate(0deg);}
    100% {filter: hue-rotate(360deg);}
`
export default function SignIn() {
    const navigate = useNavigate()

    return (
        <Body>
            <LogoBody>
                <Logo src={imglogo}></Logo>
            </LogoBody>

            <PrincipalText>Vaquinha Store</PrincipalText>

            <RGBInput>
                <Inputs placeholder="Usuário" />
                <span></span>
            </RGBInput>

            <RGBInput>
                <Inputs type="password" placeholder="Senha" />
                <span></span>
            </RGBInput>

            <CenterButton>
                <Rgbbutton>
                    <Button >
                        <Gradienttext onClick={() => navigate("/home") }>
                            Login
                        </Gradienttext>
                    </Button>
                    <span></span>
                </Rgbbutton>
            </CenterButton>

            <SignUptext onClick={() => { navigate("/cadastro") }}>Não possui conta?! Cadastre-se agora!</SignUptext>

          
        </Body>
    )
}

const Body = styled.div`
    background-color: black;
    color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 997;
`
/* Logo  */

const LogoBody = styled.div`
    height: 150px;
    width: 200px;
`
const Logo = styled.img`
    width: 100%;
    height: 100%;
    color: inherit;
`
const PrincipalText = styled.p`
    color: white;
    font-family: 'Rubik Moonrocks', cursive;
    font-size: 25px;
    margin-bottom: 25px;
`

/* Input  */

const RGBInput = styled.div`
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    animation: ${rotate} 1.5s linear infinite;
    height: 30px;
    width: 53vw;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: relative;

    & > span:nth-child(2) {
        height: 100%;
        width: 100%;
        background: inherit;
        filter: blur(4px);
        border-radius: 5px;
    }
`

const Inputs = styled.input`
background-color: black;
border-radius: 5px;
padding-left: 10px;
height: 25px;
width: 50vw;
position: absolute;
z-index: 999;

    &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    opacity: 1;
    color: Gray;
}


`

/*Button*/

const CenterButton = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`

const Rgbbutton = styled.div`
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    animation: ${rotate} 1.5s linear infinite;
    height: 35px;
    width: 115px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: relative;

    & > span:nth-child(2) {
        height: 100%;
        width: 100%;
        background: inherit;
        filter: blur(4px);
        border-radius: 5px;
    }

`

const Button = styled.button`
    cursor: pointer;
    background-color: black;
    height: 30px;
    width: 110px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 999;
`

const Gradienttext = styled.p`
    background-image: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    animation: ${rotate} 1.5s linear infinite;
    background-clip: text;
    color: transparent;
`


/* Sign up */

const SignUptext = styled.p`
    color: white;
    margin-top: 60px;
    font-size: 12px;
    font-style: italic;
    cursor: pointer;
`
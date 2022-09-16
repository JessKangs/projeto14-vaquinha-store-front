import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {filter: hue-rotate(0deg);}
    100% {filter: hue-rotate(360deg);}
`

export default function Footer() {

    return (
        <FooterO>
            <RGBline>
                <Line />
                <span />
            </RGBline>
            <div><p>Total: R$ <span>99.99</span></p></div>

            <Rgbbutton>
                <Button >
                    <Gradienttext>
                        Finalizar compra!
                    </Gradienttext>
                </Button>
                <span></span>
            </Rgbbutton>

        </FooterO>


    )
}

const FooterO = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    left: 0;
    bottom: 0;
    width: 100vw;
    z-index: 999;
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
    margin-bottom: 10px;

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

const RGBline = styled.div`
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    animation: ${rotate} 1.5s linear infinite;
    height: 3px;
    width: 100vw;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 20px;

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

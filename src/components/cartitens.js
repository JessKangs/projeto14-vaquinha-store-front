import axios from "axios";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import imglogo from "../assets/imglogo.png"

const rotate = keyframes`
    0% {filter: hue-rotate(0deg);}
    100% {filter: hue-rotate(360deg);}
`

export default function Caritens({price, title, image, description}) {

    return (
            <Rgbborder>
                <ItemZone>
                    <ZonePart1>
                        <ImageBody>
                            <Imgitem src={image} />
                        </ImageBody>
                    </ZonePart1>

                    <ZonePart2>
                        <Itemname>{title}</Itemname>

                        <Itemprice>R$ <span>{price}</span></Itemprice>
                    </ZonePart2>
                </ItemZone>
                <span></span>
            </Rgbborder>
    )
}

/* item body */

const Rgbborder = styled.div`
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    background-color: white;
    /* animation: ${rotate} 1.5s linear infinite; */
    height: 280px;
    width: 250px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 25px;

    & > span:nth-child(2) {
        height: 100%;
        width: 100%;
        background: inherit;
        filter: blur(3px);
        border-radius: 5px;
    }
`

const ItemZone = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0e0c0c; //#231f1f;
    height: 278px;
    width: 99%;
    position: absolute;
    z-index: 1;
    border-radius: 5px;
`

const ZonePart1 = styled.div`
    margin-right: 20px;
    margin-left: 20px;
`

const ZonePart2 = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-top: 25px;
`

/* item img */

const ImageBody = styled.div`
    height: 120px;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Imgitem = styled.img`
    border-radius: 8px;
    width: 90%;
    height: 100%;
    color: inherit;
    margin-top: 20px;
`
/* text */

const Itemname = styled.p`
    margin: 5px 0 5px 0;
    font-family: 'Raleway', sans-serif;
    width: 260px;
    text-align: center;
    font-size: 17px;

`

const Itemprice = styled.p`
    margin-top: 5px;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
`
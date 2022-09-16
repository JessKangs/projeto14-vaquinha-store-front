import Cartitens from "../components/cartitens";
import Header from "../components/header";
import Footer from "../components/footer";

import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { BsChevronCompactLeft } from "react-icons/bs";

export default function Cart() {
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        const response = axios.get('http://localhost:5000/cart')
    
        response.then(res => 
            setCartData(res.data)
        )
    }, [])

    return (
        <BodyP>
            <Header />
            <Buyzone>
                {cartData.map((value) => 
                <Cartitens 
                price={value.productData.price} 
                title={value.productData.title} 
                description={value.productData.description} 
                image={value.productData.image} 
                />)}

            </Buyzone>

            <Footer/>
        </BodyP>
    )
}

const BodyP = styled.div`
    background-color: black;
    color: white;
    height: 100vh;
    width: 100vw;

    overflow: auto;
`

const Buyzone = styled.div`
    padding-top: 150px;
    color: white;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: auto;
`

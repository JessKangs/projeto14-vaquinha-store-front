import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from "styled-components"

import Header from "../components/header"
import Itenstobuy from "../components/itenstobuy"

export default function Home() {
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        const response = axios.get('http://localhost:5000/products')

            response.then( res => setProductsData(res.data))
    } ,[])


    return (
        <BodyP>
            <Header />
            <Buyzone>
                {productsData.map((value, index) => 
                <Itenstobuy 
                key={index}
                title={value.title} 
                price={value.price}
                image={value.image}
                productData={value} 
                />)}
            </Buyzone>
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

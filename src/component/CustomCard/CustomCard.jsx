
import React from 'react'
import "./CustomCard.css"
import { Card } from '@chakra-ui/react'


const CustomCard = ({ url }) => {
    return (
        <div className="card">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="card-inner col-lg-3 text-center"><img src={url} /></div>


        </div>
    )

}



export default CustomCard
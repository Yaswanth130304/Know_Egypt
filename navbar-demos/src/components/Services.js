import React,{Component}from 'react'
import image from './der.jpg'
import Image from './download.png'
export default class Contact extends Component{
    render(){
        return(
             <div className='bo'>
                <hl>Services</hl>
                <h1>Services in Eygpt</h1>
                
                <br></br><br></br>
                <h3 align="left">Economic Development Planning and Assistance</h3>
                <p>Greater Egypt serves as the Region’s Economic Development District for the federal Economic Development 
                Administration and the Local Development District for the Delta Regional Authority. Greater Egypt utilizes funds 
                made available by the member local governments and EDA to complete an ongoing Comprehensive Economic Development 
                Strategy. Funds from EDA and DRA also allow Greater Egypt to work within the region to develop economic 
                development projects and seek funds for their implementation.</p>
                <img src={image} alt='oops!' width="600px" height="600px"></img>
                <br></br><br></br>
                
             </div>
        )
    }
    
}
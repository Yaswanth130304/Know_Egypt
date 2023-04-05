import React,{Component}from 'react'
import image from './load .jpg'
export default class Contact extends Component{
    render(){
        return(
             <div align="center" className='bo'>
               <h2>contact us</h2>
               <br></br>
               <form>
                 <label>Name :</label>&ensp;
                 <input type={'text'}></input><br></br>
                 <br></br>
                 <label>e-mail id: </label>
                 <input type={'email'} placeholder="@gmail.com"></input>
                 <br></br>
                 <br></br>
                 <label >Ph.no :</label>
                 <input type={'text'} placeholder="phone number"></input>
                 <br></br><br></br>
                 <label>Query : </label>
                 <textarea height="50%" width="80%"><input type={'text'} placeholder='Write u r queries here'></input></textarea>
                 <br></br><br></br>
                 <input id='er' type={'submit'}></input>
               </form>
               <br></br>
               <br></br>
               <br></br>
               <img src={image} alt='oops!' width='50%' height='60%'></img>
             </div>
        )
    }
    
}
import React,{Component}from 'react'
import image from './map.webp'
import Image from './ma.webp'
export default class Contact extends Component{
    render(){
        return(
             <div className='bo'>
                <h1>About Eygpt</h1>
                <p>Egypt, country located in the northeastern corner of Africa. Egypt’s heartland, 
                the Nile River valley and delta, was the home of one of the principal civilizations of the 
                ancient Middle East and, like Mesopotamia farther east, was the site of one of the world’s earliest 
                urban and literate societies. Pharaonic Egypt thrived for some 3,000 years through a series of native 
                dynasties that were interspersed with brief periods of foreign rule. After Alexander the Great conquered 
                the region in 323 BCE, urban Egypt became an integral part of the Hellenistic world. Under the Greek Ptolemaic 
                dynasty, an advanced literate society thrived in the city of Alexandria, but what is now Egypt was conquered by 
                the Romans in 30 BCE. It remained part of the Roman Republic and Empire and then part of Rome’s successor state, 
                the Byzantine Empire, until its conquest by Arab Muslim armies in 639–642 CE.</p>
                <br></br>
                <img src={image} alt='Oops!'></img>
                <br></br><br></br>
                <p>Until the Muslim conquest, great continuity had typified Egyptian rural life. Despite the incongruent ethnicity 
                of successive ruling groups and the cosmopolitan nature of Egypt’s larger urban centres, the language and culture of the 
                rural, agrarian masses—whose lives were largely measured by the annual rise and fall of the Nile River, with its annual 
                inundation—had changed only marginally throughout the centuries. Following the conquests, both urban and rural culture 
                began to adopt elements of Arab culture, and an Arabic vernacular eventually replaced the Egyptian language as the common 
                means of spoken discourse. Moreover, since that time, Egypt’s history has been part of the broader Islamic world, and though 
                Egyptians continued to be ruled by foreign elite—whether Arab, Kurdish, Circassian, or Turkish—the country’s cultural milieu 
                remained predominantly Arab.</p>
                <br></br>
                <img src={Image} alt='OOOOOps!'></img>
             </div>
        )
    }
    
}
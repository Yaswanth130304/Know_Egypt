import React,{Component}from 'react'
import image from './incense.jpg'
import Image from './statues-replicas.jpg'
import iMage from './works.jpg'
export default class Contact extends Component{
    render(){
        return(
             <div className='bo'>
               <hl>Products</hl>
               <h3>Incense</h3>
               <p>There are two types of incenses available. First is the very famous Oud or “Agar-wood”, which comes from the heart of the infected 
               Aquilaria tree. Only trees infected “with some sort of mold” would produce the dark aromatic resin, that is processed into Oud. The raw materials are 
               imported from countries of the Far East like India or Indonesia. Agar Wood is Egyptians' favorite fragrance, even though it is as pricey as it is pleasant. 
               A cheaper alternative would be a mixed powder, containing other incenses like “Ein Al Afreet” and “Mastic”. The other type is Bokhor “Incense sticks”, available 
               everywhere, from perfumery stores to supermarkets. It is of course a lot cheaper as it is made of regular wood mix soaked in fragrances or oils. These incenses are 
               available in many shapes and varieties to fit different beautifully crafted censers.
              Mainly used in religious rituals in mosques and churches around the world, Egyptians also use incenses to expel evil spirits from homes, as well as taking out bad smells.
              The original Oud incense powder can be found only in certain stores, Khan El Khalili being the recommended place for many Oriental products.
              </p>
              <br></br>
              <img src={image} alt='Oops!' width='300px' height='300px'></img>
              <br></br><br></br>
              <h2 >Bastet, Antique Stones, and Statues Replicas</h2>
              <p>As ancient Egyptians worshiped and honored many gods and goddess, they built huge temples and great statues. One of the most interesting and emblematic ones is Bastet - 
              the feline goddess, protector of Lower Egypt. Ancient Egyptians have always domesticated cats, keeping them in their homes as their farms' protectors from rats and birds. 
              They even mummified these beloved cats, which were buried together with their owners. Until now, in the City of Bastet “Tal El Basta” were found and still exist near 300,000 
              mummified cats. With a head of a cat and the body of a woman, Bastet is believed to protect homes from evil and vermin. The goddess is usually depicted in one or two typical 
              shapes or positions, but in many different materials, ranging from cheap plastic to expensive granite with rare colors. Look for the solid heavy stones, they will last forever.
              Another famous Egyptian icon is the Scarab beetle. The little blue ones resemble creation and resurrection, as the beetle seemed to come out of nowhere, out of mud. The Scarab is 
              also the symbol of the Great “Ra”, the deity and leader of all Egyptian Gods who created himself out of nothing. A small blue beetle is a wonderful small gift with great meanings of 
              renewal, regeneration, creation and resurrection. Mostly made of alabaster or granite, scarabs are available in many sizes to suit bracelets and necklaces or simply look over its owner from a shelf.</p>
              <br></br>
              <img src={Image} alt='Oops!'></img>
              <br></br><br></br>
              <h2>Handcrafted Metal Works</h2>
              <p>After paying a visit to the Egyptian History Museum, you will find out just how much Egyptians used silver, gold, copper, and iron to produce fabulous jewelry, decorated with gemstones. 
              Metals like copper & silver were always present in kitchenware and utensils. Until the last century, a bride had to posses a complete set of copper kitchenware in order to conclude a marriage. 
              This kitchenware was then inherited from a generation to the following.
              Mainly in Arabic homes you shall find hand-crafted tea and coffee cups and ewer, mostly from copper, but rich families would have it made of silver, or even gold. Home décor items such as plates 
              hanging on walls, shelves engraved with religious sayings, quotes or names in beautiful Arabic typography are also to be found, along with drawings depicting the contemporary lifestyle or the ancient Gods and temples.
              All metal handicrafts ranging from jewelry, utensils, to decorative plates or even Hookah bodies and lanterns are centered in Khan El Khalily and El Mosky, which abounds mostly in silver items. 
              There you will be able to see skilled workers knocking on sheets of metal to shape the final products, or even have your portrait drawn on a decorative plate. These gifts will last forever, regardless 
              of the money paid for them or material used:
              - Copper
              - Brass
              - Silver [4 qualities (600, 800, 900, 925)]
              - Gold coated Silver.</p>
              <br></br>
              <img src={iMage} alt='OOOOOPS!'></img>
             </div>
        )
    }
    
}
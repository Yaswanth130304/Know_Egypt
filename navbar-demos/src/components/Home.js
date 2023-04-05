import React,{Component}from 'react'
import image from './ey.jpg'
import iMage from './download.jpg'

export default class Contact extends Component{
    render(){
        return(
             <div className='me'>
               <h1>Hello</h1>
               <p>Welcome to this web-page</p>
               <p className='mew'>Egypt (Arabic: مِصر romanized: Miṣr, Egyptian Arabic pronunciation: [Masˤr]), officially the Arab Republic of Egypt, is a transcontinental 
               country spanning the northeast corner of Africa and southwest corner of Asia via a land bridge formed by the Sinai Peninsula. It is bordered by the Mediterranean Sea to the north, 
               the Gaza Strip (Palestine) and Israel to the northeast, the Red Sea to the east, Sudan to the south, and Libya to the west. The Gulf of Aqaba in the northeast separates Egypt from 
               Jordan and Saudi Arabia. Cairo is the capital and largest city of Egypt, while Alexandria, the second-largest city, is an important industrial and tourist hub at the Mediterranean coast.
                At approximately 100 million inhabitants, Egypt is the 14th-most populated country in the world.
                Egypt has one of the longest histories of any country, tracing its heritage along the Nile Delta back to the 6th-4th millennia BCE. Considered a cradle of civilisation, Ancient Egypt saw some of the earliest developments of writing, agriculture, urbanisation, organised religion and central government.[15] Iconic monuments such as the Giza Necropolis and its Great Sphinx, as well the ruins of Memphis, Thebes, Karnak, and the Valley of the Kings, reflect this legacy and remain a significant focus of scientific and popular interest. Egypt's long and rich cultural heritage is an integral part of its national identity, which reflects its unique transcontinental location being simultaneously Mediterranean, Middle Eastern and North African.[16] Egypt was an early and important centre of Christianity, but was largely 
                Islamised in the seventh century and remains a predominantly Sunni Muslim country, albeit with a significant Christian minority, along with other lesser practiced faiths.</p><br></br>
                <img src={image} alt='sorry'></img>
                <br></br>
                <br></br>
                <h1>History of Eygpt</h1>
                <p>A unified kingdom was formed in 3150 BC by King Menes, leading to a series of dynasties that ruled Egypt for the next three millennia. Egyptian culture flourished during this long 
                period and remained distinctively Egyptian in its religion, arts, language and customs.</p>
                <br></br>
                <p><b>First Intermediate Period, the Middle Kingdom and the Second Intermediate Period</b>
                 First Intermediate Period of Egypt, Middle Kingdom of Egypt, and Second Intermediate Period of Egypt
                The First Intermediate Period ushered in a time of political upheaval for about 150 years. Stronger Nile floods and stabilization of government, however, 
                brought back renewed prosperity for the country in the Middle Kingdom c. 2040 BC, reaching a peak during the reign of Pharaoh Amenemhat III. A second period of disunity heralded the 
                arrival of the first foreign ruling dynasty in Egypt, that of the Semitic-speaking Hyksos. The Hyksos migrants took over much of Lower Egypt around 1650 BC and founded a new capital at Avaris. 
                They were driven out by an Upper Egyptian force led by Ahmose I, who founded the Eighteenth Dynasty and relocated the capital from Memphis to Thebes.</p>
                <img src={iMage} alt='saw'></img>
                <br></br>
                <p><b>Achaemenid rule</b>&ensp;&ensp;
                Egyptian soldier of the Achaemenid army, circa 470 BCE. Xerxes I tomb relief.In the sixth century BC, the Achaemenid Empire conquered Egypt. The entire Twenty-seventh Dynasty 
                of Egypt, from 525 BC to 402 BC, save for Petubastis III and possibly Psammetichus IV, was an entirely Persian-ruled period, with the Achaemenid kings being granted the title of pharaoh. Amyrtaeus' 
                successful rebellion ended the first Achaemenid rule and inaugurated Egypt's last significant phase of independence under native rulers. The Thirtieth Dynasty was the last native ruling dynasty during the Pharaonic epoch. 
                It fell to the Persians again in 343 BC after the last native Pharaoh, King Nectanebo II, was defeated in battle.</p>
             </div>
        )
    }
}
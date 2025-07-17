import React from 'react'
import Tripdata from './Tripdata'
import "./Tripstyle.css"
function Trip() {
  return (
    <div className='trip'>
        <h1>Recents Trips</h1>
      <p></p>    
       <div className="tripcard">
        <Tripdata
         image="5.jpg" 
         heading="Florence"
          text=" Located along the Arno River, Florence is famed for its stunning Renaissance architecture, world-class art museums like the Uffizi, and historic landmarks such as the Duomo and Ponte Vecchio"
          />
        <Tripdata
         image="6.jpg" 
         heading="Komodo Island"
          text=" A UNESCO World Heritage site, Komodo Island is famous for its unique Komodo dragons, pristine beaches, and world-class diving spots in the Komodo National Park., officially the Republic of Indonesia, is a country in Southeast Asia and Oceania, between the Indian and Pacific oceans"
          />
        <Tripdata
         image="8.jpg" 
         heading="Yogyakarta "
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania, between the Indian and Pacific oceans"
          />
       </div>
        </div>

  )
}

export default Trip
import React from 'react'
import './Batery.css'

function Batery ( { value } )  {

    return (
          <div className='bax'>
              <div className='content'>
                  <div className="percent"></div>
                     <div className='batteryShape'>
                         <div className='level'>
                           <div className="percentage" style={{width: value}}></div>
                     </div>
                 </div>
             </div>
         </div>
    )
}




export default Batery
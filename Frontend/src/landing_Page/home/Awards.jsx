import React from 'react'

export const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in India</h1>
          <p className='mb-5'>2+ million Zerodha clients contributes to over 15% all retails order
            volumes in india daily by trading and investing in :
          </p>
          <div className="row">

            <div className="col-6">
              <ul>
                <li><p>Future and Options</p></li>
                <li><p>Commodity derivetives</p></li>
                <li><p>Currency derivatives </p></li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual founds</p></li>
                <li><p>Bounds and Goverment Securities </p></li>
              </ul>
            </div>

          </div>
          <img src="media\images\pressLogos.png" style={{width:'90%'}} alt="" />
          
        </div>
      </div>
    </div>
  )
}

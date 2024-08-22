import React from 'react'

export const Hero = () => {
  return (
    <section className="container-flued" id='supportHero'>
      <div className=" p-5" id='support-wrapper'>
        <h4>Support Portal</h4>
        <a href="">Tackt Tickets</a>
      </div>

      <div className="row p-5 m-3" >
        <div className="col-6 p-5" >
          <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder='Eg. how do i activate F&O, why is my order getting rejected ...'/>
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>

        <div className="col-6 p-5" >
          <h1 className='fs-3'>Featured</h1>
          <p>The account maintenance charge has been deducted but is not yet reflected in today's Kite balances for a few of our clients. Only the actual available funds will be usable for trades.</p>
        </div>

      </div>
    </section>
  )
}

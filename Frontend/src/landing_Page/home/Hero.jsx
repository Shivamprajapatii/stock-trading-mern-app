import React from 'react'

export const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Home Image" className='mb-5' />

        <h1 className='mt-5'>Invest in Everything</h1>
        <p>Online platform to invest in stocks, mutual founds, and more </p>
        <button className='btn' style={{width :'25%', border:'1px solid black', backgroundColor:"blue", color:'white',fontSize:'18px', margin:'0 auto'}}>Sign up Now</button>
      </div>
    </div>
  )
}

import React from 'react'

export const Stats = () => {
  return (
    <div className="container p-5">
      <div className="row p-5">

        <div className="col-6 p-5">

          <h1 className='fs-2 mb-5'>Trust with confidence</h1>
          <h2 className='fs-5' style={{fontWeight:'700'}}>Customer-first always</h2>
          <p className='text-muted'> That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

          <h2 className='fs-5' style={{fontWeight:'700'}}> No spam or gimmicks</h2>
          <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

          <h2 className='fs-5' style={{fontWeight:'700'}}>The Zerodha universe</h2>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h2 className='fs-5' style={{fontWeight:'700'}}>Do better with money</h2>
          <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>

        <div className="col-6 p-5">
          <img src="media\images\ecosystem.png" alt="" style={{ width: '100%' }} />
           <div className='text-center'>
            <a className='m-5 text' style={{textDecoration :"none"}} href="">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a href=""  style={{textDecoration :"none"}}>Try Kite demo</a>
           </div>
        </div>

      </div>
    </div>
  )
}

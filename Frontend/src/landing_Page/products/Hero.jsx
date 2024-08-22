import React from 'react'

export const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div className="row">

        <div className="text-center mt-5 p-3">
          <h1>Technology</h1>
          <h3 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
          <p className='mt-3 mb-5'>
            Check out our {" "}
            <a style={{ textDecoration: "none" }} href="">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
          </p>
        </div>

      </div>
    </div>
  )
}

import React from "react";

export const Pricing = () => {
  return (
    <div className="container p-5" style={{backgroundColor:''}}>
      <div className="row">
        {/* Empty Container  */}
      <div className="col-1"></div>

        <div className="col-4">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="m-1 text" style={{ textDecoration: "none" }} href="">
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

       

        <div className="col-7">
          <div className="row">
            <div className="col">
              <img src="media/images/pricing-0.svg" alt="" style={{height:'50%'}} />
              <p>Free Account Opening</p>
            </div>
            <div className="col">
              <img src="media/images/pricing-0.svg" alt="" style={{height:'50%'}}/>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col ">
              <img src="media/images/pricing-20.svg" alt="" style={{height:'50%'} }/>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import rates from './images/Group 306.png';

const ReviewsContent = () => (
  <div className='reveiwes-page'>
    <div className='reviews-wrapper'>
      <h2>Your reviews</h2>
      <p>Last <span>30 days</span></p>
    </div>
    <div className='rates-image'>
      <img src={rates} alt='rates'/>
    </div>
    <p>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    </p>
    <p className='reviewer'>Elliot <span>December 1, 2022</span></p>
    <p className='review-messege'>
    The beach bum is such as awesome van! Such as comfortable trip.
    We had it for 2 weeks and there was not a single issue. Super clean when
    we picked it up and the host is very comfortable and understanding. Highly
    recommended!
    </p>

    <p>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    </p>
    <p className='reviewer'>Sandy <span>November 23, 2022</span></p>
    <p className='review-messege'>
     The beach bum is such as awesome van! Such as comfortable trip.
      We had it for 2 weeks and there was not a single issue. Super clean when
      we picked it up and the host is very comfortable and understanding. Highly
      recommended!
    </p>
  </div>
);

export default ReviewsContent;

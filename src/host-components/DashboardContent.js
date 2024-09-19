import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './images/img-1.png';
import img2 from './images/img-2.png';
import img3 from './images/img-3.png';

const DashboardContent = () => (
  <div>
    <div className='first-part'>
      <h1>Welcome!</h1>
      <div className='text--wrapper'>
        <p className='income-last'>Income last <span>30 days</span></p>
        <Link to="/unavailable" className='link'>Details</Link>
      </div>
      <h1>$2,260</h1>
    </div>
    <div className='second-part'>
      <div className='text--wrapper'>
        <p className='review-score'>Review score <i className="ri-star-fill"></i>5.0<span>/5</span></p>
        <Link to="/unavailable" className='link'>Details</Link>
      </div>
    </div>
    <div className='third-part'>
      <div className='text--wrapper'>
        <p className='review-score'>Your listing vans</p>
        <Link to="/unavailable" className='link'>View all</Link>
      </div>
      <div className='main-wrapper'>
        <div className='img-text-wrapper'>
          <div className='car-image'>
            <img src={img1} alt='car'/>
          </div>
          <p className='car-name'>Modest Explore<br/> <span>$60/day</span></p>
        </div>
        <Link to="/unavailable" className='link'>Edit</Link>
      </div>
      <div className='main-wrapper'>
        <div className='img-text-wrapper'>
          <div className='car-image'>
            <img src={img3} alt='car'/>
          </div>
          <p className='car-name'>Beach Bum<br/> <span>$80/day</span></p>
        </div>
        <Link to="/unavailable" className='link'>Edit</Link>
      </div>
      <div className='main-wrapper'>
        <div className='img-text-wrapper'>
          <div className='car-image'>
            <img src={img2} alt='car'/>
          </div>
          <p className='car-name'>Green Wonder<br/> <span>$80/day</span></p>
        </div>
        <Link to="/unavailable" className='link'>Edit</Link>
      </div>
    </div>
  </div>
);

export default DashboardContent;

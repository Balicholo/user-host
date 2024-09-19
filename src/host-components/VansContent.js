import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from './images/img-1.png';
import img2 from './images/img-2.png';
import img3 from './images/img-3.png';

const VansContent = () => {
  const navigate = useNavigate();

  const vans = [
    { id: 1, type: 'simple', name: 'Modest Explorer', price: '$80', img: img1, description: 'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!' },
    { id: 2, type: 'rugged', name: 'Beach Bum', price: '$80', img: img3, description: 'Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you wont find in an ordinary camper.' },
    { id: 3, type: 'rugged', name: 'Green Wonder', price: '$70', img: img2, description: 'With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle thats perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.' },
  ];

  const handleClick = (van) => {
    navigate(`/vans/${van.id}`, { state: { van } });
  };

  return (
    <div>
      <div className='vans-content'>
        <h2>Your listed vans</h2>
        <div className='vans-container'>
          {vans.map((van) => (
            <div
              key={van.id}
              className='vans-text-wrapper'
              onClick={() => handleClick(van)}
            >
              <div className='van-image'>
                <img src={van.img} alt={van.name} />
              </div>
              <p className='van-name'>
                {van.name}<br /><span>{van.price}/day</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VansContent;

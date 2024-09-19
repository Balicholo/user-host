import React from 'react';
import graph from './images/Group 313.png';

const IncomeContent = () => (
  <div className='income-content'>
    <h2>Income</h2>
    <p>Last <span>30days</span></p>
    <h2>$2,260</h2>
    <div className='graph-image'>
      <img src={graph} alt='graph' />
    </div>
    <div className='income-text-wrapper'>
      <h3>Your transactions (3)</h3>
      <p>Last <span>30 days</span></p>
    </div>
    <div className='transaction-wrapper'>
      <h3>$720</h3>
      <p>1/12/22</p>
    </div>
    <div className='transaction-wrapper'>
      <h3>$560</h3>
      <p>10/11/22</p>
    </div>
    <div className='transaction-wrapper'>
      <h3>$980</h3>
      <p>23/11/22</p>
    </div>
  </div>
);

export default IncomeContent;

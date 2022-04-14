import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import { BiArrowBack } from "react-icons/bi";
import './editOrder.css';
import Home from '../Home/Home'
import { editData } from './editData';

function editOrder() {
  return (
    <>
      <Navbar />
      <div className="container mt-3 editbackbtn d-flex align-items-center justify-content-start">
        <Link to='../Home'>
          <BiArrowBack className='m-2' style={{ color: 'black', height: '28px', width: '28px', top: '24px', left: '24px' }} />
        </Link>
        <p className='editorder-text'>Edit Order</p>
      </div>

      <div className='container' id="container">
        <ui className='editorder-data'>
          {editData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <div style={{'margin-left':'16px'}}>
                  Client Name:
                  <text style={{ 'margin-left': '72px', 'font-weight': 'bold' }}>{item.cname}</text>
                </div>
                <div style={{ 'margin-top': '5px', 'margin-left':'16px' }}>
                  Ref No:
                  <text style={{ 'margin-left': '120px', 'font-weight': 'bold' }}>{item.rno}</text>
                </div>
                <div  style={{'margin-top':'-35px', 'margin-left':'662px'}}><Link style={{color:'black'}} to={'#'}>{item.icon}</Link></div>
                <hr style={{'margin-top':'30px'}}></hr>
              </li>
            );
          })}
        </ui>
      </div>

    </>
  )
}

export default editOrder;
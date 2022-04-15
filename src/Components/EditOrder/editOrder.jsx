import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import { BiArrowBack } from "react-icons/bi";
import './editOrder.css';
import { editData } from './editData';

function editOrder() {
  return (
    <>
      <Navbar />
      <div className="container mt-3 editbackbtn d-flex align-items-center justify-content-start" id='editbackbtn'>
        <Link to='../Home'>
          <BiArrowBack id='backbtn'/>
        </Link>
        <p className='editorder-text' id='editorder-text' >Edit Order</p>
      </div>

      <div className='container' id="container">
        <ui className='editorder-data' id="editorder-data">
          {editData.map((item, index) => {
            return (
              <li key={index} className={item.cName} id="editOrder">
                <div id='clientdiv'>
                  Client Name:
                  <text id='cname'>{item.cname}</text>
                </div>
                <div id='refnodiv'>
                  Ref No:
                  <text  id='rno'>{item.rno}</text>
                </div>
                <div id='editicon'><Link style={{ color: 'black' }} to={'#'}>{item.icon}</Link></div>
                <hr style={{ 'marginTop': '30px' }}></hr>
              </li>
            );
          })}
        </ui>
      </div>

    </>
  )
}

export default editOrder;
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import {BiArrowBack} from "react-icons/bi";
import './editOrder.css';
import Home from '../Home/Home'
import { editData } from './editData';

function editOrder() {
    return(
        <>
        <Navbar/>
        <div className="edit-text">
    <Link to='../Home'>
      <BiArrowBack className='m-2' style={{color: 'black', height: '28px', width: '28px',top:'24px',left:'24px'}}/>
    </Link>
        <p className='editorder-text'>Edit Order</p>
        </div>
        <div className='editorder-data'>
        {editData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                 Client Name: {item.cname}
                 <br></br>
                 Ref No: {item.cname}
                 <hr></hr>
                </li>
              );
            })}
        </div>
       
        </>
    )
}

export default editOrder;
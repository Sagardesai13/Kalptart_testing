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
            <div className="container">
                <div style={{ 'width': '160px' }} className=" mt-4  d-flex " id='editbackbtn'>
                    <Link to='../Home'>
                        <BiArrowBack id='backbtn' />
                    </Link>
                    <p className='editorder-text' id='editorder-text' >Edit Order</p>
                </div>

                <div>
                    <ul class="list-group">
                        <li class="list-group-item active">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>


            </div>

        </>
    )
}

export default editOrder;
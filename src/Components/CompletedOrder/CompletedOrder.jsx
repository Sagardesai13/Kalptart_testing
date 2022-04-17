import React from 'react'
import Navbar from '../NavBar/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {RiEqualizerLine} from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'
import './CompletedOrder.css';
import ListView from '../Helper/ListView/ListView';
function CompletedOrder() {
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='co-heading'>
            <div className='co-editorder'>
              <AiOutlineArrowLeft/> Completed Order
              </div>
              <div className='co-btns'>
              <button className='co-btn'>Urgent</button>
              <button className='co-btn'>Fast</button>
              <button className='co-btn'>Normal</button>
              </div>
            </div>
            
            <div className='eo-container mt-4'>
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
            </div>
        </div>
        </>
  )
}

export default CompletedOrder;
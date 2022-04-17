import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/NavBar/Navbar';
import NewOrder from './Components/NewOrder/NewOrder';
import Test from './Components/Test/Test';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import AddClient from './Components/AddClient/AddClient';
import Editorder from './Components/EditOrder/editOrder';
import ConfirmOrder from './Components/ConfirmOrder/ConfirmOrder';
import TrackOrder from './Components/TrackOrder/TrackOrder';
import ModalButton from './Components/Helper/ModalButton/ModalButton';
import sendreminder from "./Components/SendReminder/SendReminder";
import Settings from './Components/Settings/Settings';
import SendReminder from './Components/SendReminder/SendReminder';
import CompletedOrder from './Components/CompletedOrder/CompletedOrder';


const App = () => {
  return (
    <>

      <Routes>
      <Route exact path="/navbar" element={<Navbar />} />
        <Route path="/" exact element={<Test/>}/>
        <Route path='*' exact element={<NotFound/>}/>
        <Route path="/create" exact element={<NewOrder/>}/>
        <Route path="/orderConfirm" exact element={<ConfirmOrder show={false}/>}/>
        <Route path="/EditOrder" exact element={<Editorder/>}/>
        <Route path="/home" exact element={<Home/>}/>
        <Route path="/settings" exact element={<Settings/>}/>
        <Route path="/modal" exact element={<ModalButton/>}/>
        <Route path="/Trackorder" exact element={<TrackOrder/>}/>
        <Route path="/sendreminder" exact element={<SendReminder/>}/>
        <Route path="/completedorder" exact element={<CompletedOrder/>}/>
      </Routes>

    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { OrderHistory } from '../orderhistory/orderhistory'
import Jobpost from '../post/Jobpost'
import PostJob from '../PostaJob/PostaJob'
import "./JobMain.scss"

export const JobMain = () => {
  return (
    <div className='jobmain'>
        
      
        {/* <PostJob /> */}
        <OrderHistory />
      
    </div> 
  )
}

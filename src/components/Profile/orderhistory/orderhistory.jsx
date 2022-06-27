import React, { useState } from 'react';
import  "./orderhistory.scss";
import filter from "../../image/profile/filter.svg";
import data from "./mock-data.json";



export const OrderHistory = () => {

  const [contacts,setContacts] = useState(data);
  

  

  return (
    <div>
            <h1 className="position">Order History</h1>
            <div>
                <h2 className="postajob">Order History</h2>
                <div className='filter'>
                    <img src={filter}/>
                    <span>Filter</span>
                </div>

                <table>
                  <thead >
                    <tr className='block flex'>
                      <th className='id'>Id</th>
                      <th className='name'>Name</th>
                      <th className='orederterm'>Order Term</th>
                      <th className='type'>Type</th>
                      <th className='status'>Status</th>
                      <th className='price'>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                  {contacts.map((contact)=>(
                    <tr className="blocki flex">
                      <td className='id'>{contact.id}</td>
                      <td className='name'>{contact.name}</td>
                      <td className='orederterm'>{contact.orderterm}</td>
                      <td className='type'>{contact.type}</td>
                      <td className='status'>{contact.status}</td>
                      <td className='price'>{contact.price}</td>
                    </tr>
                  ))}
                    
                  </tbody>
                  
                </table>
            </div>
            <div className='blockinput flex'>
                <input className='idi' placeholder='Id' />
                <input className='namei' placeholder='Name' />
                <input className='oredertermi' placeholder='OrderTerm' />
                <input className='typei' placeholder='Type' />
                <input className='statusi' placeholder='Status' />
                <input className='pricei' placeholder='Price' />
                <button  className='btn'>btn</button>
            </div>
            
    </div>
    
  )
}

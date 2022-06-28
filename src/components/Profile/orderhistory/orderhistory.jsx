import React, { useState } from 'react';
import  "./orderhistory.scss";
import filter from "../../image/profile/filter.svg";
import data from "./mock-data.json";
import ReactPaginate from 'react-paginate';



export const OrderHistory = () => {

  const [contacts,setContacts] = useState(data.slice(0,50));
  const [pageNumber, setPageNumber] = useState(0)
  
  const contactsPerPage = 5;
  const pageVisited = pageNumber * contactsPerPage;


  const  displayContacts = contacts
  .slice(pageVisited, pageVisited + contactsPerPage)
  .map((contact) => {
    return (
      <tr className="blocki flex">
        <td className='idt'>{contact.id}</td>
        <td className='namet'>{contact.name}</td>
        <td className='oredertermt'>{contact.orderterm}</td>
        <td className='typet'>{contact.type}</td>
        <td className='statust'>{contact.status}</td>
        <td className='pricet'>{contact.price}</td>
                            
      </tr>
    )
      
  })

  const pageCount = Math.ceil(contacts.length / contactsPerPage);
  const changePage = ({selected}) =>{
  setPageNumber(selected);
}

  return (
  
    <div>
    
            <h1 className="position">Order History</h1>
            <div>
                <h2 className="postajob">Order History</h2>
                <div className='filter'>
                    <img src={filter}/>
                    <span>Filter</span>
                </div>
                {contacts.length===0 ? <p className='nodata'>No data found</p> : (
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
                    {displayContacts}
                    <ReactPaginate 
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  />
                  </tbody>
                  
                </table>
                
                )}
                
            
            </div>
            
            
    </div>
    
  )
}

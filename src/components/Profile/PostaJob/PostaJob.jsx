import React from "react";
import "./postajob.scss";
import time1 from "../../image/profile/time.svg"

function PostJob() {
  return (
    <>
      <h1 className="position">Post a Job</h1>
        <form>
      <h2 className="postajob">Post a Job</h2>
      <div className="flex">
      <div className="block">
          <label>Job Category</label>
          <input placeholder="Your job category here"></input>
      </div>
      <div className="block">
        <label>Full Address</label>
        <input placeholder="Adress"></input>
      </div>
    </div>
      
      
      <div className="flex">
        <div className="block">
          <label>Time</label>
          <input  placeholder="from:  12/05/2022 03:00 pm" />
          <img src={time1} />
        </div>
        <div className="block">
          <label> </label>
          <input  
          type="datetime-local"
          placeholder="to:  13/05/2022 03:00 pm"></input>
          {/* <img type="date" src={time1}></img> */}
        </div>
      </div>
      <div className="flex">
        <div className="block">
          <label>Price </label>
          <input placeholder="AMD"></input>
        </div>
        <div className="block">
          <label> Location</label>
          <input placeholder="You location"></input>
        </div>
      </div>
      <div className="">
        <div className="block1">
        <label>Job Description</label>
        <textarea type="text" name="usrname" placeholder="Your job description"></textarea>
        </div>
        
      </div>
      <button className="btn">Post a Job</button>
     </form>
    </>
      
        
    
    
  );
}
export default PostJob;

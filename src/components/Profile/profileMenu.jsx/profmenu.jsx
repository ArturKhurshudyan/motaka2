import React from "react";
import "./profmenu.scss";
import myprofile from "../../image/profile/1.svg"
import post from "../../image/profile/2.svg"
import history from "../../image/profile/3.svg"
import wallet from "../../image/profile/4.svg"
import rating from "../../image/profile/5.svg"
import account from "../../image/profile/6.svg"
import foto from "../../image/profile/foto.svg"
import { Link } from "react-router-dom";

function Profmenu() {
  return (
    
      
      <div className="fullPage">
        <div className="imgWork1">
          <div className="foto">
            <img src={foto}/>
          </div>
        </div>
          <div className="usernamejob">
            Sam Wiliams
          </div>
          <div className="div2">UI/UX Designer</div>

          <div className="div3"> 
            <img src={myprofile} />
            <h2>My Profile</h2>
          </div>
          <Link to='/pastjob' className="div3"> 
            <img src={post} />
            <h2>Post a Job</h2>
          </Link>
          <div className="div3"> 
            <img src={history} />
            <h2>Order History</h2>
          </div>
          <div className="div3"> 
            <img src={wallet} />
            <h2>My Wallet</h2>
          </div>
          <div className="div3"> 
            <img src={rating} />
            <h2>Rating Review</h2>
          </div>
          <div className="div3"> 
            <img src={account} />
            <h2>Verify Account</h2>
          </div>
          
        </div>
        
        
  
    
  );
}
export default Profmenu;

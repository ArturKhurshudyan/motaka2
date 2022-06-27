import React from "react";
import "./post.scss";

const Jobpost = () => {
  return (
    <div className="JobPost">
      <div className="post__header">
        <div className="post_job">
          <h1>Job</h1>
        </div>
        <div className="post_center">
          <p className="categories">Categories</p>
          <p className="about">About Us</p>
        </div>
        <div  className="post_contact-us">
          <svg>
            <path d="M9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2ZM3 6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6C15 9.31371 12.3137 12 9 12C5.68629 12 3 9.31371 3 6ZM5 16C3.34315 16 2 17.3431 2 19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19C0 16.2386 2.23858 14 5 14H13C15.7614 14 18 16.2386 18 19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19C16 17.3431 14.6569 16 13 16H5Z" fill="white"/>
          </svg>
            
        </div>
      </div>
    </div>
  );
};

export default Jobpost;

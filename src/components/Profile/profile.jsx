import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Box, Slider } from "@material-ui/core";
import AvatarEditor from "react-avatar-editor";
import Profmenu from "./profileMenu.jsx/profmenu";
import PostJob from "./PostaJob/PostaJob";
import Jobpost from "./post/Jobpost";
import "./profile.style.scss"
import { JobMain } from "./JobMain/JobMain";


function Profile() {
  return (
  
      
      <div className="postjob1">
        <Jobpost/>
        <h1 className="hPost"></h1>
        <div className="flex">
        <Profmenu/>
        <JobMain />
        </div>
        
      
    </div>
  );
}
export default Profile;

import React from "react";
import "./Homepage.scss";
import chat from "../image/chat.jpg";
import HPImg from "../image/HPImg.png";
import Search from "../image/Search.jpg";
import Vector from "../image/Vector.jpg";
import IconPerson from "../image/IconPerson.jpg";
import IconList from "../image/IconList.jpg";
import IconList1 from "../image/IconList1.jpg";
import Fl from "../image/Fl.jpg";
import Star from "../image/Star.jpg";
import Star1 from "../image/Star1.jpg";
import FBGreen from "../image/FBGreen.jpg";
import InstagramGreen from "../image/InstagramGreen.jpg";
import TelegramGreen from "../image/TelegramGreen.jpg";
import Location from "../image/Location.jpg";
import Phone from "../image/Phone.jpg";
import email from "../image/email.jpg";
import iron from "../image/iron.jpg";
import laundry from "../image/laundry.jpg";
import plumbing from "../image/plumbing.jpg";
import technology from "../image/technology.jpg";
import beauty from "../image/beauty.jpg";
import { useNavigate } from "react-router";


export const HomePage = () => {
  const navigate = useNavigate();
  const About = () => {
    navigate("/aboutus");
  };
  const Categories = () => {
    navigate("/categories");
  };
  // const Home=()=>{
  //     navigate("/")
  // }
  const SignUp = (value) => {
    navigate("/signup");
  };
  const SignIn = (value) => {
    navigate("/signin");
  };
  const JobListing = (value) => {
    navigate("/joblisting");
  };
  const ForgotPass = (value) => {
    navigate("/forgotpass");
  };
  const Verification = (value) => {
    navigate("/verification");
  };
  const Profile = (value) => {
    navigate("/profile");
  };
  return (
    // <header className="header_homePage">
    <>
      
      <div className="container_homePage">
      <div className="title_homePage">
        <div className="startcareer">
          <p className="paraStart">
            Start Your Career Here With <span className="green1000">1000+</span>{" "}
            Best Jobs For You
          </p>
          <div className="search_homePage">
            <input
            
              className="searchInput"
              type="search"
              name=""
              id=""
              // placeholder={<img className="srcIcon" src={Search} />+"Find the job you want"}
              placeholder="Find the job you want"
            />
<img className="srcIcon" src={Search} />
            <button className="srcBtn">Search</button>
          </div>
        </div>
        {/* <img className="girlImg" src={HPImg} alt="" /> */}
      </div>

      <div className="popularity">
        <div className="popular">
          Popular <span className="greenJob">Job</span> Categories
        </div>
        <div className="jobTxt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>

        <div className="categories_bar">
          <div className="categories1">
            <div className="frst">
              <span className="imgDiv">
                <img className="img1" src={Vector} alt="" />
              </span>
              <div>
                <p>Cleaning</p>
              </div>
            </div>
            <div className="frst">
              <span className="imgDiv">
                <img className="img1" src={laundry} alt="" />
              </span>
              <div>
                <p>Laundry</p>
              </div>
            </div>
            <div className="frst">
              <span className="imgDiv">
                <img className="img1" src={iron} alt="" />
              </span>
              <div>
                <p>Ironing</p>
              </div>
            </div>
          </div>
          <div className="categories2">
            <div className="four">
              <span>
                <img className="img1" src={plumbing} alt="" />
              </span>
              <div>
                <p>Plumbing</p>
              </div>
            </div>
            <div className="fift">
              <span>
                <img className="img1" src={technology} alt="" />
              </span>
              <div>
                <p>Technology</p>
              </div>
            </div>
            <div className="six">
              <span>
                <img className="img1" src={beauty} alt="" />
              </span>
              <div>
                <p>Beauty</p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="loginBar_homePage">
        <p>How Does it Work</p>
        <div className="right_round">
          <div className="numbers">1</div>
          <div className="numbers">2</div>
          <div className="numbers">3</div>
        </div>
        <div className="round_bar_homePage">
          <div className="round1">
            <img className="LogImg" src={IconPerson} alt="" />
          </div>
          <div className="round2">
            <span>
              <img src={IconList} alt="" />
            </span>
          </div>
          <div className="round3">
            <span>
              <img src={IconList1} alt="" />
            </span>
          </div>
        </div>

        <div className="HDWtext">
          <div>Login/Signup</div>
          <div>Search Job</div>
          <div>Apply For Job</div>
        </div>
      </div>
      <div className="min_round_left">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="min_round_right">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <div className="topWorkers_homePage">
        <div id="title_topWorkers">
          <div className="topWorkers">
            Top <span id="greenWork"> Workers</span>
          </div>
          <div className="topWorkTxt">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
        <div className="workersImg">
          <div id="user_workers2">
            <img className="imgBig" src={Fl} alt="" />
            <div className="centerWork">
              {" "}
              <div className="imgWork"></div>
              <p>Sam William</p>
              <p>UI/UX Designer</p>
              <span></span>
              <div className="star_workers">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star1} alt="" />
              </div>
              <p className="view">View</p>
            </div>
          </div>
          <div id="user_workers1">
            <img className="imgBig" src={Fl} alt="" />
            <div className="centerWork">
              {" "}
              <div className="imgWork"></div>
              <p>Sam William</p>
              <p>UI/UX Designer</p>
              <span></span>
              <div className="star_workers">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star1} alt="" />
              </div>
              <p className="view">View</p>
            </div>
          </div>
          <div id="user_workers3">
            <img className="imgBig" src={Fl} alt="" />
            <div className="centerWork">
              {" "}
              <div className="imgWork"></div>
              <p>Sam William</p>
              <p>UI/UX Designer</p>
              <span></span>
              <div className="star_workers">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star1} alt="" />
              </div>
              <p className="view">View</p>
            </div>
          </div>
          <div id="user_workers4">
            <img className="imgBig" src={Fl} alt="" />
            <div className="centerWork">
              {" "}
              <div className="imgWork"></div>
              <p>Sam William</p>
              <p>UI/UX Designer</p>
              <span></span>
              <div className="star_workers">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star1} alt="" />
              </div>
              <p className="view">View</p>
            </div>
          </div>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="end_page">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="footer_homePage">
        <div className="footerJob">
          <p className="greenJob2">Job</p>
          <p>
            Start Your Career Here With <br></br>1000+ Best Jobs For You
          </p>
        </div>
        <div className="footerComp">
          <p className="comp">Company</p>
          <p>Categories</p>
          <p>About Us</p>
        </div>
        <div className="contacts">
          <p className="cont">Contacts</p>
          <p>
            <img src={Location} alt="" /> Baghramyan 18
          </p>

          <p>
            <img src={Phone} alt="" /> +374 000000
          </p>

          <p>
            <img src={email} alt="" /> arpifytech@gmail.com
          </p>
        </div>
        <div className="inst">
          <img src={FBGreen} alt="" />
          <img src={InstagramGreen} alt="" />
          <img src={TelegramGreen} alt="" />
        </div>
      </div>
    </div>
    </>
    
  );
};

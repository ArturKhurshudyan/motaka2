import { Login } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../signUp/SignUp";

import "./menu.css";

export function Menu() {
  const [menuBool, setMenuBool] = useState(false);
  const [user, setUser] = useState("");
  const [userGoogle, setUserGoogle] = useState("");
  const [userFb, setUserFb] = useState("");
  const [bool, setBool] = useState(false);
  const navigate = useNavigate();
  const Signup = () => {
    navigate("/signup");
  };
  const Profile = () => {
    navigate("/profile");
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setUserGoogle(JSON.parse(localStorage.getItem("userGoogle")));
    setUserFb(JSON.parse(localStorage.getItem("userFb")));
  }, [navigate]);
  return (
    <menu>
      <nav
        onClick={() => {
          if (bool) {
            setBool(false);
          }
        }}
      >
        <ul>
          <li>
            <Link className="motaka" to="/">
              MOtAKa LOGO
            </Link>
          </li>
        </ul>
        <ul className="menu-list"> 
          <li className="dropdown">
            <span className="category">Categories</span>
            <div className="dropdown-content">
              <Link to="/category/professional">Cleaning</Link>
              <Link to="/category/artistic">Beauty</Link>
              <Link to="/category/historical">Ironing</Link>
              <Link to="/category/motivational">Plumbing</Link>
              <Link to="/category/psychological">Technology</Link>
            </div>
          </li>
          <li> 
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
        <ul className="right-list">
          <li className="login-btn">
            <button className="signup" onClick={Signup}>
              SignUp
            </button>
            <button onClick={Profile}>Profile</button>
          </li>
          <li>
            <div className="menu" onClick={() => setMenuBool(!menuBool)}>
              {!menuBool && (
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              )}
              {menuBool && <div className="closeMenu">x</div>}
            </div>
          </li>
        </ul>
      </nav>
      {/* responsive menu */}
      {menuBool && (
        <div className="resp_menu">
          <div className="responsive_menu">
            <ul className="resp_ul">
              <li className="dropdown_resp">
                <span className="resp_category">Categories</span>
                <ul
                  className="category_submenu"
                  onClick={() => setMenuBool(false)}
                >
                  <li>
                    <Link to="/category/professional">Cleaning</Link>
                  </li>
                  <li>
                    <Link to="/category/artistic">Laundry</Link>
                  </li>
                  <li>
                    <Link to="/category/historical">Ironing</Link>
                  </li>
                  <li>
                    <Link to="/category/motivational">Plumbing</Link>
                  </li>
                  <li>
                    <Link to="/category/psychological">Technology</Link>
                  </li>
                </ul>
              </li>
              <li onClick={() => setMenuBool(false)}>
                <Link to="/aboutus">About us</Link>
              </li>

              <li>
                {/* {user ? (
                  <img
                    alt="profile_pic"
                    src={user.avatar}
                    onClick={() => { setMenuBool(false); navigate("/profile") }}
                    className="profile_pic_menu"
                  />
                ) : (
                  <SignIn />
                )} */}
              </li>
            </ul>
          </div>
        </div>
      )}
    </menu>
  );
}

export default Menu;

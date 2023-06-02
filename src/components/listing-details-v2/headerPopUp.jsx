import Link from "next/link";
import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import style from "./navbarPopUp.module.css";
import MobileMenuContent from "../common/header/MobileMenuContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [myColor, setmyColor] = useState(true);
  const [textColor, setTextColor] = useState(true);
  const [button_Color, setButtonColor] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setmyColor(false),
        setTextColor(false),
        setButtonColor(false),
        setNavbar(true);
    } else {
      setNavbar(false);
      setmyColor(true);
      setTextColor(true);
      setButtonColor(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

//   const { myState, setMyState } = useContext(MyContext);

  function handleClick() {
    localStorage.setItem('setIsModalOpen', false);
  }

  return (
    
    <div className="stylehome1 h0 mega-menu-wrapper">
      <div className="mobile-menu" style={{display:"block"}}>
        <div className="header stylehome1" style={{backgroundColor:"#1B46B9"}}>
          <div className="main_logo_home2 text-center">
            <img
              className="nav_logo_img img-fluid mt20"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span className="mt20">FindHouse</span>
          </div>
          {/* main_logo_home2 */}

          <ul className="menu_bar_home2">
            <li className="list-inline-item list_s">
              <Link href="/login">
                <a>
                  <span className="flaticon-user"></span>
                </a>
              </Link>
            </li>
            <li
              className="list-inline-item"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            >
              <a>
                <span></span>
              </a>
            </li>
          </ul>
          {/* menu_bar_home2 */}
        </div>
      </div>
      {/* <!-- /.mobile-menu --> */}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
        data-bs-scroll="true"
      >
        <MobileMenuContent />
      </div>
    </div>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;

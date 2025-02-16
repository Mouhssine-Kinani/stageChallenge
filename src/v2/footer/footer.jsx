import './base.css';
import './auther.css';
import './logo.css';
import './media.css';
import './responsive.css';

import logo from "../../images/logo.svg";

import fb from "../../images/icon-facebook.svg"
import insta from "../../images/icon-twitter.svg"
import pinterest from "../../images/icon-pinterest.svg"
import tw from "../../images/icon-instagram.svg"

function Footer() {
    let year  = new Date().getFullYear();
  return (
    <>
      <footer className="f-container ">
        <div className="item1">
          <img src={logo} alt="" loading="lazy" className='logo'/>
        </div>
        <div className="item3">
            <img src={fb} alt="facebook" className='media' />
            <img src={insta} alt="facebook" className='media'/>
            <img src={pinterest} alt="facebook" className='media'/>
            <img src={tw} alt="facebook" className='media'/>
        </div>
        <div className="item2">
            <ul>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Careers</a>
                </li>
                <li>
                    <a href="">Events</a>
                </li>
                <li>
                    <a href="">Products</a>
                </li>
                <li>
                    <a href="">Support</a>
                </li>
            </ul>
        </div>
        <div className="item4">    
           <p> &copy; {year} Loostudios. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;

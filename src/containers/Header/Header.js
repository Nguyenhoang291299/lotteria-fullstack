import './Header.scss';
import {Component} from 'react';
import { BsPerson, BsBell, BsBag, BsGeoAlt } from 'react-icons/bs';
import logo from "../../images/lotteria_logo.svg";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container container">
                    <div className="header-content row">
                        <div className="left-content col-lg-1">
                            <a href="/">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div className="center-content col-lg-8">
                            <ul>
                                <li><a href="/">promotion</a></li>
                                <li><a href="/">order now</a></li>
                                <li><a href="/">birthday</a></li>
                                <li><a href="/">store</a></li>
                            </ul>
                        </div>
                        <div className="right-content col-lg-3">
                            <div className="block-info row">
                                <div className="language col-6">
                                    <form>
                                        <select>
                                            <option className="icon-flag-vn" value="Vietnamese">Tiếng việt</option>
                                            <option className="icon-flag-en" value="English">English</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="download-app col-6"><span>download app</span></div>
                            </div>
                            <div className="account-menu">
                                <ul>
                                    <li><a href=""><BsGeoAlt /></a></li>
                                    <li><a href=""><BsPerson /></a></li>
                                    <li><a href=""><BsBell /></a></li>
                                    <li><a href=""><BsBag/></a></li>
                                </ul>
                            </div>   
                        </div>
                    </div>
                </div>
            </header>
            
        )
    }
}

export default Header
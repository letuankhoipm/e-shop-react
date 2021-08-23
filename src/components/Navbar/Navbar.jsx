import React from 'react';
import './Navbar.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavbarMobile from "../NavbarMobile/NavbarMobile";



class NavbarMain extends React.Component {
    render() {
        return (
            <div>
                <NavbarMobile></NavbarMobile>
                <div className="tt-navbar pt-2 text-center d-none d-sm-block">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <img className="pb-2 pt-1 tt-logo" src={`${process.env.PUBLIC_URL}/assets/images/em.svg`} alt="tt-logo" />
                            </div>
                            <div className="col-6 tt-list-nav text-center my-auto">
                                <ul className="tt-nav m-0 p-0">
                                    <li className="tt-nav-item px-4">
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li className="tt-nav-item px-4">
                                        <Link to="/products">Sản phẩm</Link>
                                    </li>

                                    <li className="tt-nav-item px-4">
                                        <Link to="/contact">Liên lạc</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3 text-center">
                                <ul className="tt-nav">
                                    <li className="tt-nav-icon px-2">
                                        <button className="btn-icon c-pointer text-white">
                                            <i className="fas fa-search" />
                                        </button>
                                    </li>
                                    <li className="tt-nav-icon px-2">
                                        <button className="btn-icon c-pointer text-white">
                                            <i className="fas fa-shopping-bag" />
                                        </button>
                                    </li>
                                    <li className="tt-nav-icon px-2">
                                        <button className="btn-icon c-pointer text-white">
                                            <i className="fas fa-paper-plane" />
                                        </button>
                                    </li>
                                    <li className="tt-nav-icon px-2">
                                        <button className="btn-icon c-pointer text-white">
                                            <i className="fas fa-bars" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div >
                    </div >
                </div>
            </div >
        );
    }
}

export default NavbarMain
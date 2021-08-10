import React from 'react';
import './Navbar.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



class NavbarMain extends React.Component {
    render() {
        return (
            <div className="tt-navbar pt-4 text-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 tt-logo">
                            <img className="pt-2" src={`${process.env.PUBLIC_URL}/assets/images/logo-black.png`} alt="tt-logo" />
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
                                    <Link to="/products">Thông tin</Link>
                                </li>
                                <li className="tt-nav-item px-4">
                                    <Link to="/products">Liên lạc</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3 text-right">
                            <ul className="tt-nav">
                                <li className="tt-nav-icon px-2">
                                    <button className="btn-icon c-pointer">
                                        <i className="fas fa-search" />
                                    </button>
                                </li>
                                <li className="tt-nav-icon px-2">
                                    <button className="btn-icon c-pointer">
                                        <i className="fas fa-shopping-bag" />
                                    </button>
                                </li>
                                <li className="tt-nav-icon px-2">
                                    <button className="btn-icon c-pointer">
                                        <i className="fas fa-paper-plane" />
                                    </button>
                                </li>
                                <li className="tt-nav-icon px-2">
                                    <button className="btn-icon c-pointer">
                                        <i className="fas fa-bars" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}

export default NavbarMain
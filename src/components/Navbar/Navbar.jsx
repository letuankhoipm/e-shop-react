import React from 'react';
import './Navbar.scss';



class NavbarMain extends React.Component {
    render() {
        return (
            <div className="tt-navbar pt-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 tt-logo">
                            <img className="pt-2" src={`${process.env.PUBLIC_URL}/assets/images/logo-black.png`} alt="tt-logo" />
                        </div>
                        <div className="col-6 tt-list-nav text-center my-auto">
                            <ul className="tt-nav m-0 p-0">
                                <li className="tt-nav-item px-4">
                                    <span className="c-pointer">
                                        trang chủ
                                    </span>
                                </li>
                                <li className="tt-nav-item px-4">
                                    <span className="c-pointer">
                                        sản phẩm
                                    </span>
                                </li>
                                <li className="tt-nav-item px-4">
                                    <span className="c-pointer">
                                        thông tin
                                    </span>
                                </li>
                                <li className="tt-nav-item px-4">
                                    <span className="c-pointer">
                                        liên lạc
                                    </span>
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
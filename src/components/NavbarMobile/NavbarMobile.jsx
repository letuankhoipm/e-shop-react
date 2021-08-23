import React, { useState } from 'react'
import './NavbarMobile.scss';
import Modal from 'react-bootstrap/Modal';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default class NavbarMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalRef: false
        }
    }
    render() {
        const handleClose = () => {
            this.setState({ modalRef: false });
        }

        const handleOpen = () => {
            this.setState({ modalRef: true });
        }
        return (
            <div>
                <div className="tt-mobile-navbar d-block d-sm-none position-fixed" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/a2.jpg'})` }}>
                    <div className="container-fluid h-100">
                        <div className="row h-100 tt-shadow">
                            <div className="col-12 text-center my-auto">
                                <img className="tt-mobile-logo my-4" src={`${process.env.PUBLIC_URL}/assets/images/sign-w.png`} alt="tt-logo" />
                                <button onClick={handleOpen} className="btn-tt btn-tt-outline my-4">
                                    khám phá ngay
                                </button>
                                <h5 style={{ fontSize: `3rem` }} className="tt-curve mt-4 pt-4 text-white">
                                    Tiếu-tiếu Store
                                </h5>
                                <img className="mt-4 w-25" src={`${process.env.PUBLIC_URL}/assets/images/em.svg`} alt="tt-logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tt-nav-modal">
                    <Modal className="tt-nm" show={this.state.modalRef} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <img className="w-25" src={`${process.env.PUBLIC_URL}/assets/images/bem.svg`} alt="tt-logo" />
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center">
                            <div className="container h-100">
                                <div className="row h-100">
                                    <div className="col-12 my-auto">
                                        <p className="my-4">
                                            <button onClick={handleClose} className="btn-tt btn-tt-underline">
                                                <Link to="/">Trang chủ</Link>
                                            </button>
                                        </p>
                                        <p className="my-4">
                                            <button onClick={handleClose} className="btn-tt btn-tt-underline">
                                                <Link to="/products">Sản phẩm</Link>
                                            </button>
                                        </p>
                                        <p className="my-4">
                                            <button onClick={handleClose} className="btn-tt btn-tt-underline">
                                                <Link to="/contact">Liên lạc</Link>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        )
    }
}
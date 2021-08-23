import React from 'react';
import './NavbarMobile.scss';

export default class NavbarMobile extends React.Component {
    render() {
        return (
            <div className="tt-mobile-navbar d-block d-sm-none position-fixed" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/a2.jpg'})` }}>
                <div className="container-fluid h-100">
                    <div className="row h-100 tt-shadow">
                        <div className="col-12 text-center my-auto">
                            <img className="tt-mobile-logo my-4" src={`${process.env.PUBLIC_URL}/assets/images/sign-w.png`} alt="tt-logo" />
                            <div className="btn-tt btn-tt-outline my-4">
                                khám phá ngay
                            </div>
                            <h5 style={{ fontSize: `3rem` }} className="tt-curve mt-4 pt-4 text-white">
                                Tiếu-tiếu Store
                            </h5>
                            <img className="mt-4 w-25" src={`${process.env.PUBLIC_URL}/assets/images/em.svg`} alt="tt-logo" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
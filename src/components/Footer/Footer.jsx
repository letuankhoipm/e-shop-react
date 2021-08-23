import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="tt-footer-main  d-none d-sm-block" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/bem.svg'})` }}>
                <div className="tt-footer" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-3 tt-footer-logo">
                                <img src="assets/images/logo-black.png" alt="logo" className="w-75" />
                                <p className="mt-4">
                                    Hãy để chính bạn làm tôn lên vẻ đẹp của mình.
                                </p>
                            </div>
                            <div className="col-12 col-sm-3 text-center">
                                <p className="font-weight-bold">
                                    MUA SẮM
                                </p>
                                <p>
                                    Sản phẩm
                                </p>
                                <p>
                                    Bộ sưu tập
                                </p>
                            </div>
                            <div className="col-12 col-sm-3 text-center">
                                <p className="font-weight-bold">
                                    VỀ CHÚNG TÔI
                                </p>
                                <p>
                                    Thông tin
                                </p>
                                <p>
                                    Liên lạc
                                </p>
                            </div>
                            <div className="col-12 col-sm-3">
                                <p className="font-weight-bold tt-curve">
                                    Đăng ký để nhận tin
                                </p>
                                <div className="tt-newsletter">
                                    <div className="form-group">
                                        <input type="email" aria-describedby="emailHelp" placeholder="Địa chỉ email" />
                                    </div>
                                </div>
                                <ul className="tt-nav mt-4 p-0">
                                    <li className="tt-nav-item px-4">
                                        <button className="btn-icon">
                                            <i className="fab fa-facebook-square" />
                                        </button>
                                    </li>
                                    <li className="tt-nav-item px-4">
                                        <button className="btn-icon">
                                            <i className="fab fa-youtube" />
                                        </button>
                                    </li>
                                    <li className="tt-nav-item px-4">
                                        <button className="btn-icon">
                                            <i className="fab fa-instagram" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-dark">
                    <div className="tt-sign">
                        <p className="text-right p-4 m-0">
                            letuankhoi@designer , July 2021
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
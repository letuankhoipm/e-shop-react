import React from 'react'

export class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <div className="tt-header y-4">
                    <div className="tt-banner-prod h-100">
                        <img className="w-100 g-100 tt-banner-img" src={`${process.env.PUBLIC_URL}/assets/images/contact.jpg`} alt="#" />
                    </div>
                </div>
                <div className="tt-contact">
                    <div className="tt-contact-body px-4">
                        <div className="container-fluid px-4">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="tt-section mb-4">
                                        <p className="text-uppercase">
                                            ai cũng phải đẹp
                                        </p>
                                        <h1 className="tt-font-curve font-weight-bold">
                                            Tôn vinh làn da của bạn
                                        </h1>
                                        <p>
                                            Hãy đến với chúng tôi, nơi cung cấp những sản phẩm dưỡng da tốt nhất hiện nay.
                                        </p>
                                    </div>
                                    <br />
                                    <div className="tt-section mt-4">
                                        <h5 className="tt-curve font-weight-bold">
                                            Địa chỉ
                                        </h5>
                                        <hr />
                                        <p className="m-0">
                                        </p>
                                        <p className="m-0">
                                        </p>
                                        <p className="m-0">
                                        </p>
                                    </div>
                                    <br />
                                    <div className="tt-section">
                                        <h5 className="tt-curve font-weight-bold">
                                            Liên lạc
                                        </h5>
                                        <hr />
                                        <p className="m-0">
                                        </p>
                                        <p className="m-0">
                                        </p>
                                        <p className="m-0">
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <form className="mt-4">
                                        <div className="form-group my-2">
                                            <input type="email" aria-describedby="emailHelp" placeholder="Tên" />
                                        </div>
                                        <div className="form-group my-2">
                                            <input type="email" aria-describedby="emailHelp" placeholder="Địa chỉ email" />
                                        </div>
                                        <div className="form-group my-4">
                                            <textarea placeholder="Tin nhắn" style={{ height: '150px' }} className="w-100" defaultValue={""} />
                                        </div>
                                    </form>
                                    <p className="text-right mt-4">
                                        <button className="btn-tt btn-tt-black">
                                            Gửi
                                        </button>
                                    </p>
                                    <ul className="tt-nav m-0 p-0">
                                        <li className="tt-nav-item px-4">
                                            <button className="btn-icon">
                                                <i className="fab fa-facebook-square" />
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
                </div >
            </div >
        )
    }
}

export default ContactPage;
import React from 'react';
import './About.scss';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="tt-about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="font-weight-bold text-right my-4 tt-font-curve">
                                Thế giới mỹ phẫm của bạn
                            </h1>
                            <p className="justify-content text-right">
                                Chào mừng đến với TIẾU TIẾU STORE – Nơi mang đến vẻ đẹp, theo đuổi sự xinh đẹp, sở hữu vẻ đẹp và giá trị riêng của bản thân chưa chạm tới.
                                Ở đây, tôi mong muốn mang đến cho quý khách hàng của mình những sản phẩm tốt nhất, chất lượng tốt – giá tốt nhất thị trường, góp phần cải thiện vẻ đẹp khuyết thiếu, giúp nét đẹp bạn tự tin hơn, tỏa sáng hơn. Luôn tôn trọng và lắng nghe, chia sẻ cùng khách hàng.
                                <br />
                                TIẾU TIẾU STORE mong muốn xây dựng thành công thương hiệu riêng của bản thân và sẽ cố gắng hết mình, đem đến sản phẩm tốt nhất về mọi mặt đến phái đẹp.
                                Cảm ơn quý khách hàng đã ghé thăm và hẹn gặp lại quý khách.
                            </p>
                            <img className="mt-4 w-25" src={`${process.env.PUBLIC_URL}/assets/images/sign.png`} alt="" />
                            <p className="text-right">
                                <span className="tt-ntk">Tiếu Ngân</span>
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default AboutUs
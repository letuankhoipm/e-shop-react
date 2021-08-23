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
                            <p>
                                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
                            </p>
                            <img className="mt-4 w-25" src={`${process.env.PUBLIC_URL}/assets/images/sign.png`} alt="" />
                            <p className="text-right">
                                <span className="tt-ntk">Tiếu Ngân</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs
import React from 'react';
import './About.scss';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="tt-about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img className="tt-flower" src="https://free.vector6.com/wp-content/uploads/2021/03/0000000020-hoa-tiet-vong-nguyet-que-trang-tri-png-3.png" alt="" />
                            <h1 className="font-weight-bold my-4">
                                Thế giới mỹ phẫm của bạn
                            </h1>
                            <p>
                                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
                            </p>
                            <img className="mt-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cristiano_Ronaldo_Signature.svg/399px-Cristiano_Ronaldo_Signature.svg.png" alt="" />
                            <p className="text-right">
                                <strong>NTK. </strong>
                                Holika Holika
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs
import React from 'react';
import './Banner.scss';

class AdvertiseBanner extends React.Component {
    render() {
        return (
            <div className="tt-banner d-none d-sm-block">
                <div className="tt-advertise">
                    <img className="w-100 tt-banner-img" src="https://content.cdn.epictv.com/adidasoutdoor_banner.jpg" alt="#" />
                </div>
            </div>
        )
    }
}

export default AdvertiseBanner
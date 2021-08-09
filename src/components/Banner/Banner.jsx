import React from 'react'
import './Banner.scss';
import firebase from '../../firebase';
import CoreService from "../../services/core.service";


class AdvertiseBanner extends React.Component {
    constructor(props) {
        super(props);
        this.ref = CoreService.onGetCollection('banner');
        this.subscribe = null;
        this.state = {
            banner: []
        };
    }

    onHandleData = (querySnapshot) => {
        const banner = [];
        CoreService.onHandlingData(querySnapshot, { imageUrl: null, name: null }, banner);
        this.setState({
            banner
        })
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onHandleData);
    }


    render() {

        return (
            <div className="tt-banner d-none d-sm-block">
                {this.state.banner.map(banner =>
                    <div div className="tt-advertise">
                        <img className="w-100 tt-banner-img" src={banner.imageUrl} alt="#" />
                    </div>
                )}
            </div>
        )
    }
}

export default AdvertiseBanner
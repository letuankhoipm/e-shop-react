import React from 'react'
import './Banner.scss';
import firebase from '../../firebase';


class AdvertiseBanner extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('banner')
        this.subscribe = null;
        this.state = {
            banner: []
        };
    }

    onHandleData = (querySnapshot) => {
        const banner = [];
        querySnapshot.forEach((doc) => {
            const { imageUrl, name } = doc.data();
            banner.push({
                key: doc.id,
                doc,
                imageUrl,
                name
            });
        });
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
                {this.state.banner.map(banner => <div>{banner.name}</div>)}
                <div className="tt-advertise">
                    <img className="w-100 tt-banner-img" src="https://content.cdn.epictv.com/adidasoutdoor_banner.jpg" alt="#" />
                </div>
            </div>
        )
    }
}

export default AdvertiseBanner
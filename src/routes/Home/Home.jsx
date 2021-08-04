import React from 'react'
import CarouselItem from '../../components/Carousel/Carousel';
import AdvertiseBanner from '../../components/Banner/Banner';

class HomePage extends React.Component {
    render() {
        return (
            <div className="tt-home-page">
                <section className="tt-carousel">
                    <CarouselItem></CarouselItem>
                </section>
                <section className="tt-banner-ad my-4">
                    <AdvertiseBanner></AdvertiseBanner>
                </section>
            </div>
        )
    }
}

export default HomePage
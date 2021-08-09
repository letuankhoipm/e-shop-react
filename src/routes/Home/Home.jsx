import React from 'react'
import CarouselItem from '../../components/Carousel/Carousel';
import AdvertiseBanner from '../../components/Banner/Banner';
import GalleryImage from '../../components/Gallery/Gallery';
import AboutUs from '../../components/About/About';

class HomePage extends React.Component {
    render() {
        // const data = ProductService.getProducts();
        // console.log(data);
        return (
            <div className="tt-home-page">
                <section className="tt-carousel mb-4">
                    <CarouselItem></CarouselItem>
                </section>
                <section className="tt-about mb-4">
                    <AboutUs></AboutUs>
                </section>
                <section className="tt-banner-ad mb-4">
                    <AdvertiseBanner></AdvertiseBanner>
                </section>
                <section className="tt-gallery mb-4">
                    <GalleryImage></GalleryImage>
                </section>
            </div>
        )
    }
}

export default HomePage
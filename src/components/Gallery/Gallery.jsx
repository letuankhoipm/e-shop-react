import React from 'react'
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import CoreService from "../../services/core.service";

class GalleryImage extends React.Component {
    constructor(props) {
        super(props);
        this.ref = CoreService.onGetCollection('gallery');
        this.subscribe = null;
        this.state = {
            galleries: []
        };
    }

    onHandleData = (querySnapshot) => {
        const galleries = [];
        const galleryModal = {
            mediaUrl: null,
            metaData: {
                height: null,
                width: null,
            }
        }
        CoreService.onHandlingData(querySnapshot, galleryModal, galleries);
        this.setState({
            galleries
        })
        console.log(galleries);
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onHandleData);
    }

    render() {
        const items = [
           
            { // Another Image item:
                itemId: 'differentItem',
                mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
                metaData: {
                    type: 'image',
                    height: 200,
                    width: 500,
                    title: 'sample-title',
                    description: 'sample-description',
                    focalPoint: [0, 0],
                    link: {
                        url: 'http://example.com',
                        target: '_blank'
                    },
                }
            },
            { // Another Image item:
                itemId: 'differentItem',
                mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
                metaData: {
                    type: 'image',
                    height: 200,
                    width: 400,
                    title: 'sample-title',
                    description: 'sample-description',
                    focalPoint: [0, 0],
                    link: {
                        url: 'http://example.com',
                        target: '_blank'
                    },
                }
            },
            { // Another Image item:
                itemId: 'differentItem',
                mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
                metaData: {
                    type: 'image',
                    height: 500,
                    width: 300,
                    title: 'sample-title',
                    description: 'sample-description',
                    focalPoint: [0, 0],
                    link: {
                        url: 'http://example.com',
                        target: '_blank'
                    },
                }
            },
            { // Another Image item:
                itemId: 'differentItem',
                mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
                metaData: {
                    type: 'image',
                    height: 500,
                    width: 700,
                    title: 'sample-title',
                    description: 'sample-description',
                    focalPoint: [0, 0],
                    link: {
                        url: 'http://example.com',
                        target: '_blank'
                    },
                }
            },
            { // Another Image item:
                itemId: 'differentItem',
                mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
                metaData: {
                    type: 'image',
                    height: 500,
                    width: 1500,
                    title: 'sample-title',
                    description: 'sample-description',
                    focalPoint: [0, 0],
                    link: {
                        url: 'http://example.com',
                        target: '_blank'
                    },
                }
            },

        ];

        const options = {
            galleryLayout: 0,
            overlayAnimation: 'FADE_IN',
            imageHoverAnimation: 'ZOOM_IN',
            scrollAnimation: 'FADE_IN',
        };

        const container = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        const eventsListener = (eventName, eventData) => console.log();

        const scrollingElement = window;
        return (
            <div className="tt-gallery text-center py-4 my-4">
                <div className="container">
                    <div className="row">
                        <hr />
                        <h1 className="font-weight-bold text-right my-4 tt-font-curve">
                            Thư viện hình ảnh
                        </h1>
                        <p className="text-right">Những hình ảnh sinh động nhất về thế giới mỹ phẩm.</p>
                    </div>
                </div>
                <ProGallery
                    items={this.state.galleries}
                    options={options}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}

                />
                <div className="container">
                    <div className="row">
                        <hr className="mt-4" />
                    </div>
                </div>

            </div>
        )
    }
}

export default GalleryImage
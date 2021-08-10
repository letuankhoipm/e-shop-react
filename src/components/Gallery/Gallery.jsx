import React from 'react'
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

class GalleryImage extends React.Component {
    render() {
        const items = [
            { // Image item:
                itemId: 'sample-id',
                mediaUrl: 'https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY',
                metaData: {
                    type: 'image',
                    height: 200,
                    width: 100,
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

        const eventsListener = (eventName, eventData) => console.log({ eventName, eventData });

        const scrollingElement = window;
        return (
            <div className="tt-gallery text-center py-4 my-4">
                <ProGallery
                    items={items}
                    options={options}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}

                />
            </div>
        )
    }
}

export default GalleryImage
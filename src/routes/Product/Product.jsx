import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import CoreService from "../../services/core.service";
import "./Product.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.ref = CoreService.onGetCollection('production');
        this.subscribe = null;
        this.state = {
            products: []
        };
    }

    onHandleData = (querySnapshot) => {
        const products = [];
        const productModel = {
            brand: null,
            description: null,
            id: null,
            imageUrl: null,
            name: null,
            origin: null,
            price: null
        }
        CoreService.onHandlingData(querySnapshot, productModel, products);
        this.setState({
            products
        })
        console.log(products);
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onHandleData);
    }

    render() {
        return (
            <div className="tt-product">
                <div className="tt-header y-4">
                    <div className="tt-banner-prod h-100 text-center">
                        <img className="w-100 g-100 tt-banner-img" src={`${process.env.PUBLIC_URL}/assets/images/banner.jpg`} alt="#" />
                        <h1 style={{ fontSize: `10rem` }} className="tt-title-banner text-white text-center d-none d-sm-block">
                            Bộ sưu tập
                        </h1>
                        <img className="tt-title-banner tt-em text-center mt-4 w-25 d-block d-sm-none" src={`${process.env.PUBLIC_URL}/assets/images/em.svg`} alt="tt-logo" />
                        <h5 style={{ fontSize: `4rem` }} className="tt-title-banner tt-curve text-center text-white d-block d-sm-none">
                            Bộ sưu tập
                        </h5>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-4 pb-4">
                            <h3 className="font-weight-bold tt-hot tt-font-curve">
                                Nổi bật
                            </h3>
                            <hr />
                            <p className="my-4 text-right d-block d-sm-none">
                                <button style={{ marginRight: `1rem` }} className="btn-tt btn-tt-underline">
                                    <Link to="/">Trang chủ</Link>
                                </button>
                                <button style={{ marginleft: `1rem` }} className="btn-tt btn-tt-underline">
                                    <Link to="/contact">Liên lạc</Link>
                                </button>
                            </p>
                        </div>
                        {this.state.products.map(product =>
                            <div className="col-12 col-sm-4 mb-4">
                                <ProductCard product={product} />
                            </div>
                        )}
                    </div>
                    <hr />
                </div>
            </div >
        )
    }
}

export default Product
import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import CoreService from "../../services/core.service";

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
                    <div className="text-white p-4">
                        <p>
                            Trang chủ /
                            <strong>
                                Sản phẩm
                            </strong>
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-4 pb-4">
                            <h1 className="tt-title">
                                SẢN PHẨM
                            </h1>
                        </div>
                        {this.state.products.map(product =>
                            <div className="col-12 col-sm-4 mb-4">
                                <ProductCard product={product} />
                            </div>
                        )}
                    </div>
                </div>
            </div >
        )
    }
}

export default Product
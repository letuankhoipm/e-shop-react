import React from 'react';
import "./ProductCard.scss";

class ProductCard extends React.Component {
    render() {
        return (
            <div className="product-card">
                <div className="card tt-card">
                    <img className="card-img-top tt-img-card mt-1" src={this.props.product.imageUrl} alt="product" />
                    <div className="card-body">
                        <h5 className="font-weight-bold text-center">
                            {this.props.product.name}
                        </h5>
                        <p className="card-text">
                            {this.props.product.shortDescription}
                        </p>
                        <p className="text-center">
                            <strong className="mr-2">$</strong>
                            <span>
                                {this.props.product.price}
                            </span>
                        </p>
                        <p className="text-left">
                            <span>
                                Xuất xứ:
                                <strong className="px-2">
                                    {this.props.product.origin}
                                </strong>
                            </span>
                        </p>
                        <p className="text-left">
                            <span>
                                Thương hiệu:
                                <strong className="px-2">
                                    {this.props.product.brand}
                                </strong>
                            </span>
                        </p>
                    </div>
                    <div className="tt-card-shadow">
                        <div className="text-center tt-card-shadow-content">
                            <p className="card-text p-4">
                                {this.props.product.description}
                            </p>
                        </div>
                    </div>
                    <div className="tt-prod-hover container ">
                        <div className="row h-100">
                            <div className="col-12 my-auto text-center">
                                <button className="btn-icon text-white mx-2">
                                    <i className="fas fa-heart" />
                                </button>
                                <button className="btn-icon text-white mx-2">
                                    <i className="fas fa-shopping-bag" />
                                </button>
                                <button className="btn-icon text-white mx-2">
                                    <i className="fas fa-eye" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ProductCard
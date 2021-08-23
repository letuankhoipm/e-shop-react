import React from 'react';
import "./ProductCard.scss";

class ProductCard extends React.Component {
    render() {
        return (
            <div className="product-card">
                <div className="card tt-card rounded-0">
                    <img className="card-img-top rounded-0 tt-img-card" src={this.props.product.imageUrl} alt="product" />

                    <div className="card-body">
                        <h5 className="f-bold text-uppercase text-center">
                            {this.props.product.name}
                        </h5>
                        <hr />
                        <p className="text-right tt-curve">
                            <strong className="mr-2">$</strong>
                            <span>
                                {this.props.product.price}
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
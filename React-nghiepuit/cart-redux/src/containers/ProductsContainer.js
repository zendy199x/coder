import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props; //this.props.products
        return(
            <Products products={ products }/>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(Products);

import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
        	<div>
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                	<div className="thumbnail">
                		<img alt="iphone 6" src="https://haotuanmobile.com/wp-content/uploads/2019/04/IP-XS-MAX-GOLD-500x554.jpg" />
                		<div className="caption">
                			<h3>iPhone XS Max</h3>
                			<p>
                				16.000.000 VND
                			</p>
                		</div>
                	</div>
                	<button type="button" className="btn btn-success">Buy</button>
                </div>
            </div>
            
            </div>
        );
    }
}

export default Product;

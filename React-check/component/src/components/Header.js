import React, {Component} from 'react';


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
            	<div className="container-fluid">
            		<a className="navbar-brand">Component</a>
            		<ul className="nav navbar-nav">
            			<li className="active">
            				<a>Home</a>
            			</li>
            			<li>
            				<a>List</a>
            			</li>
            		</ul>
            	</div>
            </nav>
        )
    }
}

export default Header;

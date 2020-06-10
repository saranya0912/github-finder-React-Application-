import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({iconname,titleofapp}) => {
    
    
        return(
            <nav className=" Navbar bg-primary">
                <h1><i className= {iconname}/>  {titleofapp}</h1>
                <ul>
                   
                    <Link to="/" className='bg-primary'>Home   </Link>
                   
                    <Link to="/About" className='bg-primary'>About</Link>
                   
                </ul>
                
            </nav>
        );
    
}
Navbar.defaultProps = {
    titlename: 'Github Finder',
    iconname: 'fab fa-github'

};
Navbar.propTypes = {
    titlename: PropTypes.string.isRequired,
    iconname: PropTypes.string.isRequired
};
export default Navbar;
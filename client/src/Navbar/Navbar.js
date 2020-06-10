import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../actions/auth'
import './style.css'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (
        <div>
            <span><Link to='/menu'>Menu</Link></span>
            <span><Link to='/Kitchen'>Kitchen</Link></span>

            <span><a onClick={logout} href='#!'>{' '}Logout</a></span>
        </div>
    );

    const guestLinks = (
        <div>
            <span><Link to='/Signup'>Register</Link></span>
            <span><Link to='/Signin'>Login</Link></span>
        </div>
    );

    return (
        <>
            <nav className="nav">
                <div>
                    <h1 className='eat' ><Link to='/'>EatSina</Link></h1>
                    {!loading && (
                        <div className='signs'>{isAuthenticated ? authLinks : guestLinks}</div>
                    )}
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
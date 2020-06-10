import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth'
import './style.css'


const Signin = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        login({email, password});
    };

    if (isAuthenticated) {
        return <Redirect to="/Menu" />;
      }

    return (
        <div className='sign'>
            <h1>Login to Your Account</h1>
            <form onSubmit={onSubmit}>

                <div className="">
                    <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="">
                    <input
                        type="password"
                        placeholder="Create Your Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <input type="submit" className="" value="Login" />
            </form>
            <p className="">
                Do not have an account? <Link to="/Signup">Register</Link>
            </p>
        </div>
    )
}

Signin.prototype = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, { login })(Signin);

import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert'
import { signup } from '../actions/auth'
import PropTypes from 'prop-types'
import './style.css'

// import axios from 'axios';



const Signup = ({ setAlert, signup, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Password do not match', 'danger');
        } else {
            signup({ name, email, password })
            // console.log('seccess')
            //     const newUser = {
            //         name,
            //         email,
            //         password
            //     }
            //     try {
            //         const config={
            //             headers:{
            //                 'Content-Type': 'application/json'
            //             }
            //         }
            //         const body = JSON.stringify(newUser);
            //         const res = await axios.post('/api/users', body, config)
            //         console.log(res.data);
            //     }catch(err){
            //         console.err(err.response.data)
            //     }
        }
    };

    if (isAuthenticated) {
        return <Redirect to="/Singin" />;
      }

    return (
        <div className='sign'>
            <h1>Create Your Account</h1>
            <form onSubmit={onSubmit}>
                <div className="">
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                </div>
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
                <div className="">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={onChange}

                    />
                </div>
                <input type="submit" className="" value="Register" />
            </form>
            <p className="">
                Already have an account? <Link to="/signin">Sign In</Link>
            </p>
        </div>
    )
}

Signup.prototype = {
    setAlert: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
export default connect(mapStateToProps, { setAlert, signup })(Signup);

import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';




const Signin = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('SUCCESS')

    };


return (
    <Fragment>
        <h1>Log In to Your Account</h1>
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
    </Fragment>
)
}

export default connect()(Signin);

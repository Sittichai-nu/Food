import React from 'react'
import { Link } from 'react-router-dom';


const Signin = () => {
    return (
        <React.Fragment>
            <h1>Login</h1>
            <form>
                <div>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Enter your password'
                        name='password'
                    />
                </div>
            </form>
            <p className="">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </React.Fragment>
    )
}

export default Signin

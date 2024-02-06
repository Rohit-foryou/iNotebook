import React, { useState } from 'react'

const Login = () => {
    const [credentials, setCredentials] = useState({email:"",password:""});
    const handleSubmit = async (e) => {
        e.prevent.default(); //this is for if we click on submit then it will not reload the page
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const json = await response.json();
        console.log(json);
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value }) //it will update the description and title

    }
    return (
        <div>
            {/* on submit is alway on form not on submit button */}
            <form onSubmit={handleSubmit}>
                <div className="mb-3" >
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" bane="email" aria-describedby="emailHelp" value={Credentials.email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={Credentials.password} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login

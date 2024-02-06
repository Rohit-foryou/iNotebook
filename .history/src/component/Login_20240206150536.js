import React from 'react'

const Login = () => {
    const handleSubmit= async(e)=>{
        e.prevent.default(); //this is for if we click on submit then it will not reload the page
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        console.log(json);
    }
  return (
    <div>
      <form>
        <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" bane="email" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" id="password"/>
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Login

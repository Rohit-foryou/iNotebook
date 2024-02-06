import React from 'react'

const Login = () => {
    const handleSubmit= async(e)=>{
        e.prevent.default(); //this is for if we click on submit then it will not reload the page
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZmFmOWMzOWFlZmVkNWEyZDVhNDE0In0sImlhdCI6MTcwNzA2MTE3MH0.hTDhcFZzdTCN61yvcDX_If3J1qs5UmCrIgv_EFFGXnQ"
            },
        });
    }
  return (
    <div>
      <form>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" bane="email" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" name="password" id="password"/>
        </div>
        <button type="submit" class="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Login

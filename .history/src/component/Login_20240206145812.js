import React from 'react'

const Login = () => {
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
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login

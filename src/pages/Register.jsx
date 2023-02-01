import React, { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
  e.preventDefault();
  const response = await fetch("http://localhost:4000/register", {
    method: "POST",
    body: JSON.stringify({username, password}),
    headers: {'Content-Type': 'application/json'},
  });
  if(response.status !== 200) {
    alert("Could not register");
  } else {
    alert("Register Successful");
  }
}

return (
  <form
    className='register'
    onSubmit={register}
    >
    <h1>Register</h1>
    <input
      type="text"
      placeholder='username'
      value={username}
      onChange={e => setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder='password'
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
    <button>Login</button>
  </form>
)
}

export default Register
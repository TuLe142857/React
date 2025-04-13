import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { apiInstance, setToken, removeToken } from './utils/InstanceAxios'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [api, setApi] = useState("")
  const [jwt, setJwt] = useState("")
  function login() {

    axios.post("http://localhost:8080/api/login", { username: username, password: password }).then(
      response => {
        let data = response.data
        setText(JSON.stringify(data,null, 4))
        setToken(data["token"])
        setJwt(data["token"])
      }
    ).catch(error => {
      setText("Error: " + error.message);
    }

    )
    console.log("hi")
  }
  function logout(){
    removeToken()
    setUsername("")
    setPassword("")
    setJwt("")
  }

  function callAPI() {
    apiInstance.get(api).then(
      response => {
        let data = response.data
        setText(JSON.stringify(data, null, 4))
      }
    ).catch(error => {
      setText("Error: " + error.message);
    })

  }
  return (
    <>
      <div >

        <p>token:{jwt}</p>
        <input type='text' placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}>
        </input>
        <br />
        <input type='text' placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
        <br />
        <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
        <br />

        <input type='text' placeholder='api' value={api}
          onChange={(e) => setApi(e.target.value)}></input>
        <br />
        <button onClick={callAPI}>send api(get)</button>
        <br />
        <pre style={{ textAlign: 'left' }}>RESULT: {text}</pre>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

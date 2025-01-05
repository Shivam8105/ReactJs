import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2 className='font-bold p-2'>Login</h2>
        <input className="p-1 border-white" type="text"
        value={username}
        placeholder='username'
        onChange={(e) => 
            setUsername(e.target.value)
        } />
        {"   "}
        <input className="p-1 border-white" type="text"
        value={password}
        placeholder='password'
        onChange={(e) => 
            setPassword(e.target.value)
        } />
        <button className='m-4' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
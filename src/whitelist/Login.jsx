import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from '../media/Ventor_Logo.svg'

const axiosWithHeaders = (payload) =>{

    return axios.create({
        headers:{
            username:payload.username,
            password:payload.password
        }
    })
} 
    
const Login = (props) => {

    const [payload, setPayload] = useState(
        {
            username: '',
            password: ''  
        }
    )

    const handleChanges = e => {
        e.preventDefault()
        setPayload({
            ...payload,
            [e.target.name]: e.target.value
        });
    }
    const submit = e => {
        e.preventDefault()
        
        axiosWithHeaders(payload)
            .post('https://ventor-api.herokuapp.com/login')
            .then(res => {
                console.log(res)
                props.setLoggedIn(true)
                window.localStorage.setItem('token', res.data.token)
                alert(res.data.messege)
                props.history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <form className='form login' onSubmit={submit}>
            <div className="topbar">
            <img src={Logo}/>
            </div>
            <input
                name='username'
                onChange={handleChanges}
                placeholder='username'
                value={payload.username}
            />
             <input
                name='password'
                type='password'
                onChange={handleChanges}
                placeholder='password'
                value={payload.password}
            />
            <button>Log In</button>
        </form>
    )
}

export default Login
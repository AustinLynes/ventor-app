import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from '../media/Ventor_Logo.svg'

const Register = () => {

    const [payload, setPayload] = useState(
        {
            name: '',
            username: '',
            password: '',
            isAdmin: 0
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
        axios
            .post('https://ventor-api.herokuapp.com/register', payload)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <form className='form register' onSubmit={submit}>
            <div className="topbar">
                <img src={Logo} />
            </div>

            <input
                name='name'
                onChange={handleChanges}
                placeholder='name'
                value={payload.name}
            />
            <input
                name='username'
                onChange={handleChanges}
                placeholder='username'
                value={payload.username}
            />
            <input
                name='email'
                type='email'
                onChange={handleChanges}
                placeholder='email'
                value={payload.email}
            />
            <input
                name='password'
                type='password'
                onChange={handleChanges}
                placeholder='password'
                value={payload.password}
            />


            <button>Log In</button>
            <button>Cancel</button>
        </form>
    )
}

export default Register
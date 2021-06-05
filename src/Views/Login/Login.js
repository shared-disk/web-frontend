import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css'

export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory()

    const Login = () => {
        axios({
            method: 'post',
            url: '/web/auth',
            withCredentials: false,
            data: {
                email: email,
                password: password
            }
        })
        .then(response => {
            localStorage.setItem('user_id', response.data.id)
            localStorage.setItem('isManager', response.data.ismanager)
            history.push('/')
            window.location.reload()
        })
        .catch(err => {
            console.warn(err)
        })
    }

    return(
        <div className='login-view'>
            <div className='input-container'>
                <h2 className='login-h'>Авторизация</h2>
                <input onChange={e => setEmail(e.target.value)} type='text' placeholder='Электронная почта'/>
                <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Пароль'/>
                <button type='button' onClick={() => Login()}>Войти</button>
                <Link className='login-register' to='/register'> Зарегистрироваться</Link>
            </div>
        </div>
    )
}
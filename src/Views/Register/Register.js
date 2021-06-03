import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './Register.css'


export default function Register() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [middleName, setMiddleName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory()

    const Register = () => {
        axios({
            method: 'post',
            url: '/registration/customer',
            withCredentials: false,
            data: {
                first_name: firstName,
                middle_name: middleName,
                last_name: lastName,
                email: email,
                password: email
            }
        })
        .then(() => {
            history.push('/')
        })
        .catch(err => {
            console.warn(err)
        })
    }

    return(
        <div className='login-view'>
            <div className='input-container'>
                <h2 className='login-h'>Регистрация</h2>
                <input onChange={e => setFirstName(e.target.value)} type='text' placeholder='Имя'/>
                <input onChange={e => setLastName(e.target.value)} type='text' placeholder='Фамилия'/>
                <input onChange={e => setMiddleName(e.target.value)} type='text' placeholder='Отчество'/>
                <input onChange={e => setEmail(e.target.value)} type='text' placeholder='Почта'/>
                <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Пароль'/>
                <button type='button' onClick={() => Register()}>Войти</button>
                <p>Уже зарегистрированы? 
                <Link className='login-register' to='/'> Авторизоваться</Link>
                </p>
            </div>
        </div>
    )
}
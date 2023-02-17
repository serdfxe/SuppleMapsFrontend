import React, { useState } from 'react';

import Input from '../../../components/ui/Input/Input';
import Button from '../../../components/ui/Button/Button';

import AuthPage from '../AuthPage/AuthPage';
import { useNavigate } from 'react-router';
import api_url from '../../../config';


const RegisterPage = ({...props}) => {
    const navigate = useNavigate();

    const [form, setForm] = useState({"email": '', 'password': ''});

    const [message, setMessage] = useState('');

    function setFormParam(p, e) {
        form[p] = e;
        setForm(form);
    }


    function register() {
        fetch(api_url + "/auth/reg", {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, method: "POST", body:JSON.stringify(form)})
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                props.setToken(data.token)
                navigate("/app/account");
            } else {
                setMessage("Ошибка!")
            }
        })
    }


    return (
        <AuthPage>
            <h1>Регистрация</h1>
            {message !== '' ? <h3 style={{color: "var(--red)"}}>{message}</h3> : ''}
            <h3>Электронная почта</h3>
            <Input placeholder="Введите почту..." onChange={e => setFormParam('email', e.target.value)}></Input>
            <h3>Паполь</h3>
            <Input placeholder="Придумайте пароль..." type="password" onChange={e => setFormParam('password', e.target.value)}></Input>
            <Button onClick={() => register()}><h3>Зарегистрироваться</h3></Button>
            <Button empty onClick={() => navigate("/auth/signin")}><h3>Уже есть аккаунт?</h3></Button>
        </AuthPage>
    );
};

export default RegisterPage;
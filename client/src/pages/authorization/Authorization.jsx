import React from 'react';
import classes from "../authorization/Authorization.module.css"
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";

const Authorization = () => {
    return (
        <div className='container'>
            <div className={classes.authorization}>
                <form action="client/src/pages/registration/Registration" className={classes.form}>
                    <div className={classes.title}>
                        Авторизация
                    </div>
                    <MyInput
                        type='text'
                        placeholder='Логин'
                    />
                    <MyInput
                        type='password'
                        placeholder='Пароль'
                    />
                    <a href="rec_psw" style={{marginLeft: 10, color: '#00A3FF', textDecoration: 'none', margin: '0 0 15px 0', fontSize: 14, }}>Забыли пароль?</a>
                    <MyButton
                        type='submit'
                        text='Войти'
                        style={{backgroundColor: '#00A3FF', color: 'white', padding: '10px 0px'}}
                    />
                </form>
                <div className='to__reg' style={{marginTop: 25, textAlign: "center"}}>
                    Нет аккаунта?
                    <a href="reg" style={{marginLeft: 10, color: '#00A3FF', textDecoration: 'none'}}>Регистрация</a>
                </div>
            </div>
        </div>
    );
};

export default Authorization;
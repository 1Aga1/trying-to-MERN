import React from 'react';
import MyInput from '../../components/UI/input/MyInput'
import MySelect from "../../components/UI/select/MySelect";
import MyButton from "../../components/UI/button/MyButton";
import classes from './Registration.module.css'

const Registration = () => {
    return (
        <div className='container'>
            <div className={classes.registration}>
                <form action="client/src/pages/registration/Registration" className={classes.form}>
                    <div className={classes.title}>
                        Регистрация
                    </div>
                    <MyInput
                        type='text'
                        placeholder='Логин'
                    />
                    <MyInput
                        type='text'
                        placeholder='E-mail'
                    />
                    <div className={classes.fio_block}>
                        <MyInput
                            type='text'
                            placeholder='Фамилия'
                            style={{width: '26%'}}
                        />
                        <MyInput
                            type='text'
                            placeholder='Имя'
                            style={{width: '26%'}}
                        />
                        <MyInput
                            type='text'
                            placeholder='Отчество'
                            style={{width: '26%'}}
                        />
                    </div>
                    <div className={classes.password_block}>
                        <MyInput
                            type='password'
                            placeholder='Пароль'
                            style={{width: '43%'}}
                        />
                        <MyInput
                            type='password'
                            placeholder='Повторите пароль'
                            style={{width: '43%'}}
                        />
                    </div>
                    <MyButton
                        type='submit'
                        text='Зарегистрироваться'
                        style={{backgroundColor: '#00A3FF', color: 'white', padding: '10px 0px'}}
                    />
                </form>
                <div className='to__auth' style={{marginTop: 20, textAlign: "center"}}>
                    Есть аккаунт?
                    <a href="auth" style={{marginLeft: 10, color: '#00A3FF', textDecoration: 'none'}}>Авторизация</a>
                </div>
            </div>
        </div>
    );
};

export default Registration;
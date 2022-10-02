import React from 'react';
import MyInput from '../UI/input/MyInput'
import MySelect from "../UI/select/MySelect";
import classes from './Registration.module.css'

const Registration = () => {
    return (
        <div className='container'>
            <div className={classes.registration}>
                <div className={classes.title}>
                    Регистрация
                </div>
                <form action="" className={classes.form}>
                    <MyInput
                        type='text'
                        placeholder='Логин'
                    />
                    <MyInput
                        type='text'
                        placeholder='E-mail'
                    />
                    <div className={classes.fio}>
                        <MyInput
                            type='text'
                            placeholder='Фамилия'
                        />
                        <MyInput
                            type='text'
                            placeholder='Имя'
                        />
                        <MyInput
                            type='text'
                            placeholder='Отчество'
                        />
                    </div>
                    <MySelect
                        defaultValue="Факультет"
                        options={[
                            {value: "Лечебно-профилактический факультет", name: "Лечебно-профилактический факультет"}
                        ]}
                    />
                </form>
            </div>
        </div>
    );
};

export default Registration;
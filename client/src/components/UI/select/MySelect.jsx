import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({options, defaultValue}) => {
    return (
        <select className={classes.select}>
            <option select disabled value={defaultValue}></option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default MySelect;
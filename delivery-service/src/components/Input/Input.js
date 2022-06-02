import React from 'react';
import { useState, useEffect } from "react";
import './Input.css';
import {toast} from "react-toastify";
import axios from "axios";

const Input = (props) => {

    const [value, setValue] = useState('');
    const [showLabel, setShowLabel] = useState(false);

    useEffect(() => {
        if (value.trim() === "") {
            setShowLabel(false);
        } else {
            setShowLabel(true);
        }
    }, [value]);

    const setValueHandler = (event) => {
        setValue(event.target.value);
        if (props.on_value_changed !== undefined) {
            props.on_value_changed(event.target.value);
        }
    }

    return (
        <div className="input-group">
            {showLabel && <label className="input-label" htmlFor={props.value}>{props.label}</label>}
            <input
                type={props.type}
                name={props.value}
                placeholder={props.label}
                onChange={setValueHandler}
                className={`input-item ${showLabel ? "" : "no-label"}`}
            >
            </input>
        </div>
    );
};

export default Input;
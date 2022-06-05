import React from 'react';
import { useState, useEffect } from "react";
import './Input.css';

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

    let id = "input-field";
    if (props.label !== undefined)
        id = id + "-" + props.label;

    return (
        <div className="input-group" data-testid="Input">
            {showLabel && <label className="input-label" htmlFor={props.value}>{props.label}</label>}
            <input
                data-testid={id}
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
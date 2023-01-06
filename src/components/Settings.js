import React, { useState } from "react";
import NavBar from "./NavBar";

import {StyledSettings} from './styles/StyledSettings';

function Settings({settings, handleSubmitSettings}) {
    const [newSettings, setNewSettings] = useState({...settings});

    console.log(settings);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // Difficulty values are stored as integers
        if (name === "baseSpeed") {
            value = parseInt(value);
        };

        setNewSettings({... newSettings, [name]: value});
    };

    const onSubmitSettings = (e) => {
        e.preventDefault();
        handleSubmitSettings(newSettings);
    }

    return (
        <div className="new-settings-form">
            <NavBar />
            <h2>Settings</h2>
            <form onSubmit={onSubmitSettings}>
                <label>Difficulty</label>
                <select name="baseSpeed" onChange={handleChange}>
                    <option value="1100" >Easy</option>
                    <option value="1000" selected>Normal</option>
                    <option value="500">Hard</option>
                    <option value="50">Insane</option>
                </select>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Settings;
import React from "react";
import NavBar from "./NavBar";

import {StyledSettings} from './styles/StyledSettings';

function Settings() {



    return (
        <div className="new-settings-form">
            <NavBar />
            <h2>Settings</h2>
            <form>
                <input type="text" name="name" placeholder="Players name" />
                <input type="text" name="image" placeholder="Background Image" />
                <button type="submit">Customize Game</button>
            </form>
        </div>

    );
}

export default Settings;
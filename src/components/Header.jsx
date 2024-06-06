import React from 'react'

export default function Header() {
    return (
        <div id="header">
            <div id="header-section">
                <div id="header-left">
                    <a href="index.html">
                        <img src="../src/assets/logo.png" id="header-logo"></img>
                    </a>
                </div>
                <div id="header-right">
                    <button id="settings">
                        <a href="./pages/settings.html">
                            <img id="settings-icon" src="../src/assets/settings.png"></img>
                        </a>
                    </button>
                    <div id="search">
                        <input type="text" name="text" id="search-input" required="" placeholder="Type to search..."></input>
                        <div className="icon">
                            <img id="search-icon" src="../src/assets/search.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
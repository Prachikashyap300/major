import React, { useState } from 'react';


function NavBar({ setActiveTab }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* User photo in circle frame */}
            <div className="user-photo"></div>
            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => setActiveTab('profile')}>Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => setActiveTab('settings')}>Settings</a>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </div>
        </nav>
    );
}

function UserProfile() {
    return (
        <div className="user-details">
            {/* User profile details */}
            <h2>Profile</h2>
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
            <p>Address: 123 Main Street</p>
            {/* Add more details as needed */}
        </div>
    );
}

function UserSettings() {
    return (
        <div className="user-details">
            {/* User settings details */}
            <h2>Settings</h2>
            <p>Setting 1: Value</p>
            <p>Setting 2: Value</p>
            <p>Setting 3: Value</p>
            {/* Add more settings as needed */}
        </div>
    );
}

function App() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="app">
            <NavBar setActiveTab={setActiveTab} />
            {/* Display profile or settings based on active tab */}
            {activeTab === 'profile' ? <UserProfile /> : <UserSettings />}
        </div>
    );
}

export default App;

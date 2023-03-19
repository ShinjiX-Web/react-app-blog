import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home()
{
    return (
        <div className="home-container">
            <h1 className="home-header">Welcome Kodego Bootcampers!</h1>
            <p className="home-text">The latest trends and updates on Web Programming Languages.</p>
        </div>
    );
}

export default Home;

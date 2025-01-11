import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Real-Time Music Jam Platform</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/MusicRoom=1")
                    }}><h3>Create a Room</h3></p>
                    <p onClick={() => {
                        router("/auth")

                    }}></p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p></p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> through music 🎶 Stay in sync</h1>
                    <p> </p>

                    <p>🎵  Wherever you are, the music brings us together  -  music bridges every gap 🌍🎶</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/new.jpg" alt="" />

                </div>
            </div>



        </div>
    )
}

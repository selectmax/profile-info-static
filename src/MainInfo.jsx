import { useState } from 'react'
import logoEmail from './assets/Email.png'
import logoLinkedIn from './assets/Linkedin.png'

export default function MainInfo(){
    return (
    <main>
        <h1 className="Name">Laura Smith</h1>
        <h2 className="Position">Frontend Developer</h2>
        <p className="Website">laurasmith.website</p>
        <div className="links">
            <img src={logoEmail} className="email-writeto" />
            <img src={logoLinkedIn} className="linkedin-writeto" />
        </div>
        <info className="infoBlock">
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </info>
    </main>
        )
}
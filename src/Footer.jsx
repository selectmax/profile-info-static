import { useState } from 'react'
import twitterLogo from './assets/twitter-logo.png'
import facebookLogo from './assets/facebook-logo.png'
import instaLogo from './assets/insta-logo.png'
import githubLogo from './assets/github-logo.png'

export default function Footer(){
    return (
        <footer className="footer">
            <div>
                <img src={twitterLogo} />
                <img src={facebookLogo} />
                <img src={instaLogo} />
                <img src={githubLogo} />
            </div>
        </footer>

    )
}
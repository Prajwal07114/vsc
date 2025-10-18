import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import "../styles/auth.css"
const AuthPage=()=> {
  return <div className='auth-container'>
    <div className='auth-left'>
      <div className="auth-hero">
        <div className="brand-container">
          
        </div>
        <h1 className='hero-title'>Study with coffee</h1>
        <p className='hero-subtitles'>
          Welcome to Virtual Study Café — your personal space to focus, connect, and stay productive.
Sign in to join a community of learners, study together, and track your progress in a distraction-free environment.
        </p>
      </div>
    </div>
  </div>
}

export default AuthPage

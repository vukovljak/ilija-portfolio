import React from 'react';
import '../App.css';
import profilePic from '../img/main-img.png';

export default function MainHome() {
  return (
    <div className="chat">
      <div className="chat-container">

        {/* PRVA PORUKA - ME, bez tail */}
        <div className="message-row me">
          <div className="message-bubble no-tail first-message">
            <div className="name">Ilija</div>
            <div className="me-bubble no-tail">Hey, I am Ilija. Nice to meet you!👋</div>
          </div>
        </div>

        {/* MOJA PORUKA SA PROFILNOM */}
        <div className="message-row me">
          <img src={profilePic} alt="profile" className="profile-pic" />
          <div className="message-bubble">
            <div className="me-bubble">I design and build digital experiences that make life easier and more enjoyable.</div>
          </div>
        </div>

        {/* TUĐA PORUKA */}
        <div className="message-row you">
          <div className="message-bubble you-bubble">
            Sounds great, where should I start?
          </div>
        </div>

        {/* POSLEDNJA MOJA PORUKA SA PROFILNOM */}
        <div className="message-row me">
          <img src={profilePic} alt="profile" className="profile-pic" />
          <div className="message-bubble">
            <div className="name">Ilija</div>
            <div className="me-bubble">Let’s dive into 👉 <a href='/MyWork'>My Work</a>!</div>
          </div>
        </div>

      </div>
    </div>
  );
}

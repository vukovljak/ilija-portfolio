import React, { useState } from "react";
import "../App.css";
import profilePic from "../img/main-img.png";

export default function App() {
  const [active, setActive] = useState("design");

  return (
    <div>
      <div className="MyWork">
        <h1>I create clean and functional digital experiences.</h1>

        <div className="container">
          <div className="toggle">
            <div
              className={`toggle-slider ${active === "design" ? "left" : "right"} ${
                active === "development" ? "green" : "blue"
              }`}
            />

            <button
              className={`toggle-btn ${active === "design" ? "active" : ""}`}
              onClick={() => setActive("design")}
            >
              DESIGN
            </button>

            <button
              className={`toggle-btn ${active === "development" ? "active" : ""}`}
              onClick={() => setActive("development")}
            >
              DEVELOPMENT
            </button>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {active === "design" ? (
        <div className="chat-mywork">
          <div className="chat-container">
            {/* TUĐA PORUKA */}
            <div className="message-row you">
              <div className="message-bubble you-bubble-work">
                <p>
                  1. Tell me more about <b>CityBudy</b>.
                </p>
              </div>
            </div>

            {/* PRVA PORUKA - ME, bez tail */}
            <div className="message-row me">
              <div className="message-bubble no-tail first-message">
                <div className="name">Ilija</div>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="me-bubble-img-1 no-tail"></div>
                </a>
              </div>
            </div>

            {/* MOJA PORUKA SA PROFILNOM */}
            <div className="message-row me">
              <img src={profilePic} alt="profile" className="profile-pic" />
              <div className="message-bubble">
                <div className="me-bubble">
                  CityBuddy is a community-driven mobile app that helps users
                  explore their city more intuitively. You can discover nearby
                  places, events, and experiences.
                  <br />
                  The focus was on creating a friendly, familiar UX encouraging
                  social interaction in a clean way.
                </div>
              </div>
            </div>

            {/* TUĐA PORUKA */}
            <div className="message-row you">
              <div className="message-bubble you-bubble">
                <p>
                  2. Tell me more about <b>PureSkin</b>.
                </p>
              </div>
            </div>

            {/* PRVA PORUKA - ME, bez tail */}
            <div className="message-row me">
              <div className="message-bubble no-tail first-message">
                <div className="name">Ilija</div>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="me-bubble-img-2 no-tail"></div>
                </a>
              </div>
            </div>

            {/* MOJA PORUKA SA PROFILNOM */}
            <div className="message-row me">
              <img src={profilePic} alt="profile" className="profile-pic" />
              <div className="message-bubble">
                <div className="me-bubble">
                  PureSkin is a skincare brand e-commerce shop built around
                  simplicity and self-care.
                  <br />
                  The design emphasizes soft color palettes, clean typography,
                  creating a soothing user experience that reflects the brand’s
                  calm and authentic tone.
                </div>
              </div>
            </div>

            {/* TUĐA PORUKA */}
            <div className="message-row you">
              <div className="message-bubble you-bubble">
                <p>
                  3. Tell me more about <b>Ahilej</b>.
                </p>
              </div>
            </div>

            {/* PRVA PORUKA - ME, bez tail */}
            <div className="message-row me">
              <div className="message-bubble no-tail first-message">
                <div className="name">Ilija</div>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="me-bubble-img-3 no-tail"></div>
                </a>
              </div>
            </div>

            {/* MOJA PORUKA SA PROFILNOM */}
            <div className="message-row me">
              <img src={profilePic} alt="profile" className="profile-pic" />
              <div className="message-bubble">
                <div className="me-bubble">
                  Ahilej is a modern, responsive redesigned website for a fitness
                  center created to boost engagement.
                  <br />
                  The interface uses bold typography and dynamic visuals to
                  communicate energy and motivation, while maintaining a strong
                  information accessibility and usability.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="chat-mywork">
          <div className="chat-container">
            {/* TUĐA PORUKA */}
            <div className="message-row you">
              <div className="message-bubble you-bubble-green">
                <p>
                  1. Tell me more about <b>T-Shows</b>.
                </p>
              </div>
            </div>

            {/* PRVA PORUKA - ME, bez tail */}
            <div className="message-row me">
              <div className="message-bubble no-tail first-message">
                <div className="name">Ilija</div>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="me-bubble-img-4 no-tail"></div>
                </a>
              </div>
            </div>

            {/* MOJA PORUKA SA PROFILNOM */}
            <div className="message-row me">
              <img src={profilePic} alt="profile" className="profile-pic" />
              <div className="message-bubble">
                <div className="me-bubble">
                  T-Shows is a ReactJS web app that is using TMDb API and Axios
                  for fetching data.
                  <br />
                  You can browse top-rated and popular TV shows, search by name,
                  and watch trailers with ease.
                </div>
              </div>
            </div>

            {/* TUĐA PORUKA */}
            <div className="message-row you">
              <div className="message-bubble you-bubble green">
                <p>
                  2. Tell me more about <b>Beats Project</b>.
                </p>
              </div>
            </div>

            {/* PRVA PORUKA - ME, bez tail */}
            <div className="message-row me">
              <div className="message-bubble no-tail first-message">
                <div className="name">Ilija</div>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="me-bubble-img-5 no-tail"></div>
                </a>
              </div>
            </div>

            {/* MOJA PORUKA SA PROFILNOM */}
            <div className="message-row me">
              <img src={profilePic} alt="profile" className="profile-pic" />
              <div className="message-bubble">
                <div className="me-bubble">
                  Beats Project is a fully responsive landing page built using
                  only HTML and CSS, with lightweight JavaScript for mobile menu
                  interactions.
                  <br />
                  The layout and style take inspiration from beatsbydre.com,
                  focusing on clean visuals and smooth transitions.
                </div>
              </div>
            </div>

            {/* TUĐA PORUKA */}
            <div className="message-row you">
              <div className="message-bubble you-bubble green">
                <p>
                  3. Tell me more about <b>MyMovie API</b>.
                </p>
              </div>
            </div>

            {/* PRVA PORUKA - ME, bez tail */}
            <div className="message-row me">
              <div className="message-bubble no-tail first-message">
                <div className="name">Ilija</div>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="me-bubble-img-6 no-tail"></div>
                </a>
              </div>
            </div>

            {/* MOJA PORUKA SA PROFILNOM */}
            <div className="message-row me">
              <img src={profilePic} alt="profile" className="profile-pic" />
              <div className="message-bubble">
                <div className="me-bubble">
                  MyMovie API is a responsive JavaScript web app powered by The
                  Movie Database API. Browse popular and upcoming movies, search
                  by title, and view details and trailers in a modal interface.
                  <br />
                  jQuery was used only to stop the trailer when the modal
                  closes.
                </div>
              </div>
            </div>

            {/* TUĐA PORUKA */}
            <div className="message-row you">
              <div className="message-bubble you-bubble green">
                <p>
                  4. Tell me more about <b>Rent-a-Car CRM</b>.
                </p>
              </div>
            </div>

            {/* PRVA PORUKA - ME, bez tail */}
            <div className="message-row me">
              <div className="message-bubble no-tail first-message">
                <div className="name">Ilija</div>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="me-bubble-img-7 no-tail"></div>
                </a>
              </div>
            </div>

            {/* MOJA PORUKA SA PROFILNOM */}
            <div className="message-row me">
              <img src={profilePic} alt="profile" className="profile-pic" />
              <div className="message-bubble">
                <div className="me-bubble">
                  An automated Google Sheets system built with Google Apps Script to manage contracts,
                  clients, vehicles, drivers, and finances created for one Rent-a-Car client based in Belgrade.
                  <br />
                  The solution features real-time tracking, automated alerts for overdue payments and costs, 
                  and an interactive dashboard for quick financial insights.
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    <hr className="divider2" />
    </div>
  );
}
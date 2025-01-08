import React from 'react';
import './App.css'; 

// Header Component
const Header = () => (
  <div className="header_container">
    <a href="/">
      <h1>Harshal.</h1>
    </a>
    <nav>
      <ul>
        <li>
          <a href="/#end">contact</a>
        </li>
      </ul>
    </nav>
  </div>
);

// Home Section Component
const Home = () => (
  <div className="home_container">
    <div className="home_head_wrapper">
      <h1>
        Hello, I'm <br />
        <span>Harshal Jadhav</span>
      </h1>
      <p>
        A computer science student from India. I aim to deepen my
        understanding in various areas of technology and product development.
      </p>
    </div>
    <div className="image_container">
      <img
        src="/img.jpg"
        alt="Author"
      />
      <div className="bg"></div>
    </div>
  </div>
);

// Project Component
const Project = ({ title, description, imageUrl, projectLink, gitLink }) => (
  <div className="project">
    <div className="image">

    <a href={projectLink}>
       <img src={imageUrl} alt={title} />
    </a>

    </div>
    <div className="title">
      <strong>{title}</strong>
      <br />
      {description}
      <a className="git-color" href={gitLink}>
        (Git)
      </a>
    </div>
  </div>
);

// Projects Section Component
const Projects = () => (
  <div className="work_container">
    <h1>Projects.</h1>
    <div className="projects_container">
      {/* <Project
        title="Stocks DD Forecasting"
        description="Analyze r/wsb's stock due diligences."
        imageUrl="/assets/stonks.png"
        projectLink="#"
        gitLink="https://github.com/Fryingpannn/WallStreetBets_BigDataAnalysis"
      /> */}
      <Project
        title="Trendy Fashion"
        description="A modern online Fashion store."
        imageUrl="assets/Desktopview.png"
        projectLink="https://trendymarkt.herokuapp.com/index.php"
        gitLink="https://github.com/Flayingharshhh/Trendyfashion/blob/main/README.md"
      />
      {/* <Project
        title="Commands REST API"
        description="API that provides command line code snippets."
        imageUrl="assets/commanderapi.png"
        projectLink="#"
        gitLink="https://github.com/Fryingpannn/.NETCore_MVC_RESTAPI"
      /> */}
      <Project
        title="Recipe Search API"
        description="Find the recipes of tens of thousands of dishes."
        imageUrl="assets/Reciepe.png"
        projectLink="https://recipesearchapi.web.app/"
        gitLink="https://github.com/Harshalll07/ReciepeSearchAPI"
      />
      {/* <Project
        title="Forest Fire Detection App"
        description="Mobile app that sends alerts to prevent fires."
        imageUrl="assets/charmander.png"
        projectLink="#"
        gitLink=" "
      /> */}
      <Project
        title="Next up..."
        description=""
        imageUrl="assets/next.png"
        projectLink="#"
        gitLink="#"
      />
    </div>
  </div>
);

// Contact Section Component
const Contact = () => (
  <div className="contact_container">
    <h1>Get in touch.</h1>
    <p>
      I would be happy to further discuss my experiences with you, simply shoot
      me an email or message me on LinkedIn! :)
    </p>
    <a className="email_link" href="mailto:Harshalvjadhav07@gmail.com">
      harshalvjadhav03@gmail.com
    </a>
    <div className="social_links">
      <ul>
        <li>
          <a id="end"href="mailto:harshalvjadhav07@gmail.com">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/harshal-jadhav-b96726225/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/Flayingharshhh">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M413.4 32H82.6C37 32 0 69.2 0 115.8v280.3c0 46.6 37 83.8 82.6 83.8h330.8c45.6 0 82.6-37.2 82.6-83.8V115.8c0-46.6-37-83.8-82.6-83.8zM355.9 137c-2.5 2.5-3.1 5.5-3.1 8.8 0 4.4 1.5 8.3 4.6 11.3 8.1 8.1 16.2 16.1 24.3 24.3 7.6 7.6 14.9 15.3 22.3 22.5 16.3 15.8 34.2 34.8 37.4 55.7 3.5 18.4 2.5 38.1-3.3 56.1-7.5 22.6-22.9 42.6-42.6 58.1-22.3 18.7-51.5 32.4-77.5 45.6-1.6 1.1-3.3 2.2-5.1 3.2-15.6 9.8-33.3 16.1-51.6 16.1-47.7 0-88.1-31.9-101.2-73.7-2.7-7.3-6.3-14.1-10.5-21.2-9.5-14.6-21.2-29.5-34.5-41.7 8.2-8.2 17-15.7 27.3-22.1 25.3-18.2 63.9-24.1 88.1-10.9 11.7 5.3 20.6 14.5 25.5 25.6z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

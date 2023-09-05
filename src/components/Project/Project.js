import React from "react";
import "./Project.css";
import Line from "../../assets/images/line-purple.svg";
// import ImageTemp from "../../assets/images/prev-project-temp.png";
// import WayHome from "../../assets/images/WayHome.jpg";
// import LastGame from "../../assets/images/LastGame.jpg";
// import Bouncy from "../../assets/images/Bouncy.webp";
import TTT from "../../assets/images/TTT.PNG";
// import PlayStore from "../../assets/images/google-play.png";
// import Drive from "../../assets/images/google-drive.png";
// import Apk from "../../assets/images/apk.png";
import Youtube from "../../assets/images/youtube.png";
import Visible from "../../assets/images/visible.png";
// import PortfolioPic from "../../assets/images/portfolio.png";
import AppLogin from "../../assets/images/App-Login.jpg";
import AppLogin2 from "../../assets/images/bank.png";
// import StormShotPic from "../../assets/images/StormShot.png";
// import BlenderPic from "../../assets/images/Blender.png";

function Project() {
  return (
    <>
      <p className="purple-text text-center mt-5">
        ‍💻 Open Source -
        <span className="purple-smoke-text"> Visit my latest projects </span>{" "}
      </p>
      <div className="resp">
        {/*  */}
        <section id="projects" className="container container-project">
          <p className="purple-smoke-text text-center m-0"> Web Applications </p>{" "}

          {/* Application dashboard and login */}

          {/* Simple bank */}
          <div className="project-header">
            <div className="project-box">
              <span className="white-text">Simple Bank</span>
              <p className="gray-text text-box">
                Online Bank Hub is a web-based platform designed for individuals and organizations who want to manage their finances in a simple and secure way.
              </p>
            </div>
            <img className="project-line" src={Line} alt="abajo" />
          </div>
          <div className="project-details">
            <img src={AppLogin2} className="project-picture" alt="Project React Simple Portfolio" />
            <div className="details-left">
              <p className="gray-text">
                See this Project on{" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/BankAccount" target="_blank" className="text-figma">Github</a>.
              </p>
              <div className="details-stack">
                <span className="white-text">Technologies</span>
                <ul className="gray-text">
                  <li>React js</li>
                  <li>Tailwind</li>
                  <li>Express js</li>
                  <li>MongoDb</li>
                </ul>
              </div>
              {/* <p className="gray-text">
                Check full {" "}
                <img
                  className="mb-1 little-icon-2"
                  src={Youtube}
                  alt="GitHub"
                />{" "} */}
                {/* <a href="https://youtu.be/2tulYce-vYo" target="_blank" className="text-figma">Youtube</a> video. */}
              {/* </p> */}
              <p className="gray-text">
                A little star on {" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/BankAccount" target="_blank" className="white-text text-figma">Github</a>.
              </p>
              <p className="gray-text">
                Release date : {" "} <p className="text-figma">Mar 30, 2023</p>
              </p>
            </div>
          </div>

          {/* Portfolio */}
          {/* <div className="project-header">
            <div className="project-box">
              <span className="white-text">Portfolio</span>
              <p className="gray-text text-box">
                A digital portfolio showcasing web apps and games projects.
              </p>
            </div>
            <img className="project-line" src={Line} alt="abajo" />
          </div>
          <div className="project-details">
            <img src={PortfolioPic} className="project-picture" alt="Project React Simple Portfolio" />
            <div className="details-left">
              <p className="gray-text">
                See this Project on{" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="" target="_blank" className="text-figma">Github</a>.
              </p>
              <div className="details-stack">
                <span className="white-text">Technologies</span>
                <ul className="gray-text">
                  <li>React js</li>
                </ul>
              </div>
              <p className="gray-text">
                See also {" "}
                <img
                  className="mb-1 little-icon"
                  src={Visible}
                  alt="GitHub"
                />{" "}
                <a href="https://noulamin.com" target="_self" className="text-figma">Live</a> view.
              </p>
              <p className="gray-text">
                A little star on {" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="" target="_blank" className="white-text text-figma">Github</a>.
              </p>
              <p className="gray-text">
                Release date : {" "} <p className="text-figma">Jan 05, 2023</p>
              </p>
            </div>
          </div> */}

          {/* TTT */}
          <div className="project-header">
            <div className="project-box">
              <span className="white-text">Tic Tac Toe</span>
              <p className="gray-text text-box">
                A simple Tic tac toe game.
              </p>
            </div>
            <img className="project-line" src={Line} alt="abajo" />
          </div>
          <div className="project-details">
            <img src={TTT} className="project-picture" alt="Project React Simple Portfolio" />
            <div className="details-left">
              <p className="gray-text">
                See this Project on{" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/JS-Projects/tree/master/tictactoe" target="_blank" className="text-figma">Github</a>.
              </p>
              <div className="details-stack">
                <span className="white-text">Technologies</span>
                <ul className="gray-text">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <p className="gray-text">
                See also {" "}
                <img
                  className="mb-1 little-icon"
                  src={Visible}
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/JS-Projects/tree/master/tictactoe" target="_blank" className="text-figma">Live</a> view.
              </p>
              <p className="gray-text">
                A little star on {" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/Noulamin/Jeu-Tic-Tac-Toe-simple-en-javascript" target="_blank" className="white-text text-figma">Github</a>.
              </p>
              <p className="gray-text">
                Release date : {" "} <p className="text-figma">Sep 22, 2022</p>
              </p>
            </div>
          </div>

          {/* Donate */}
          <div className="project-header">
            <div className="project-box">
              <span className="white-text">Donate</span>
              <p className="gray-text text-box">
              A user-friendly website that connects individuals looking to donate clothes, materials, or unwanted items with those in need,
              facilitating easy and impactful contributions to make a positive difference in people's lives.
              </p>
            </div>
            <img className="project-line" src={Line} alt="abajo" />
          </div>
          <div className="project-details">
            <img src={AppLogin} className="project-picture" alt="Project React Simple Portfolio" />
            <div className="details-left">
              <p className="gray-text">
                See this Project on{" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/DonateVer0.1" target="_blank" className="text-figma">Github</a>.
              </p>
              <div className="details-stack">
                <span className="white-text">Technologies</span>
                <ul className="gray-text">
                  <li>React</li>
                  <li>Mui</li>
                  <li>JavaScript</li>
                  <li>ExpressJs</li>
                </ul>
              </div>
              <p className="gray-text">
                See also {" "}
                <img
                  className="mb-1 little-icon"
                  src={Visible}
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/DonateVer0.1" target="_blank" className="text-figma">Live</a> view.
              </p>
              <p className="gray-text">
                A little star on {" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/DonateVer0.1" target="_blank" className="white-text text-figma">Github</a>.
              </p>
              <p className="gray-text">
                Release date : {" "} <p className="text-figma">Jan 16, 2022</p>
              </p>
            </div>
          </div>
          {/* sEE MORE */}
          {/* <div className="container-footer">
            <p>
              See more on{" "}
              <img
                className="mb-1"
                src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                alt="GitHub"
              />{" "}
              <a href="https://github.com/Noulamin?tab=repositories" target="_blank" className="white-text text-figma">Github</a>
            </p>
          </div> */}
        </section>

        {/* Games */}
        <section id="projects" className="col container container-project">
          <p className="purple-smoke-text text-center m-0"> Alx - Software Engineer </p>{" "}
          <div>
            {/* first alx */}
            <div className="project-header">
              <div className="project-box">
                <span className="white-text">printf</span>
                <p className="gray-text text-box">
                  A versatile function in programming languages that outputs formatted text to the console or other output streams
                </p>
              </div>
              <img className="project-line" src={Line} alt="abajo" />
            </div>
            <div className="project-details">
              {/* <img src={WayHome} className="project-picture" alt="Project React Simple Portfolio" /> */}
              <div className="details-left">
                <p className="gray-text">
                  See this Project on{" "}
                  <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                  <a href="https://github.com/mooka007/_printf" target="_blank" className="text-figma">Github</a>.
                </p>
                <div className="details-stack">
                  <span className="white-text">Technologies</span>
                  <ul className="gray-text">
                    <li>C Language</li>
                  </ul>
                </div>
                <p className="gray-text">
                  Check demo {" "}
                  <img
                    className="mb-1 little-icon-2"
                    src={Youtube}
                    alt="GitHub"
                  />{" "}
                  <a href="" target="_blank" className="text-figma">Youtube</a> video.
                </p>
                <p className="gray-text">
                  Release date : {" "} <p className="text-figma">Apr 19, 2023</p>
                </p>
              </div>
            </div>

            {/* AirBnb - Console */}
            <div className="project-header">
              <div className="project-box">
                <span className="white-text">AirBnb - Console</span>
                <p className="gray-text text-box">
                  The AirBnB Clone Console is a Python-based command-line interface (CLI) that allows you to manage AirBnB objects,
                  such as users, states, cities, places, and more. With this console, you can perform various operations on these objects,
                  including creating, retrieving, updating, and deleting them
                </p>
              </div>
              <img className="project-line" src={Line} alt="abajo" />
            </div>
            <div className="project-details">
              {/* <img src={Bouncy} className="project-picture-2" alt="Project React Simple Portfolio" /> */}
              <div className="details-left">
                <p className="gray-text">
                  See this Game on{" "}
                  <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                  <a href="https://github.com/mooka007/AirBnB_clone" target="_blank" className="text-figma">Github</a>.
                </p>
                <div className="details-stack">
                  <span className="white-text">Technologies</span>
                  <ul className="gray-text">
                    <li>Python</li>
                  </ul>
                </div>
                <p className="gray-text">
                  Release date : {" "} <p className="text-figma">Aug 7, 2023</p>
                </p>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </>
  );
}

export default Project;

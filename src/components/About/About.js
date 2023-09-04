import "./About.css";
import iconImage from "../../assets/images/logo.jpg";


export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
      <div className="about-left">
        <span className="purple-text">
          ✋<span className="text-figma">Mohammed Yassine Marzouki</span> {" "}
            <span className="purple-smoke-text">- Introduction</span>{" "}
        </span>
        <p className="gray-text">
        a dedicated and patient developer with a passion for continuous growth and learning.
        With a strong foundation as a MERN stack developer, i have honed my skills in building web applications using technologies like MongoDB,
        Express.js, React, and Node.js. However, driven by a desire to expand my expertise and become a versatile software engineer,
        I'm currently immersed in studying Python. Through this pursuit, i aim to deepen my understanding of software development principles and gain
        proficiency in a language widely used in various domains. My patient and determined approach, combined with my enthusiasm for acquiring new knowledge,
        make me a valuable asset on any development team. With my ever-expanding skill set and dedication to personal growth,
        I aspire to contribute to the field of software engineering and tackle exciting challenges in building robust and innovative applications.
        </p>
        <div className="d-flex justify-content-around">
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Web development
              </p>
            </p>
            <li>Front end
              <ul className="tech-stack m-0 mx-2">
                <li>React js</li>
                <li>Ui/Ux Designer</li>
              </ul>
            </li>
            <li>Back end
              <ul className="tech-stack m-0 mx-2">
                <li>Node js</li>
                <li>Express js</li>
              </ul>
            </li>
          </ul>
          {/* <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Game development
              </p>
            </p>
            <li>Blender</li>
            <li>Unity Engine</li>
            <li>Enreal Engine 4</li>
            <li>Game Designer</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Audacity</li>
          </ul> */}
        </div>
        <div className="d-flex justify-content-around">
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Tools
              </p>
            </p>
            <li>Git/GitHub</li>
            <li>Firebase</li>
            <li>MongoDb</li>
            {/* <li>Android Studio</li> */}
            {/* <li>PostgreSQL</li> */}
            <li>MySql</li>
            <li>Xampp</li>
            <li>Vs Code</li>
            <li>Postman</li>
            <li>Adobe XD</li>
            <li>Trello/Jira</li>
          </ul>
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Technologies
              </p>
            </p>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>PHP</li>
            {/* <li>Kotlin</li> */}
            <li>Python</li>
            <li>C Language</li>
            {/* <li>C# </li> */}
            {/* <li>C++</li> */}
          </ul>
        </div>
        {/* <a className="about-see" href="#">See more {"->"} </a> */}
      </div>

    </section>
  );
};

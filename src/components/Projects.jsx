import { useContext } from "react";
import "../styles/projects.css";
import { ThemeContext } from "../context/ThemeContext";
import { GoProject } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import {
  SiChakraui,
  SiNodedotjs,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiHeroku,
  SiRedux,
  SiVercel,
  SiExpress,
  SiMongodb,
  SiGit,
  SiNetlify,
} from "react-icons/si";

export const Projects = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="projects"
      style={{
        "--bglightproject": light ? "#edf2f8" : "#0a192f",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "white" : "#152235",
      }}
    >
      <p>
        Featured <span>Projects </span>{" "}
        <span>
          <GoProject />
        </span>
      </p>
      <div className="projectCard" data-aos="fade-up">
        <div className="prCardImg">
          <img src="./assets/tt.png" />
        </div>
        <div className="prCardContent">
          <p>TrackingTime.co - Clone</p>
          <p>
            This project is about building a full stack clone of
            TrackingTime.co, which is a team-oriented time tracking and project
            management software product. Users can signup, login, create
            projects, add tasks, update tasks, track time and much more. It is
            built using some front-end and back-end technologies listed below.
            <p>
              <span>Tech Stack: </span>React, ChakraUI, CSS, React-Router,
              Redux, NodeJS, ExpressJS, MongoDB.
            </p>
          </p>
          <div className="prCardTs">
            <SiReact style={{ color: "#53c1de" }} className="tsIc" />
            <SiChakraui
              style={{
                color: "#60c9ca",
                background: "white",
                borderRadius: "50%",
              }}
              className="tsIc"
            />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiReactrouter style={{ color: "tomato" }} className="tsIc" />
            <SiRedux style={{ color: "purple" }} className="tsIc" />
            <SiNodedotjs style={{ color: "green" }} className="tsIc" />
            <SiExpress style={{ color: "black" }} className="tsIc" />
            <SiMongodb style={{ color: "green" }} className="tsIc" />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://snazzy-nougat-6ca032.netlify.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/JYOTIPM1999/expert-hand-9078"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> View code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="projectCard" data-aos="fade-up">
        <div className="prCardImg">
          <img src="./assets/chatapp.png" />
        </div>
        <div className="prCardContent">
          <p>Chat App</p>
          <p>
            It's an individual project. This project is about building a Chat
            app, which is an e-commerce website providing cosmetic items and
            other services like in-store Spa, Massage etc. Users can signup,
            login and browse the attractive homepage of the website. It is built
            using React, ChakraUI, CSS and React Router.
            <p>
              <span>Tech Stack: </span>React, ChakraUI, Socket.IO, JWT Auth CSS
              and React-Router.
            </p>
          </p>
          <div className="prCardTs">
            <SiReact style={{ color: "#53c1de" }} className="tsIc" />
            <SiChakraui
              style={{
                color: "#60c9ca",
                background: "white",
                borderRadius: "50%",
              }}
              className="tsIc"
            />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiReactrouter style={{ color: "tomato" }} className="tsIc" />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a style={{ textDecoration: "none" }} href="#" target="_blank">
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/JYOTIPM1999/Chat_App/tree/main/Chat_App"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> View code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="projectCard" data-aos="fade-up">
        <div className="prCardImg">
          <img src="./assets/apple1.png" />
        </div>
        <div className="prCardContent">
          <p>Apple TV - Clone</p>
          <p>
            This website is a clone of GeekBuying.com which is an e-commerce
            website dealing in a variuos types of items with a specialization in
            electronics. Users can signup, login, explore products, add to cart,
            checkout and much more in this project. It is built using pure HTML,
            CSS and Vanilla JavaScript only. Authentication is implemented using
            localStorage.
            <p>
              <span>Tech Stack: </span>HTML, CSS, API call, JSON Server and
              JavaScript.
            </p>
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://dazzling-paprenjak-91b876.netlify.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/JYOTIPM1999/AppleTv_Clone"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> View code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="projectCard" data-aos="fade-up">
        <div className="prCardImg">
          <img src="./assets/bb1.png" />
        </div>
        <div className="prCardContent">
          <p>Beauty-Bebo - Clone</p>
          <p>
            This website is a clone of boAt.com which is one of India's finest
            e-commerce website for world's best headphones. Users can signup,
            login, explore products, add to cart, apply discount and much more
            in this project. It is built using pure HTML, CSS and Vanilla
            JavaScript only. Authentication is implemented using localStorage.
            <p>
              <span>Tech Stack: </span>HTML, CSS and JavaScript.
            </p>
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://rainbow-frangipane-7695ac.netlify.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/JYOTIPM1999/BeautyBebo"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> View code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

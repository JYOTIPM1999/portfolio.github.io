import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/about.css";
import { GoTriangleRight } from "react-icons/go";

export const About = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="about"
      style={{
        "--bglightabout": light ? "white" : "#152235",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "" : "#dc143c",
      }}
    >
      <p>About </p>
      <div id="aboutcontent">
        <div id="myselfdesc" data-aos="zoom-in">
          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              {" "}
              Hello! My name is <span>Jyoti prakash Mohapatra</span>
              &nbsp;and I am from <span>Jajpur, Odisha(India).</span>
            </p>
          </div>
          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              I enjoy reading and teaching about security market on
              <span> Internet.</span>
            </p>
          </div>
          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              My interest in <span>Web Development </span>
              started back in 2021 when I was <span> trading </span>and looking
              for new technology to
              <span> automate my trades.</span>
            </p>
          </div>
          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              {" "}
              I started exploring and learn how these websites are made from
              scratch. That was when I came to know about different technologies
              like <span>HTML, CSS, JS etc.</span> used for creating websites.
            </p>
          </div>
          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              {" "}
              Then I joined <span>Masai School</span>
              &nbsp;which provides a 30-week full time course on{" "}
              <span>Full Stack Web Development</span>
              &nbsp;with hands on experience by working on real world projects.{" "}
            </p>
          </div>
          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              Fast forward to today, I am about to graduate from{" "}
              <span>Masai School</span>&nbsp; and I have got a good hold on
              various technologies used in <span>Frontend</span>&nbsp; and{" "}
              <span>Backend</span>&nbsp; development.
            </p>
          </div>
        </div>
        <div id="myimg">
          <img src="./myImg.jpg" />
        </div>
      </div>
    </div>
  );
};

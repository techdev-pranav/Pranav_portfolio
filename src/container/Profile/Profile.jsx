import React from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./Profile.scss";
import { BsDownload } from "react-icons/bs";
import { images } from "../../constants";
import { motion } from "framer-motion";

const { resume, profileimg } = images;

const Profile = () => {
  return (
    <>
      <h1 className="head-text">All About Me</h1>
      <div className="app__profile-container">
        <div className="app__profile-container-image">
          <motion.img
            src={profileimg}
            alt="profile_image"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, type: "tween" }}
            // drag
            // dragConstraints={{left: 100, right: 200, top: 100, bottom: 200}}
          />
        </div>
        <div className="app__profile-container-content">
          <p className="app__profile-text">
            As a Senior Front-End Developer with over 3 years of experience, I
            specialize in building secure, high-performance web applications
            using modern frameworks like React and Angular. My expertise spans
            HTML, CSS, JavaScript, TypeScript, Redux, and WebSockets, with a
            strong focus on creating responsive, scalable interfaces that
            deliver seamless user experiences. I’m passionate about clean
            architecture, performance optimization, and working collaboratively
            with cross-functional teams to turn complex problems into elegant
            digital solutions.
          </p>
          <div className="app__profile-data ">
            <p className="app__profile-data-p1">
              <span className="head-text">3.5+</span>
              <span className="simple-text">
                Year <br /> experience
              </span>
            </p>
            <p className="app__profile-data-p2">
              <span className="head-text">7</span>
              <span className="simple-text">
                Completed <br /> projects
              </span>
            </p>
            <p className="app__profile-data-p3">
              <span className="head-text">2</span>
              <span className="simple-text">
                Companies <br /> worked
              </span>
            </p>
          </div>
          <div className="app__profile-btn">
            <button>
              <a href={resume} download="pranav_frontend.pdf">
                Download CV <BsDownload />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Profile, "app__profile"),
  "Profile",
  "app__whitebg"
);

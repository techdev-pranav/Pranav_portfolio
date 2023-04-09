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
            As a Front-End Developer, I possess a strong skill set in HTML, CSS,
            JavaScript, React, Redux, and SCSS. I excel at designing responsive
            websites that provide a seamless user experience. My expertise lies
            in crafting dynamic interfaces through clean and optimized coding,
            while using the latest development tools and techniques. I thrive in
            a collaborative environment and enjoy working with cross-functional
            teams to create exceptional web applications.
          </p>
          <div className="app__profile-data ">
            <p className="app__profile-data-p1">
              <span className="head-text">1+</span>
              <span className="simple-text">
                Year <br /> experience
              </span>
            </p>
            <p className="app__profile-data-p2">
              <span className="head-text">5</span>
              <span className="simple-text">
                Completed <br /> projects
              </span>
            </p>
            <p className="app__profile-data-p3">
              <span className="head-text">1</span>
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

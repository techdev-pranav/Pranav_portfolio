import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../Wrapper";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [workData, setWorkData] = useState([]);
  const [filterWork, setFilterWork] = useState(workData);

  useEffect(() => {
    const query = '*[_type == "workData"]';

    client.fetch(query).then((data) => {
      setWorkData(data);
      setFilterWork(data);
    });
  }, []);

  const handleFilterClick = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(workData);
      } else {
        setFilterWork(workData.filter((data) => data.tag.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React Js", "All"].map(
          (ele, index) => (
            <div
              key={index}
              onClick={() => handleFilterClick(ele)}
              className={`app__workfilter-item app__flex p-text ${
                activeFilter === ele ? "active-item" : ""
              }`}
            >
              {ele}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((data, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(data.imgUrl)} alt={data.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={data.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.5 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={data.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.5 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{data.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {data.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{data.tag[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "Work", "app__whitebg");

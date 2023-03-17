import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "aboutData"]';

    client.fetch(query).then((data) => setAboutData(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Apps</span>
        <br /> Means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {aboutData.map((data, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={`profileitem-${index}`}
          >
            <img src={urlFor(data.imgUrl)} alt={data.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {data.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {data.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "About",
  "app__primarybg"
);

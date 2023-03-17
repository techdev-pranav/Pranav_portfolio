import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Home", "Profile", "About", "Work", "Skills", "Contact"].map(
        (data, index) => (
          <a
            href={`#${data}`}
            key={`nav_dot_${index}`}
            className="app__navigation-dot"
            style={active === data ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;

import React from "react";
import Header from "../components/Header";

const HomepageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header />
      <div className="main">{props.children}</div>
    </div>
  );
};

export default HomepageLayout;
import React, { useEffect, useRef } from "react";
import "./topnav.css";
import { MDCTopAppBar } from "@material/top-app-bar";

const TopNav = () => {
  const topAppBarRef = useRef(null);

  useEffect(() => {
    if (topAppBarRef.current) {
      new MDCTopAppBar(topAppBarRef.current);
    }
  }, []); // Runs once after the component mounts

  return (
    <header className="mdc-top-app-bar" ref={topAppBarRef}>
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <span className="mdc-top-app-bar__title">My App</span>
        </section>
      </div>
    </header>
  );
};

export default TopNav;

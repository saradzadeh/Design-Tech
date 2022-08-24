import React from "react";

import "./Landing.css";
import "./Button.css";

const Button = ({ children, type }) => {
  let classList = `button-${type}`;

  return <div className={`button ${classList}`}>{children}</div>;
};

Button.defaultProps = {
  type: "primary",
};

const Landing = () => {
  return (
    <div>
      <div className="button">Read More</div>
      <div className="button">Submit your Application</div>
      <Button>
        <i className="info" />
        Read More ALso
        <span>sub text</span>
      </Button>
      <Button type="secondary">I'm a secondary button</Button>
    </div>
  );
};

export default Landing;

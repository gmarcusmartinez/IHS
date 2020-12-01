import React from "react";

const Landing = () => {
  const slogan = "Only from unconditional observation can something new arise.";
  const restrictedMsg = "Contents are only visible to members.";

  return (
    <div className="landing">
      <span className="landing__slogan">{slogan}</span>
      <span className="landing__restricted">{restrictedMsg}</span>
    </div>
  );
};

export default Landing;

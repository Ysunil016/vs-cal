import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Consultant",
          "Full Stack Developer",
          "Cloud Developer",
          "Open Source Contributor",
          "DSA Enthusiastic"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

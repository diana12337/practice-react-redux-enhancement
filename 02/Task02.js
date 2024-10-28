import React, { useState } from "react";
import Welcome from "./../src/components/Welcome";
import withPopup from "./../src/hoc/withPopup";
const styles = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  height: "100vh",
  width: "100%",
  backdropFilter: "blur(2px)",
  display: "flex",
  display: "grid",
  placeContent: "center",
};
const ComponentWithPopup = withPopup(styles)(Welcome);

const Task02 = () => (
  <section>
    <h2>Task 02</h2>
    <ComponentWithPopup />
  </section>
);

export default Task02;

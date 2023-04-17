import React, { useEffect, useState } from "react";
import P from "prop-types";
export default function BContainer(props) {
  const [fluid, setFluid] = useState();

  useEffect(() => setFluid(props.fluid), [props.fluid]);
  return (
    <div className={`container${fluid ? `-fluid` : ""}`}>{props.children}</div>
  );
}
BContainer.propTypes = {
  children: P.node.isRequired,
  fluid: P.bool,
};

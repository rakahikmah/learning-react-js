import React from "react";

function Concept(props) {
  return (
    <>
      {props.concepts.map((concept, index) => (
        <li className="concept">
          <img src={concept.image} alt={concept.title} />
          <h2>{concept.title}</h2>
          <p>{concept.description}</p>
        </li>
      ))}
    </>
  );
}

export default Concept;

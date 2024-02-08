import React, { useState } from "react";

export default function About(props) {
  let style = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#0f0c36" : "white",
  };

  return (
    <div className="container my-3" style={style}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={style}
            >
              <strong>Establish a mission statement</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse "
          >
            <div className="accordion-body" style={style}>
              Your about page can and will be more comprehensive than a single
              mission statement. However, to draw people in, you need to
              succinctly state your goal in the industry up front.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={style}
            >
              <strong>Reveal how you've evolved</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={style}>
              There's no shame in admitting how your business strategy — or even
              your way of thinking — has changed since you began. In fact, these
              evolutions can improve the story you tell to website visitors.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={style}
            >
              <strong>Explain whom you serve</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={style}>
              You want as many eyeballs on your about page as possible. However,
              you won’t do business with every single website visitor. That’s
              why you must identify and mention your core customer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

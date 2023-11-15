// Item.js
import React from "react";

const Item = ({ project, handleOpenModal }) => {
  return (
    <div className="col-md-4">
      <span className="top_badge__style goldenrod_badge">
        {project.stack[0]} {/* Assuming the first stack is the top badge */}
      </span>
      <div className="card card__style" style={{ width: "24rem" }}>
        <img
          src={project.image}
          className="card-img-top"
          style={{ height: "220px" }}
          alt={project.name}
        />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p>
            {project.stack.map((tech, techIndex) => (
              <span key={techIndex} className="badge__style">
                {tech}
              </span>
            ))}
          </p>
          <p className="card-text">{project.description}</p>
          <div className="d-grid gap-2 col-12 mx-auto">
            <button
              className="btn btn-primary btn_color_pink"
              type="button"
              onClick={() => handleOpenModal(project.video, project.name)}
            >
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

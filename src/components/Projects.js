import React from "react";

function Projects(props) {
  return (
    <form class="container mt-3  ">
      <h3 className="text-center pr-2">ProjectsDeveloped</h3>
      <hr></hr>
      <h5 class="text-center pr-4 ">Project 1</h5>

      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Title *"
          defaultValue={props.title1}
          onChange={props.forTitle1}
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Link *"
          defaultValue={props.projectLink1}
          onChange={props.forProjectLink1}
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Description *"
          defaultValue={props.projectDescription1}
          onChange={props.forProjectDescription1}
        />
      </div>
      {/* second project */}
      <div class="form-group">
        <h5 class="text-center pr-4">Project 2</h5>
        <input
          type="text"
          class="form-control"
          placeholder="Title *"
          defaultValue={props.title2}
          onChange={props.forTitle2}
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Link *"
          defaultValue={props.projectLink2}
          onChange={props.forProjectLink2}
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control"
          placeholder="Description *"
          defaultValue={props.projectDescription2}
          onChange={props.forProjectDescription2}
        />
      </div>
    </form>
  );
}

export default Projects;

import React from "react";

function Experience(props) {
  return (
    <form class="needs-validation container mt-3 pb-2" novalidate>
      <h3 className="text-center pr-2">Experience Details</h3>
      <hr></hr>
      <h5 class="text-center pr-4">Experience 1</h5>
      <div class="form-row pt-4">
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Institue / organaisation *"
            defaultValue={props.institute1}
            onChange={props.forInstitute1}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Position *"
            defaultValue={props.position1}
            onChange={props.forPosition1}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Duration *"
            defaultValue={props.duration1}
            onChange={props.forDuration1}
            required
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          class="form-control"
          placeholder="Description *"
          defaultValue={props.experienceDescription1}
          onChange={props.forExperienceDescription1}
          required
        />
      </div>

      {/* Experience-2 */}
      <h5 class="text-center pr-4 pt-4">Experience 2</h5>
      <div class="form-row pt-4">
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="College/University *"
            defaultValue={props.institute2}
            onChange={props.forInstitute2}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Position *"
            defaultValue={props.position2}
            onChange={props.forPosition2}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Duration *"
            defaultValue={props.duration2}
            onChange={props.forDuration2}
            required
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          class="form-control"
          placeholder="Description *"
          defaultValue={props.experienceDescription2}
          onChange={props.forExperienceDescription2}
          required
        />
      </div>
    </form>
  );
}

export default Experience;

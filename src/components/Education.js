import React from "react";

function Education(props) {
  return (
    <form class="needs-validation container mt-3 pb-2" novalidate>
      <h3 className="text-center pr-2">Education Details</h3>
      <hr></hr>
      <div class="form-row pt-4">
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="College/University *"
            defaultValue={props.college1}
            onChange={props.forCollege1}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="date"
            class="form-control"
            placeholder="DD-MM-YY (Start data)"
            defaultValue={props.startDate1}
            onChange={props.forStartDate1}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="date"
            class="form-control"
            placeholder="DD-MM-YY (End data)"
            defaultValue={props.endDate1}
            onChange={props.forEndDate1}
            required
          />
        </div>
      </div>
      {/* ----------- */}
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Qualification *"
            defaultValue={props.qualification1}
            onChange={props.forQualification1}
            required
          />
        </div>
        <div class="col mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Description *"
            defaultValue={props.description1}
            onChange={props.forDescription1}
            required
          />
        </div>
      </div>
      {/* Education -2 */}
      <div class="form-row mt-5">
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="School *"
            defaultValue={props.college2}
            onChange={props.forCollege2}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="date"
            class="form-control"
            placeholder="DD-MM-YY (Start data)"
            defaultValue={props.startDate2}
            onChange={props.forStartDate2}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="date"
            class="form-control"
            placeholder="DD-MM-YY (End data)"
            defaultValue={props.endDate2}
            onChange={props.forEndDate2}
            required
          />
        </div>
      </div>
      {/* ----------- */}
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Qualification *"
            defaultValue={props.qualification2}
            onChange={props.forQualification2}
            required
          />
        </div>
        <div class="col mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Description *"
            defaultValue={props.description2}
            onChange={props.forDescription2}
            required
          />
        </div>
      </div>
    </form>
  );
}

export default Education;

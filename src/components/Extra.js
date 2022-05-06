import React from "react";

function Extra(props) {
  return (
    <form class="needs-validation container mt-3 " novalidate>
      <h3 className="text-center pr-3">Extra Details</h3>
      <hr></hr>
      <h5 class="text-center pr-4">Skills\Languages</h5>
      <div class="form-row pt-4">
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Skill 1 "
            defaultValue={props.skill1}
            onChange={props.forSkill1}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Skill 2"
            defaultValue={props.skill2}
            onChange={props.forSkill2}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Skill 3"
            defaultValue={props.skill3}
            onChange={props.forSkill3}
            required
          />
        </div>
      </div>
      <div class="form-row pt-4">
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Skill 4"
            defaultValue={props.skill4}
            onChange={props.forSkill4}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Skill 5"
            defaultValue={props.skill5}
            onChange={props.forSkill5}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Skill 6"
            defaultValue={props.skill6}
            onChange={props.forSkill6}
            required
          />
        </div>
      </div>
      {/* Extra --Interest----2 */}
      <h5 class="text-center pr-4">Interest</h5>
      <div class="form-row pt-4">
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Interest 1 "
            defaultValue={props.interest1}
            onChange={props.forInterest1}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Interest 2"
            defaultValue={props.interest2}
            onChange={props.forInterest2}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Interest 3"
            defaultValue={props.interest3}
            onChange={props.forInterest3}
            required
          />
        </div>
      </div>
      <div class="form-row pt-4">
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Interest 4"
            defaultValue={props.interest4}
            onChange={props.forInterest4}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Interest 5"
            defaultValue={props.interest5}
            onChange={props.forInterest5}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Interest 6"
            defaultValue={props.interest6}
            onChange={props.forInterest6}
            required
          />
        </div>
      </div>
    </form>
  );
}

export default Extra;

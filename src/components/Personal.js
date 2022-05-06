import React from "react";

function Personal(props) {
  console.log("renderd");

  return (
    <form className="container mt-3" id="personal">
      <h3 className="text-center pr-2">PersonalDetails</h3>
      <hr></hr>
      <div class="form-row mt-3  pt-4">
        <div class="col-5">
          <input
            type="text"
            onChange={props.forFname}
            defaultValue={props.fname}
            class="form-control"
            placeholder="First name"
            required="required"
          />
        </div>
        <div class="col-2"></div>
        <div class="col-5">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            onChange={props.forLname}
            defaultValue={props.lname}
          />
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="col ">
          <input
            type="email"
            class="form-control "
            placeholder="Email"
            onChange={props.forMail}
            defaultValue={props.mail}
          />
        </div>
        <div class="col-2"></div>
        <div class="col">
          <input
            type="number"
            class="form-control"
            placeholder="Phone Number"
            required="required"
            defaultValue={props.number}
            onChange={props.forNumber}
          />
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="col ">
          <input
            type="text"
            class="form-control "
            placeholder="Your Website"
            defaultValue={props.web}
            onChange={props.forWeb}
          />
        </div>
        <div class="col-2"></div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="GitHub"
            defaultValue={props.git}
            onChange={props.forGit}
          />
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="col ">
          <input
            type="text"
            class="form-control "
            placeholder="Linked In"
            defaultValue={props.linkdin}
            onChange={props.forLinkdin}
          />
        </div>
        <div class="col-2"></div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Twitter"
            defaultValue={props.twitter}
            onChange={props.forTwitter}
          />
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="col ">
          <input
            type="text"
            class="form-control "
            placeholder="Facebook"
            defaultValue={props.fb}
            onChange={props.forFB}
          />
        </div>
        <div class="col-2"></div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Instagram"
            defaultValue={props.instagram}
            onChange={props.forInstagram}
          />
        </div>
      </div>
    </form>
  );
}

export default Personal;

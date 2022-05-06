import React from "react";

function Resume(props) {
  let sty = {
    borderRadius: "10",
  };
  return (
    <fieldset style={{ borderRadius: 10 }} class="container bg-secondary mt-3">
      <h2 class="text-center text-white pr-4 pb-3 pt-4">Resume</h2>
      <div class="row">
        <div class="col-5">
          <table
            class="table table-hover table-warning  "
            style={{ borderRadius: 10 }}
          >
            <h4 class="text-center pt-3">About</h4>
            <hr></hr>
            <tr>
              <td>
                {props.fname}
                {props.lname}
              </td>
            </tr>
            <tr>
              <td>{props.mail}</td>
            </tr>
            <tr>
              <td>{props.number}</td>
            </tr>
            <tr>
              <td>{props.web}</td>
            </tr>
            <tr>
              <td>{props.git}</td>
            </tr>
            <tr>
              <td>{props.linkdin}</td>
            </tr>
            <tr>
              <td>{props.twitter}</td>
            </tr>
            <tr>
              <td>{props.fb}</td>
            </tr>
            <tr>
              <td>{props.instagram}</td>
            </tr>
          </table>
        </div>
        {/* ///Right side */}
        <div class="col">
          <table
            class="table table-hover table-info  "
            style={{ borderRadius: 10 }}
          >
            {/* Education Details */}
            <h4 class="text-center pt-3">Education</h4>
            <hr></hr>
            <tr>
              <td>College{props.college1}</td>
            </tr>
            <tr>
              <td>Start: {props.startDate1}</td>
            </tr>
            <tr>
              <td>End: {props.endDate1}</td>
            </tr>
            <tr>
              <td>Qualification :{props.qualification1}</td>
            </tr>
            <tr>
              <td>Description :{props.description1}</td>
            </tr>
            <tr>
              <td>School{props.college2}</td>
            </tr>
            <tr>
              <td>Start: {props.startDate2}</td>
            </tr>
            <tr>
              <td>End: {props.endDate2}</td>
            </tr>
            <tr>
              <td>Qualification :{props.qualification2}</td>
            </tr>
            <tr>
              <td>Description :{props.description2}</td>
            </tr>
          </table>
        </div>
      </div>
      {/* //---parent row */}
      <div class="row ">
        <div class="col-11 container p-4">
          <h4 class="text-center text-yellow">Project</h4>
          <hr></hr>
          <table
            class="table table-hover table-danger"
            style={{ borderRadius: 20 }}
          >
            <tr>
              <td>Title:{props.title1}</td>
            </tr>
            <tr>
              <td>Link:{props.link1}</td>
            </tr>
            <tr>
              <td>Title:{props.pdes1}</td>
            </tr>
            {/* project-2 */}
            <tr>
              <td>Title:{props.title2}</td>
            </tr>
            <tr>
              <td>Link:{props.link2}</td>
            </tr>
            <tr>
              <td>Title:{props.pdes2}</td>
            </tr>
          </table>
        </div>
      </div>
      {/* Extra */}
      {/* Skillls */}
      <div class="row ">
        <div class="col-6  p-4">
          <h4 class="text-center text-white">Skills</h4>
          <hr></hr>
          <table
            class="table table-hover table-warning"
            style={{ borderRadius: 20 }}
          >
            <tr>
              <td>{props.skill1}</td>
            </tr>
            <tr>
              <td>{props.skill2}</td>
            </tr>
            <tr>
              <td>{props.skill3}</td>
            </tr>
            <tr>
              <td>{props.skill4}</td>
            </tr>
            <tr>
              <td>{props.skill5}</td>
            </tr>
            <tr>
              <td>{props.skill6}</td>
            </tr>
          </table>
        </div>
        {/* INterest */}
        <div class="col-6  p-4">
          <h4 class="text-center text-white">Interest</h4>
          <hr></hr>
          <table
            class="table table-hover table-warning"
            style={{ borderRadius: 20 }}
          >
            <tr>
              <td>{props.interest1}</td>
            </tr>
            <tr>
              <td>{props.interest2}</td>
            </tr>
            <tr>
              <td>{props.interest3}</td>
            </tr>
            <tr>
              <td>{props.interest4}</td>
            </tr>
            <tr>
              <td>{props.interest5}</td>
            </tr>
            <tr>
              <td>{props.interest6}</td>
            </tr>
          </table>
        </div>
      </div>
      {/* Experience */}
      <div class="row ">
        <div class="col-8 container">
          <table
            class="table table-hover table-info  "
            style={{ borderRadius: 10 }}
          >
            {/* Education Details */}
            <h4 class="text-center pt-3">Experience</h4>
            <hr></hr>
            <tr>
              <td>Organization- {props.org1}</td>
            </tr>
            <tr>
              <td>Position- {props.position1}</td>
            </tr>
            <tr>
              <td>Months- {props.expduration1}</td>
            </tr>
            <tr>
              <td>Description- {props.expdes1}</td>
            </tr>
          </table>
        </div>
      </div>
    </fieldset>
  );
}

export default Resume;

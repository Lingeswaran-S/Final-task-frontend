import React from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Extra from "./components/Extra";

import NavBar from "./components/NavBar";
import Personal from "./components/Personal";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  //For Personal Details
  let [fname, setFname] = React.useState("");
  function forFname(e) {
    setFname(e.target.value);
  }
  let [lname, setLname] = React.useState();
  function forLname(e) {
    setLname(e.target.value);
  }
  let [mail, setmail] = React.useState();
  function forMail(e) {
    console.log("mail");
    setmail(e.target.value);
  }
  let [number, setNumber] = React.useState();
  function forNumber(e) {
    setNumber(e.target.value);
  }
  let [web, setweb] = React.useState();
  function forWeb(e) {
    setweb(e.target.value);
  }
  let [git, setGit] = React.useState();
  function forGit(e) {
    setGit(e.target.value);
  }
  let [linkdin, setLinkdin] = React.useState();
  function forLinkdin(e) {
    setLinkdin(e.target.value);
  }
  let [twitter, setTwitter] = React.useState();
  function forTwitter(e) {
    setTwitter(e.target.value);
  }
  let [fb, setFB] = React.useState();
  function forFB(e) {
    setFB(e.target.value);
  }
  let [instagram, setInstagram] = React.useState();
  function forInstagram(e) {
    setInstagram(e.target.value);
  }
  //End-personal Details
  //Edcation-start
  //edu-1
  let [college1, setCollege1] = React.useState();
  let [startDate1, setStartDate1] = React.useState();
  let [endDate1, setEndDate1] = React.useState();
  let [qualification1, setQualification1] = React.useState();
  let [description1, setDescription1] = React.useState();
  function forCollege1(e) {
    setCollege1(e.target.value);
  }
  function forStartDate1(e) {
    setStartDate1(e.target.value);
  }
  function forEndDate1(e) {
    setEndDate1(e.target.value);
  }
  function forQualification1(e) {
    setQualification1(e.target.value);
  }
  function forDescription1(e) {
    setDescription1(e.target.value);
  }
  //edu-2
  let [college2, setCollege2] = React.useState();
  let [startDate2, setStartDate2] = React.useState();
  let [endDate2, setEndDate2] = React.useState();
  let [qualification2, setQualification2] = React.useState();
  let [description2, setDescription2] = React.useState();
  function forCollege2(e) {
    setCollege2(e.target.value);
  }
  function forStartDate2(e) {
    setStartDate2(e.target.value);
  }
  function forEndDate2(e) {
    setEndDate2(e.target.value);
  }
  function forQualification2(e) {
    setQualification2(e.target.value);
  }
  function forDescription2(e) {
    setDescription2(e.target.value);
  }
  //Education-end

  //Project -start
  //project-1
  let [title1, setTitle1] = React.useState();
  let [projectLink1, setProjectLink1] = React.useState();
  let [projectDescription1, setProjectDescription1] = React.useState();
  function forTitle1(e) {
    setTitle1(e.target.value);
  }
  function forProjectLink1(e) {
    setProjectLink1(e.target.value);
  }
  function forProjectDescription1(e) {
    setProjectDescription1(e.target.value);
  }
  // //project-2
  let [title2, setTitle2] = React.useState();
  let [projectLink2, setProjectLink2] = React.useState();
  let [projectDescription2, setProjectDescription2] = React.useState();
  function forTitle2(e) {
    setTitle2(e.target.value);
  }
  function forProjectLink2(e) {
    setProjectLink2(e.target.value);
  }
  function forProjectDescription2(e) {
    setProjectDescription2(e.target.value);
  }
  //project -end
  //Experience--Start
  //Experience-1
  let [institute1, setInstitute1] = React.useState();
  let [position1, setPosition1] = React.useState();
  let [duration1, setDuration1] = React.useState();
  let [experienceDescription1, setExperienceDescription1] = React.useState();
  function forInstitute1(e) {
    setInstitute1(e.target.value);
  }
  function forPosition1(e) {
    setPosition1(e.target.value);
  }
  function forDuration1(e) {
    setDuration1(e.target.value);
  }
  function forExperienceDescription1(e) {
    setExperienceDescription1(e.target.value);
  }
  //Experience-2
  let [institute2, setInstitute2] = React.useState();
  let [position2, setPosition2] = React.useState();
  let [duration2, setDuration2] = React.useState();
  let [experienceDescription2, setExperienceDescription2] = React.useState();
  function forInstitute2(e) {
    setInstitute2(e.target.value);
  }
  function forPosition2(e) {
    setPosition2(e.target.value);
  }
  function forDuration2(e) {
    setDuration2(e.target.value);
  }
  function forExperienceDescription2(e) {
    setExperienceDescription2(e.target.value);
  }
  //Experience--End
  //Extra--Start
  //Skill-1
  let [skill1, setSkill1] = React.useState([]);
  let [skill2, setSkill2] = React.useState([]);
  let [skill3, setSkill3] = React.useState([]);
  let [skill4, setSkill4] = React.useState([]);
  let [skill5, setSkill5] = React.useState([]);
  let [skill6, setSkill6] = React.useState([]);
  function forSkill1(e) {
    setSkill1(e.target.value);
  }
  function forSkill2(e) {
    setSkill2(e.target.value);
  }
  function forSkill3(e) {
    setSkill3(e.target.value);
  }
  function forSkill4(e) {
    setSkill4(e.target.value);
  }
  function forSkill5(e) {
    setSkill5(e.target.value);
  }
  function forSkill6(e) {
    setSkill6(e.target.value);
  }
  //Interest--2
  let [interest1, setInterest1] = React.useState([]);
  let [interest2, setInterest2] = React.useState([]);
  let [interest3, setInterest3] = React.useState([]);
  let [interest4, setInterest4] = React.useState([]);
  let [interest5, setInterest5] = React.useState([]);
  let [interest6, setInterest6] = React.useState([]);
  function forInterest1(e) {
    setInterest1(e.target.value);
  }
  function forInterest2(e) {
    setInterest2(e.target.value);
  }
  function forInterest3(e) {
    setInterest3(e.target.value);
  }
  function forInterest4(e) {
    setInterest4(e.target.value);
  }
  function forInterest5(e) {
    setInterest5(e.target.value);
  }
  function forInterest6(e) {
    setInterest6(e.target.value);
  }

  //Extra--End

  let [button, setButton] = React.useState(0);
  function buttonProcess() {
    if (button === 0) return "none";
    return; //return "btn btn-danger btn-lg previous mr-4";
  }
  let [styForNext, setStyForNext] = React.useState("");
  let [styForShow, setStyForShow] = React.useState("none");
  function buttonNextClick(e) {
    console.log(button);
    if (fname.length >= 4 && lname.length >= 1) {
      //document.getElementById("t").preventDefault();
      if (button === 3) {
        setStyForNext("none");
        setStyForShow("");
      }
      if (button != 5) {
        setButton(button + 1);
      }
    } else {
      alert(`Please Make sure you enter everything`);
    }
    // }
  }
  function buttonPreClick() {
    setButton(button - 1);
    setStyForNext("");
    setStyForShow("none");
  }
  let sty = {
    display: buttonProcess(),
  };
  let [resume, setResume] = React.useState(0);
  return (
    <React.Fragment>
      <NavBar />
      {/* <Personal /> */}
      {
        {
          0: (
            <Personal
              fname={fname}
              forFname={forFname}
              lname={lname}
              forLname={forLname}
              forMail={forMail}
              mail={mail}
              forNumber={forNumber}
              number={number}
              forWeb={forWeb}
              web={web}
              forGit={forGit}
              git={git}
              forLinkdin={forLinkdin}
              linkdin={linkdin}
              forTwitter={forTwitter}
              twitter={twitter}
              forFB={forFB}
              fb={fb}
              forInstagram={forInstagram}
              instagram={instagram}
            />
          ),
          1: (
            <Education
              forCollege1={forCollege1}
              college1={college1}
              forStartDate1={forStartDate1}
              startDate1={startDate1}
              forEndDate1={forEndDate1}
              endDate1={endDate1}
              forDescription1={forDescription1}
              description1={description1}
              forQualification1={forQualification1}
              qualification1={qualification1}
              // --2
              forCollege2={forCollege2}
              college2={college2}
              forStartDate2={forStartDate2}
              startDate2={startDate2}
              forEndDate2={forEndDate2}
              endDate2={endDate2}
              forDescription2={forDescription2}
              description2={description2}
              forQualification2={forQualification2}
              qualification2={qualification2}
            />
          ),
          2: (
            <Projects
              //---1
              forTitle1={forTitle1}
              title1={title1}
              forProjectLink1={forProjectLink1}
              projectLink1={projectLink1}
              forProjectDescription1={forProjectDescription1}
              projectDescription1={projectDescription1}
              //---2
              forTitle2={forTitle2}
              title2={title2}
              forProjectLink2={forProjectLink2}
              projectLink2={projectLink2}
              forProjectDescription2={forProjectDescription2}
              projectDescription2={projectDescription2}
            />
          ),

          3: (
            <Experience
              //Experience-1
              forInstitute1={forInstitute1}
              institute1={institute1}
              forPosition1={forPosition1}
              position1={position1}
              forDuration1={forDuration1}
              duration1={duration1}
              forExperienceDescription1={forExperienceDescription1}
              experienceDescription1={experienceDescription1}
              //Experience--2
              forInstitute2={forInstitute2}
              institute2={institute2}
              forPosition2={forPosition2}
              position2={position2}
              forDuration2={forDuration2}
              duration2={duration2}
              forExperienceDescription2={forExperienceDescription2}
              experienceDescription2={experienceDescription2}
            />
          ),
          4: (
            <Extra
              forSkill1={forSkill1}
              forSkill2={forSkill2}
              forSkill3={forSkill3}
              forSkill4={forSkill4}
              forSkill5={forSkill5}
              forSkill6={forSkill6}
              skill1={skill1}
              skill2={skill2}
              skill3={skill3}
              skill4={skill4}
              skill5={skill5}
              skill6={skill6}
              //Interest
              forInterest1={forInterest1}
              forInterest2={forInterest2}
              forInterest3={forInterest3}
              forInterest4={forInterest4}
              forInterest5={forInterest5}
              forInterest6={forInterest6}
              interest1={interest1}
              interest2={interest2}
              interest3={interest3}
              interest4={interest4}
              interest5={interest5}
              interest6={interest6}
            />
          ),
          5: (
            <Resume
              fname={fname}
              lname={lname}
              number={number}
              mail={mail}
              web={web}
              git={git}
              linkdin={linkdin}
              twitter={twitter}
              fb={fb}
              instagram={instagram}
              skill1={skill1}
              skill2={skill2}
              skill3={skill3}
              skill4={skill4}
              skill5={skill5}
              skill6={skill6}
              interest1={interest1}
              interest2={interest2}
              interest3={interest3}
              interest4={interest4}
              interest5={interest5}
              interest6={interest6}
              college1={college1}
              startDate1={startDate1}
              endDate1={endDate1}
              qualification1={qualification1}
              description1={description1}
              college2={college2}
              startDate2={startDate2}
              endDate2={endDate2}
              qualification2={qualification2}
              description2={description2}
              title1={title1}
              link1={projectLink1}
              pdes1={projectDescription1}
              title2={title2}
              link2={projectLink2}
              pdes2={projectDescription2}
              org1={institute1}
              position1={position1}
              expduration1={duration1}
              expdes1={experienceDescription1}
            />
          ),
        }[button]
      }
      ;
      <div className="container mt-5 col-md-12 text-center">
        <div className="col-5"></div>
        <button
          class="btn btn-danger btn-lg previous mr-4"
          style={sty}
          onClick={buttonPreClick}
        >
          Previous
        </button>
        <button
          class="btn btn-danger btn-lg next ml-4"
          onClick={(e) => buttonNextClick(e)}
          style={{ display: styForNext }}
          id="t"
        >
          Next
        </button>
        <button
          class="btn btn-success btn-lg next ml-4"
          style={{ display: styForShow }}
          onClick={(e) => buttonNextClick(e)}
        >
          Show Result !
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;

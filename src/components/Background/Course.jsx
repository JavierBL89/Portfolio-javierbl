import React from "react";
import CourseContent from "./CourseContent";
import CourseDiploma from "./CourseDiploma";


function Course(props){
    return(
      <div className="course-container-wraper" data-aos="fade-up-right">
        <div className="container-fluid course-container">
        <div className="row g-0">
          <div className="col-12 col-lg-8">
          <ul>
            <li>{props.text}</li>
            <li>{props.qualification}</li>
           </ul>
          </div>
          <div className="col-12 ms-sm-0 ms-lg-5 col-lg-3">
            <CourseDiploma
                text="Diploma"
                href={props.diplomaURL}
                className="course-diploma d-block ms-1"
                id="course-diploma"
              />
              {/* <CourseContent
                text="Skills learned"
                href="#"
                className="course-content d-block ms-1"
                id="course-content"
              /> */}
          </div>
        </div>
        </div>
      </div>
    );
};

export default Course;

import React from "react";
import CourseContent from "./CourseContent";
import CourseDescrip from "./CourseDescrip";
import CourseDiploma from "./CourseDiploma";


function Course(){
    return(
      <div className="course-container-wraper">
        <div className="container-fluid course-container">
            <CourseDescrip 
              text={<><strong>Diploma in Software Development (Ecommerce Applications) </strong>
                   at <a href="https://codeinstitute.net/ie/"
                       id="code-institute"
                       target="blank">Code Institute </a> 
                   of Dublin NQF 6'</>
                   }
            />
            <CourseDiploma
              text="Diploma"
              href="#"
              className="course-diploma d-block ms-1"
              id="course-diploma"
            />
            <CourseContent
              text="Skills learned"
              href="#"
              className="course-content d-block ms-1"
              id="course-content"
            />
        </div>
      </div>
    );
};

export default Course;

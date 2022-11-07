import React from "react";
import CourseContent from "./CourseContent";
import CourseDescrip from "./CourseDescrip";
import CourseDiploma from "./CourseDiploma";


function Course(){
    return(
        <div className="container-fluid course-container">
            <CourseDescrip 
              text={<>Diploma in Software Development Ecommerce Applications 
                   at <a href="https://codeinstitute.net/ie/"
                       id="code-institute"
                       target="blank">Code Institute </a> 
                   of Dublin NQF 6'</>
                   }
            />
            <CourseDiploma
              href="#"
              className="course-diploma d-block ms-1"
              id="course-diploma"
            />
            <CourseContent
              href="#"
              className="course-content d-block ms-1"
              id="course-content"
            />
        </div>

    );
};

export default Course;

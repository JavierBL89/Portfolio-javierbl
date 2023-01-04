import React from "react";
import CourseContent from "./CourseContent";
import CourseDescrip from "./CourseDescrip";
import CourseDiploma from "./CourseDiploma";


function Course(){
    return(
      <div className="course-container-wraper" data-aos="fade-up-right">
        <div className="container-fluid course-container">
        <div className="row g-0">
          <div className="col-12 col-lg-8">
            <CourseDescrip 
                text={<><strong>Diploma in Software Development </strong>
                     (Ecommerce Applications)
                     at <a href="https://codeinstitute.net/ie/"
                         id="code-institute"
                         target="blank">Code Institute </a> 
                     of Dublin.</>
                     }
                qualification={<span>NQF 6</span>}
              />
          </div>
          <div className="col-12 ms-5 col-lg-3">
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
        </div>
      </div>
    );
};

export default Course;

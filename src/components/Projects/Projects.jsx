import React from "react";


function Projects(){
    return (
        <section id="projects-section">
            <div className="container fluid projects-wraper" id="projects-wraper">
                <div className="container-fluid projects-container" id="hobbies-container">
                    <div className="container-fluid project-card">
                      <div className="project-card-head">
                        <div className="row g-0">
                             <h6>Ecommerce Store</h6>
                            <div className="col-8 project-img"></div>
                            <div className="col-4 project-tech">
                                <div className="row ">
                                    <div className="col-6">
                                      <img src="https://img.icons8.com/color/25/null/python--v1.png" alt="python-logo"/>
                                    </div>
                                    <div className="col-6">
                                    <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/null/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-bold-tal-revivo.png" alt="django-logo"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">

                                    </div>
                                    <div className="col-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                       <div className="project-card-body">
                           <div className="row g-0">
                                <div className="col-2"></div>
                                <div className="col-9 project-description">
                                    <small>oncdjdnjvidnivjnsdjivnsji kdncsocjnsjon dcnodjsncosncon odcnsdocnso</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                      <div className="container-fluid project-card">
                          <div className="project-card-head">
                            <div className="row g-0">
                                 <h6>Blog Mindfulness</h6>
                                <div className="col-8 project-img"></div>
                                <div className="col-4 project-tech"></div>
                            </div>
                            </div>
                            <div className="project-card-body">
                                <div className="row g-0">
                                    <div className="col-2"></div>
                                    <div className="col-8 project-description">
                                        <small>oncdjdnjvidnivjnsdjivnsji kdncsocjnsjon dcnodjsncosncon odcnsdocnso</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>

    
    );
};

export default Projects;
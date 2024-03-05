// import { oneProject } from "../data";
import useProject from "../hooks/use-project";
// import usePledge from "../hooks/use-pledges";
// import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import './ProjectPage.css';
import PledgeForm from "../components/PledgeForm";
import ProjectPledges from "../components/ProjectPledges";
import { useAuth } from "../hooks/use-auth.js";
// import useUser from "../hooks/use-user.js";
import putProjectStatus from "../api/put-project-status.js";
import ProgressBar from "../components/ProgressBar.jsx";

function ProjectPage() {

    const { id } = useParams();
    const userId = parseInt(window.localStorage.getItem("id"));
    const {auth, setAuth} = useAuth();
    const {project, isLoading, error} = useProject(id);
    

    if (isLoading) {
        return (<p>loading...</p>);
               };
    if (error) {
        return (<p>{error.message}</p>);   };
 const progress = parseInt(project.sum_of_pledges.amount__sum/project.goal*100);
    if (project.is_successful == false  && project.goal <= project.sum_of_pledges.amount__sum){
      putProjectStatus(id);
    };
    

    return (
    <div>
        <div id="project-info">
             <img id="project-img" src={project.image} alt={`${project.title} image`} />

             
            <div id="project-description">
               <div id="project-desc-title">
              <h3>{project.title}</h3>
               {auth.token && userId==project.owner ? (    
                  <div id='change-project-button'>
                      <Link id="settings-button" to={`/project/${project.id}/settings/`}>Change Project</Link>
                  </div>
                    ) : (
                  <div>
                  </div>
           
            )}

               </div>
               
                
                <Link to={`/user/${project.owner}`}>Project Owner</Link>
                <h4> Animal: </h4> <p>{project.animal}</p>
                <h4> Location: </h4><p>{`${project.city}, ${project.country}`}</p>
                <h4> Goal: </h4><p>{`${project.goal} AUD `}</p>
                <h4> Money Raised: </h4><p>{`${project.sum_of_pledges.amount__sum} AUD `}</p>
                <ProgressBar
                        progress={progress}
                        goal={project.goal} />
       
                <div>

{/* Pledge Form */}

         


            </div>

              
        </div>
                         
            </div>
            
 
        <div id="pledges">
              <h3> Support this campaign</h3>  
          {auth.token ? (
              <div >
            <PledgeForm id={id}/>
             </div>
            ): (
            <div>
              <h3>Login to Create a Pledge</h3>
            </div>
            )}  
            
 <ProjectPledges projectId={id}/>

              </div>
              
    </div>
    
    )
      };
      export default ProjectPage;
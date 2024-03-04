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
 
    if (project.is_successful == false  && project.goal <= project.sum_of_pledges.amount__sum){
      putProjectStatus(id);
    };
    

    return (
    <div>
        <div id="project-info">
             <img id="project-img" src={project.image} alt={`${project.title} image`} />
            <div id="project-description">
                <h2>{project.title}</h2>
                <Link to={`/user/${project.owner}`}>Project Owner</Link>
                <h3> {`Animal: ${project.animal}`}</h3>
                <h3> {`Location: ${project.city}, ${project.country}`}</h3>
                <h3> {`Goal: ${project.goal} AUD `}</h3>
                <h3> {`Money Raised: ${project.sum_of_pledges.amount__sum} AUD `}</h3>
                <h3> {`Goal Reached: ${project.is_successful}`}</h3>              

                <h3> {`Created at: ${project.date_created}`}</h3>
                <h3> {`Open Project: ${project.is_open}`}</h3>
                <h3> {`Owner: ${project.owner}`}</h3>              
            </div>
        </div>

        {/* {userId==project.owner ? (
              <div>
                <Link to={`/project/${project.id}/settings/`}>Change Project</Link>
            </div>
            ) : (
            <div>
              <h3>Login to Create a Project</h3>
            </div>
            )}     */}

         {auth.token ? (
           userId==project.owner ? (
            <div>
                <Link to={`/project/${project.id}/settings/`}>Change Project</Link>
            </div>
        ) : (

              <div>
            <PledgeForm id={id}/>
             </div>
            )): (
            <div>
              <h3>Login to Create a Pledge</h3>
            </div>
            )}    
      <ProjectPledges projectId={id}/>
        
    </div>
    )
      };
      export default ProjectPage;
// import { oneProject } from "../data";
import useProject from "../hooks/use-project";
import usePledge from "../hooks/use-pledges";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import './ProjectPage.css';
import PledgeForm from "../components/PledgeForm";
import ProjectPledges from "../components/ProjectPledges";
import { useAuth } from "../hooks/use-auth.js";


function ProjectPage() {

    const { id } = useParams();
    const userId = parseInt(window.localStorage.getItem("id"));
    
    const {auth, setAuth} = useAuth();

    const {project, isLoading, error} = useProject(id);

    // const [sum, setSum] = useState(0);

    // const sumOfPledges = (project) => 
    //     {project.pledges.map((projectData, key) => {
    //         setSum(sum + projectData.pledges.amount);
    //         return sum;
    // })};

    if (isLoading) {
        return (<p>loading...</p>);
               };
    if (error) {
        return (<p>{error.message}</p>);   };

   

    return (
    <div>
        <div id="project-info">
             <img id="project-img" src={project.image} alt={`${project.title} image`} />
            <div id="project-description">
                <h2>{project.title}</h2>
                <h3> {`Animal: ${project.animal}`}</h3>
                <h3> {`Location: ${project.city}, ${project.country}`}</h3>
                {/* <h3> {`Goal: ${project.goal} AUD ${sum} `}</h3> */}

                <h3> {`Created at: ${project.date_created}`}</h3>
                <h3> {`Status: ${project.is_open}`}</h3>
                <h3> {`Owner: ${project.owner}`}</h3>
                <h3> {`User Id: ${userId}`}</h3>



                
            </div>
        </div>

        {userId==project.owner ? (
              <div>
                <Link to={`/project/${project.id}/settings/`}>Change Project</Link>
            </div>
            ) : (
            <div>
              <h3>Login to Create a Project</h3>
            </div>
            )}    



         <ProjectPledges projectId={id}/>

         {auth.token ? (
              <div>
            <PledgeForm id={id}/>
             </div>
            ) : (
            <div>
              <h3>Login to Create a Pledge</h3>
            </div>
            )}    

        
    </div>
    )
      };
      export default ProjectPage;
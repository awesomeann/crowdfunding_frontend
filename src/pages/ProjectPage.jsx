// import { oneProject } from "../data";
import useProject from "../hooks/use-project";
import { useParams } from "react-router-dom";
import './ProjectPage.css';

function ProjectPage() {

    const { id } = useParams();


    const {project, isLoading, error} = useProject(id);

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
                <h2>{project.title}</h2>;

                <h3> Created at: {project.date_created}</h3>;
                <h3> {`Status: ${project.is_open}`}</h3>;
            </div>
        </div>

         <h3>Pledges: </h3>;
         <ul>
            {project.pledges.map((pledgeData, key)=> {
            return (
                <li key={key}>
                {pledgeData.amount} from {pledgeData.supporter}
                </li>
            )
            })}
         </ul>
    </div>
    )
      };
      export default ProjectPage;
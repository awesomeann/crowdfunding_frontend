import { Link } from 'react-router-dom';
import "./ProjectCard.css";
import ProgressBar from './ProgressBar';

function ProjectCard (props) {
    const { projectData } = props;
    const progress = parseInt(projectData.sum_of_pledges.amount__sum/projectData.goal*100);
    return (
        <div className='project-card'>
            <Link id="project-card" to={`/project/${projectData.id}`}> 
                <img src={projectData.image} alt={`${projectData.title} image`} />
                <div id='project-card-desc'>
                 <h3 id="project-car-title">{projectData.title}</h3>
                    <ProgressBar
                        progress={progress}
                        goal={projectData.goal} />
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard;
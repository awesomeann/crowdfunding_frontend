// import { allProjects } from "../data";

import useProjects from '../hooks/use-projects';
import ProjectCard from '../components/ProjectCard';
import "./HomePage.css";
import useAuth from "../hooks/use-auth.js";

function HomePage() {
    const {projects , isLoading, error} = useProjects(); //use only projects from the hook [projects, isLoading, error]
    const {auth, setAuth} = useAuth();

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h2> {error.message}</h2>

    return (
    <div>
        <h1>This is the home page.</h1>
        {auth.token ? (
              <div>
                <Link to="/projects/create">Create Project</Link>
            </div>
            ) : (
            <div>
              <h3>Login to Create a Project</h3>
            </div>
            )}    
        <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    </div>
   );
}
    export default HomePage;
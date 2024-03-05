import { Link, Outlet } from "react-router-dom";
import useProjects from '../hooks/use-projects';
import ProjectCard from '../components/ProjectCard';
import "./HomePage.css";
import { useAuth } from "../hooks/use-auth.js";
import img from "/src/assets/images/home-hero.svg";

function HomePage() {
    const {projects , isLoading, error} = useProjects(); //use only projects from the hook [projects, isLoading, error]
    const {auth, setAuth} = useAuth();

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h2> {error.message}</h2>

    return (
  <div>      

      <div id='home-hero'>
        
         <img src={img} id="home-hero-img" />  
         <div id="picture-overlay">
<div id="hero-text">
        
            <h1>CROWDFUND</h1>
            
            <h5>a place where you can help animals live their best lives</h5>
            <a href="#link"> Explore the Campaigns</a>
            <h3  id="link"></h3>
    </div>     
      </div>
      </div>
      <div id="project-list-title">
        <h2>Latest Campaigns</h2>
        {auth.token ? (
                    <Link id="create-project-button" to="/project/create">Create Project</Link>
                ) : (
                <h4>Login to Create a Project</h4>
                )}  

        </div>     
        <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    </div>
   );
}
    export default HomePage;
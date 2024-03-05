 import { useParams } from "react-router-dom";
 import useUser from "../hooks/use-user";
import ProjectCard from "../components/ProjectCard";
import './UserPage.css'

function UserPage() {
 // Here we use a hook that comes for free in react router called `useParams`to get the id from the URL so that we can pass it to our useProject hook.
    // const { id } = useParams();
    // const id = window.localStorage.getItem("id");
 // useProject returns three pieces of info, so we need to grab them all here
    const { id } = useParams();
 const { user, isLoading, error } = useUser(id);
     if (isLoading) {
        return (<p>loading...</p>)
        }
    if (error) {
        return (<p>{error.message}</p>)
        }
    return (
    <div id="user-info">
        <h2> User Info</h2>
        <h4>{`Username: ${user.username}`}</h4>
        <h4>{`First Name: ${user.first_name}`}</h4>
        <h4>{`Last Name: ${user.last_name}`}</h4>
        <h4>{`Email: ${user.email}`}</h4>
        <h4>{`Email: ${user.id}`}</h4>

        <h4>{`Active Account: ${user.is_active}`}</h4>
        <div id="owned-projects">
        <h3>Projects: </h3>
        <div id="project-list">
            {user.owned_projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />
            })}
        </div>
        </div>
    </div>
    );
    }
export default UserPage;
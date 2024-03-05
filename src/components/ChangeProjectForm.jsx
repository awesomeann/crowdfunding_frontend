import { useState } from "react";
import putProject from "../api/put-project.js";
import deleteProject from "../api/delete-project.js";
import useProject from "../hooks/use-project.js";
import { useNavigate } from "react-router-dom";
import './Form.css';


function ChangeProjectForm(props) {
    const projectId = props.id;
    const navigate = useNavigate();
    const {project, isLoading, error} = useProject(projectId);

    const [projectData, setProjectData] = useState([project]
        );

        if (isLoading) {
            return (<p>loading...</p>);
                   };
        if (error) {
            return (<p>{error.message}</p>);   };

    const handleChange = (event) => {
    const { id, value } = event.target;
        setProjectData((prevProjectData) => ({
        ...prevProjectData,
        [id]: value,
    }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (projectData.title || projectData.description || projectData.animal
            || projectData.city || projectData.country || projectData.goal || projectData.image || projectData.is_open ||
            projectData.deadline) {
        putProject(
            projectData.title ,
             projectData.description ,
             projectData.animal,
             projectData.city ,
             projectData.country ,
             projectData.goal ,
             projectData.image,
             projectData.is_open,
             projectData.deadline,
             projectId
        ).then((response) => {
        console.log(response);
        navigate(`/project/${project.id}`);
        });
        
        }
        
        };

        const handleDelete = (event) => {
            event.preventDefault();
            deleteProject(project.id).then((response) => {
                console.log(response);
            });
            navigate('/');
        };


    return (
        <form id="change-project-form">
              <h2>Change Project</h2>
            
            <div>
                <label htmlFor="title">Title:</label>
                <input
                     type="text"
                     id="title"
                     placeholder="Enter project title"
                     defaultValue = {project.title}
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                     type="text"
                     id="description"
                     placeholder="Enter project description"
                     defaultValue = {project.description}
                     onChange={handleChange}
                />
            </div>
            <div>
            <label htmlFor="animal">What animal are you trying to help? </label>

                <select name="animal" id="animal" defaultValue={project.animal} onChange={handleChange} >
                <option value="CAT">Cat</option>
                <option value="DOG">Dog</option>
                <option value="HORSE">Horse</option>
                <option value="BIRD">Bird</option>
                </select>

            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input
                     type="text"
                     id="city"
                     placeholder="Enter the city where the animal is located"
                     defaultValue = {project.city}

                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="country">Country:</label>
                <input
                     type="text"
                     id="country"
                     placeholder="Enter the country where the animal is located"
                     defaultValue = {project.country}

                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal">Goal:</label>
                <input
                     type="text"
                     id="goal"
                     placeholder="Enter project goal in AUD"
                     defaultValue = {project.goal}

                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input
                     type="text"
                     id="image"
                     placeholder="Enter URL of the animal photo"
                     defaultValue = {project.image}

                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="is_open"> Status of the project </label>

                <select name="is_open" id="is_open" defaultValue={project.is_open} onChange={handleChange} >
                <option value="true">Open</option>
                <option value="false">Closed</option>
                </select>
            </div>
            <button type="submit" onClick={handleSubmit}>
                Save Changes
            </button>
            <button id="delete-project-button" type="submit" onClick={handleDelete}>
                Delete Project
            </button>
        </form>
    );

}
export default ChangeProjectForm;
import { useState } from "react";
import postProject from "../api/post-project.js";

function CreateProjectForm() {
    const [projectData, setProjectData] = useState({
            title:	"",
            description: "",
            animal:	"",
            city: "",
            country: "",
            goal: "",
            image: "",
        });
    const handleChange = (event) => {
    const { id, value } = event.target;
        setProjectData((prevProjectData) => ({
        ...prevProjectData,
        [id]: value,
    }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (projectData.title && projectData.description && projectData.animal
            && projectData.city && projectData.country && projectData.goal && projectData.image) {
        postUser(
            projectData.title ,
             projectData.description ,
             projectData.animal,
             projectData.city ,
             projectData.country ,
             projectData.goal ,
             projectData.image
        ).then((response) => {
        console.log(response);
        });
        }
        };

    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                     type="text"
                     id="title"
                     placeholder="Enter project title"
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                     type="text"
                     id="description"
                     placeholder="Enter project description"
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="animal">Animal:</label>
                <input
                     type="text"
                     id="animal"
                     placeholder="Select animal type"
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input
                     type="text"
                     id="city"
                     placeholder="Enter the city where the animal is located"
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="country">Country:</label>
                <input
                     type="text"
                     id="country"
                     placeholder="Enter the country where the animal is located"
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal">Goal:</label>
                <input
                     type="text"
                     id="goal"
                     placeholder="Enter project goal in AUD"
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input
                     type="text"
                     id="image"
                     placeholder="Enter URL of the animal photo"
                     onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Sign Up
            </button>
        </form>
    );

}
export default CreateProjectForm;
import { useState } from "react";
import postPledge from "../api/post-pledge.js";
import { useNavigate } from "react-router-dom";
import ProjectPage from "../pages/ProjectPage.jsx";
import "./ProjectPledges.css";

function PledgeForm(props) {
    const navigate = useNavigate();
    const projectId = props.id;
    const [credentials, setCredentials] = useState({
        amount: "",
        comment: "",
        project: `${projectId}`,
        });
    const handleChange = (event) => {
    const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
    }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.amount && credentials.comment ) {
            postPledge(
                credentials.amount,
                credentials.comment,
                credentials.project
                ).then((response) => {
           
            console.log(response);
            window.location.reload();
        });
        }
        };

    return (
        <form id="pledge-form" >
            <div>
                <label htmlFor="amount">Amount in AUD: </label>
                <input
                     type="text"
                     id="amount"
                     placeholder="Enter amount"
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="comment">Comment: </label>
                <input
                     type="text"
                     id="comment"
                     placeholder="Enter comment"
                     onChange={handleChange}
                />
            </div>
           
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    );

}
export default PledgeForm;
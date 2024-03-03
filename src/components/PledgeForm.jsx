import { useState } from "react";
import postPledge from "../api/post-pledge.js";

function PledgeForm(props) {
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
        });
        }
        };

    return (
        <form >
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
                <label htmlFor="comment">Comment:</label>
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
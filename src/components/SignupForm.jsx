import { useState } from "react";
import postUser from "../api/post-user.js";

function SignupForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email:""
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
        if (credentials.username && credentials.password && credentials.email) {
        postUser(
        credentials.username,
        credentials.password,
        credentials.email
        ).then((response) => {
        console.log(response);
        });
        }
        };

    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                     type="text"
                     id="username"
                     placeholder="Enter username"
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                     type="text"
                     id="password"
                     placeholder="Enter password"
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                     type="text"
                     id="email"
                     placeholder="Enter email"
                     onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Sign Up
            </button>
        </form>
    );

}
export default SignupForm;
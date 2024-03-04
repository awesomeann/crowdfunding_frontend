import { useState } from "react";
import postUser from "../api/post-user.js";
import './Form.css';

function SignupForm() {
    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
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
                credentials.first_name,
                credentials.last_name,
                credentials.username,
                credentials.password,
                credentials.email
                ).then((response) => {
           
            console.log(response);
        });
        }
        };

    return (
        <form id="signup-form" >
              <h2>Sign Up</h2>
            <div>
                <label htmlFor="first-name">First Name:</label>
                <input
                     type="text"
                     id="first-name"
                     placeholder="Enter first name"
                     onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="last-name">Last Name:</label>
                <input
                     type="text"
                     id="last-name"
                     placeholder="Enter last name"
                     onChange={handleChange}
                />
            </div>
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
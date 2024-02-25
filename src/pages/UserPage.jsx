 import { useParams } from "react-router-dom";
 import useUser from "../hooks/use-user";

function UserPage() {
 // Here we use a hook that comes for free in react router called `useParams`to get the id from the URL so that we can pass it to our useProject hook.
    const { id } = useParams();
 // useProject returns three pieces of info, so we need to grab them all here
     const { user, isLoading, error } = useUser(id);
    return (
    <div>
        <h2>{user.id}</h2>
    </div>
    );
    }
export default UserPage;
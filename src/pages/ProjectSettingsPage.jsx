import ChangeProjectForm from "../components/ChangeProjectForm";
import { useParams, Link } from "react-router-dom";

function ProjectSettingsPage() {
    const { id } = useParams();


    return <ChangeProjectForm id={id}/>;
    }
    export default ProjectSettingsPage;
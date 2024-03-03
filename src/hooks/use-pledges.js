import { useState, useEffect, useCallback } from "react";
import getPledges from "../api/get-pledges";

 function usePledges(id) {

const projectId = id;

    const [pledges, setPledge] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    // const [projectId, setProjectId] = useState();

    
    useEffect(() => {
        getPledges(projectId).then((pledges) => {
            setPledge(pledges);
            setIsLoading(false);
            // setProjectId(id);

        }).catch((error) => {
            setError(error);
            setIsLoading(false);
        });

    }, []);
    return {pledges, isLoading, error};
}
export default usePledges;
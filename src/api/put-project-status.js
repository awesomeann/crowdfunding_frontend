
async function putProjectStatus(projectId) {
    const url = `${import.meta.env.VITE_API_URL}/projects-status/${projectId}`;
    const token =window.localStorage.getItem("token");

     const response = await fetch(url, {
        method: "PUT", // We need to tell the server that we are sending JSON data
    // so we set the Content-Type header to application/json
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Token ${token}`,
        },
        
        body: JSON.stringify({
            "is_successful":true
        }), 
    });
        if (!response.ok) {
        const fallbackError = `Error trying to update project status`;
        const data = await response.json().catch(() => { throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage); }
        window. location. reload();
        return await response.json(); 
    }

    export default putProjectStatus;    
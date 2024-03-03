
async function putProject(title, description, animal, city, country, goal, image, is_open, deadline, projectId) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const token =window.localStorage.getItem("token");

     const response = await fetch(url, {
        method: "PUT", // We need to tell the server that we are sending JSON data
    // so we set the Content-Type header to application/json
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Token ${token}`,
        },
        
        body: JSON.stringify({
            "title":	title,
            "description": description,
            "animal":	animal,
            "city": city,
            "country": country,
            "goal": goal,
            "image": image,
            "is_open": is_open,
            "deadline": deadline,
        }), 
    });
        if (!response.ok) {
        const fallbackError = `Error trying to change a project`;
        const data = await response.json().catch(() => { throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage); }
        return await response.json(); 
    }

    export default putProject;    
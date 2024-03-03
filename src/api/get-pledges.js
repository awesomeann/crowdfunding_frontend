async function getPledges(projectId) {
    
    const url = `${import.meta.env.VITE_API_URL}/pledges/${projectId}`
        console.log(url);
    const response = await fetch(url, {method: 'GET'});

    if(!response.ok) {
        const fallbackError = "Error fetching pledges";

        //checking if response has the data bout the error
        const data = await response.json().catch(() => {   //if not - throw an error
            throw new Error(fallbackError);
        })

        //check if the data returns error message, if not use fallBackError
        const errorMessage = data?.details ?? fallbackError;
        throw new Error(errorMessage);

    }

    return await response.json();


};

export default getPledges;
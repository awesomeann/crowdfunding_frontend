import {useState, useEffect} from 'react';

import getProjects from '../api/get-projects';


function useProjects() {
    //define three statest - projects, isLoading and error
const [projects, setProjects] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState();

//manage the result of the state based on whther you get an error or not

useEffect(() => {
    getProjects().then((projects) => { 
        setProjects(projects);
        setIsLoading(false);
    }).catch((error) => {
        setError(error);
        setIsLoading(false);

    })

}, [])

    return {projects, isLoading, error};

}

export default useProjects;
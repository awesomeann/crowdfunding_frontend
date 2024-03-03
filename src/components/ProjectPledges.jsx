import usePledges from "../hooks/use-pledges";
import useUser from "../hooks/use-user";
import './ProjectPledges.css';


function ProjectPledges(props){

    const id = props.projectId;

    const {pledges, isLoading, error} = usePledges(id);


    if (isLoading) {
        return (<p>loading...</p>);
               };
    if (error) {
        return (<p>{error.message}</p>);   };

    return (
    <div>
        

         <h3>Pledges: </h3>
        
         {pledges!='' ? (
              <ul>
              {pledges.map((pledgeData, key)=> {
              return (
                      <li key={key}>
                          {pledgeData.supporter} donated {pledgeData.amount}
                          <div id='pledge-comment'>
                          Comment: {pledgeData.comment}
                          </div>
                      </li>
  
              )
              })}
           </ul>
            ) : (
            <div>
              <h3>Be the first to pledge! </h3>
            </div>
            )}    

        
         


    </div>
    )}
      ;
      export default ProjectPledges;
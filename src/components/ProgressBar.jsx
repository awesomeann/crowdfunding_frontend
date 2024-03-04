import React from 'react'
 
const ProgressBar = (props) => {

    const {progress, goal} = props;

    const Parentdiv = {
        height: 10,
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 20
      }
     
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'rgb(245, 176, 49)',
        borderRadius:40,
        textAlign: 'right'
      }

      const ChilddivComplete = {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(45, 204, 80)',
        borderRadius:40,
        textAlign: 'right'
      }
     
     
    return (
        
progress < 100 ? (
<div >      
    <div style={Parentdiv}>
        <div style={Childdiv} >
        </div>
         <p align="right">{goal} AUD</p>
    </div>
   
</div>
          ) : (
<div >                  
    <div style={Parentdiv}>
        <div style={ChilddivComplete}>
        </div>
         <p align="right"> {progress}% funded</p>
    </div>
   
    </div>
          )  
);
          }
export default ProgressBar;
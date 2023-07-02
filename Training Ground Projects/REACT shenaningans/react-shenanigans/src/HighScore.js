import React from 'react';



function HighScore(props) {
  return(
    <>
    <h1>{props.commentObject.username}</h1>
    <h2>{props.commentObject.date}</h2>
    <h2>{props.commentObject.score}</h2>
    </>
  );
  

}



export default HighScore;
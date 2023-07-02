import React from 'react';
import styles from './HighScore.module.css';


function HighScore(props) {
  return(
    <>
    
      <div className={styles.ScoreBoard}>    
    
      <h1>{props.commentObject.username}</h1>
      <h2>{props.commentObject.date}</h2>
      <h2>{props.commentObject.score}</h2>
    
      </div>
    

    </>
  );
  

}



export default HighScore;
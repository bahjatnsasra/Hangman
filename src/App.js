import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters ';
import React , {useState} from 'react';

import './App.css';

function generateLetterStatuses () {
  let lettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let letterObject  = {}

  for (const letter of lettersArray) {
    letterObject[letter] = false
  }


  return letterObject
}


function App() {
  let [letterStatus,setletterStatus] = useState(generateLetterStatuses())
  let [solution] = useState({word: "BYTES" , hint: "hint"})
  let [score ,setScore ] = useState(100)

  function selectLetter(letter) {
    let newLetterStatus = {...letterStatus}
    newLetterStatus[letter] = true
    setletterStatus(newLetterStatus)
    updateScore(letter)
    
  }

  function updateScore(letter) {
    if (solution.word.includes(letter)) {
      setScore(score + 5)
    }else if(score - 20 < 0){
      setScore(0)
    }
    else{
      setScore(score - 20)
    }
  }

  function EndGame(params) {
    return <p>you killed the man !!!</p>
  }


  return (
    <div>
      {score === 0 ?
      <EndGame /> 
      :
      <div><Score score = {score}/>
      <Solution letterStatus = {letterStatus} solution ={solution}/>
      <Letters letterStatus = {letterStatus} selectLetter = {selectLetter}/>
      </div>
      }
    </div>
  );
}

export default App;

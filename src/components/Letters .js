import Letter from './Letter';
import './Letters.css';



function displayAllLetters(props) {
    let letters = Object.keys(props.letterStatus)
    function alreadySelected() {
        return 
    }
    return <div>
        <p>Avilable letters: </p>
        <div className='horizontal'>
            {letters.map(letter => props.letterStatus[letter] ? <div className='crossed'><Letter letter = {letter} selectLetter = {alreadySelected}/></div> : <div><Letter letter = {letter} selectLetter = {props.selectLetter}/></div>)}
        </div>
        
    </div>;
}

export default displayAllLetters;
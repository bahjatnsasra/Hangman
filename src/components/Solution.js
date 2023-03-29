import Letter from './Letter';


function solution(props) {
    let wordLetters = props.solution.word.split('')
    
    return <div>
        <div className='horizontal'>{wordLetters.map(letter => props.letterStatus[letter] ? <div><Letter letter = {letter}/></div> : <div><Letter letter = {'_'}/></div>)}</div>
        <div> {props.solution.hint}</div>
    </div>;
}

export default solution;

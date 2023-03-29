
function displayOneLetter(props) {
const chooseLetter = () => props.selectLetter(props.letter)

    return <span onClick={chooseLetter}>
        {props.letter}
    </span>;
}

export default displayOneLetter;
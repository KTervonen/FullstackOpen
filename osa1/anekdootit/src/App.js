import {useState} from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
    ]

    const arvot = [0, 0, 0, 0, 0, 0, 0]


    const [selected, setSelected] = useState(0)
    const [aanet, setAanet] = useState(arvot)

    const enitenAania = () => {
        var suurin = 0;
        for (let anekdootti = 0; anekdootti < aanet.length; anekdootti+=1) {
            if (aanet[suurin] <= aanet[anekdootti]) {
                suurin = anekdootti;
            }
        }
        return suurin
    }

    const nextAnecdote = () => {
        const random = Math.floor(Math.random() * 7)
        console.log(random)
        setSelected(random)
    }

    const vote = () => {
        const copy = [...aanet]
        console.log("arvo ennen kasvatusta " + copy)
        copy[selected] +=1
        console.log("arvo kasvatuksen jälkeen " + copy)
        setAanet(copy)
    }


    return (
        <div>
            <h1>Anecdote of the day</h1>
            {anecdotes[selected]}
            <div>
                This anecdote has been voted {aanet[selected]} times.
            </div>
            <div>
                <Button handleClick={vote} text='vote'/>
                <Button handleClick={nextAnecdote} text='next anecdote'/>
            </div>
            <h1>Anecdote with most votes</h1>
            <div>
                {anecdotes[enitenAania()]}
            </div>

        </div>

)
}

export default App
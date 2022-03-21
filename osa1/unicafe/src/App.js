import {useState} from 'react'

const Statistics = (props) => {
    if (props.text == 'positive') {
        return (
            <p>{props.text + ' ' + props.value + ' %'}</p>
        )
    }
    return (
        <p>{props.text + ' ' + props.value}</p>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)


    const goodClick = () => {
        setGood(good + 1)
        setAll(all + 1)
        setAverage(average + 1)
        setPositive(positive + 1)
    }

    const neutralClick = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }

    const badClick = () => {
        setBad(bad + 1)
        setAll(all + 1)
        setAverage(average - 1)
    }

    return (
        <div>
            <div>
                <h1>give feedback</h1>
                <button onClick={goodClick}>
                    good
                </button>
                <button onClick={neutralClick}>
                    neutral
                </button>
                <button onClick={badClick}>
                    bad
                </button>

            </div>
            <div>
                <h1>statistics</h1>
                <Statistics text='good' value={good}/>
                <Statistics text='neutral' value={neutral}/>
                <Statistics text='bad' value={bad}/>
                <Statistics text='all' value={all}/>
                <Statistics text='average' value={average / all}/>
                <Statistics text='positive' value={positive / all * 100}/>
            </div>
        </div>
    )
}

export default App
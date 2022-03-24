import {useState} from 'react'

const StatisticLine = (props) => {
    return (<Statistics text={props.text} value={props.value}/>)
}

const Statistics = (props) => {
    if (props.text === 'positive') {
        return (
            <tr>
                <td>{props.text}</td>
                <td>{props.value + '%'}</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>

    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
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
                <h1>Give feedback</h1>
                <Button handleClick={goodClick} text='good'/>
                <Button handleClick={neutralClick} text='neutral'/>
                <Button handleClick={badClick} text='bad'/>
            </div>


            <div>
                <h1>Statistics</h1>

                {all > 0 ? (
                    <>
                        <StatisticLine text='good' value={good}/>
                        <StatisticLine text='neutral' value={neutral}/>
                        <StatisticLine text='bad' value={bad}/>
                        <StatisticLine text='all' value={all}/>
                        <StatisticLine text='average' value={average / all}/>
                        <StatisticLine text='positive' value={positive / all * 100}/>
                    </>

                ) : <p>No feedback given</p>
                }



            </div>
        </div>
    )
}

export default App
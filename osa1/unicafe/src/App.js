import {useState} from 'react'

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    return (
        <div>
            <div>
                <h1>give feedback</h1>
                <button onClick={() => {
                    setGood(good + 1)
                    setAll(all + 1)
                    setAverage(average + 1)
                    setPositive(positive + 1)
                }
                }>
                    good
                </button>
                <button onClick={() => {
                    setNeutral(neutral + 1)
                    setAll(all + 1)
                }
                }>
                    neutral
                </button>
                <button onClick={() => {
                    setBad(bad + 1)
                    setAll(all + 1)
                    setAverage(average - 1)
                }
                }>
                    bad
                </button>

            </div>
            <div>
                <h1>statistics</h1>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
                <p>all {all}</p>
                <p>average {average / all}</p>
                <p>positive {positive / all * 100} %</p>
            </div>
        </div>
    )
}

export default App
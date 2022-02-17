const Header = (pippeli) => {
    return (
        <div>
            <p>{pippeli.course}</p>
        </div>
    )
}

const Content = (plop) => {
    return (
        <div>
            <Part pippeli={plop.pippeli} penis={plop.penis}/>
            <Part pippeli={plop.pippeli2} penis={plop.penis2}/>
            <Part pippeli={plop.pippeli3} penis={plop.penis3}/>
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.pippeli} {props.penis}
        </p>
)
}

const Total = (megapylly) => {
    return (
        <div>
            <p>Number of exercises {megapylly.pylly + megapylly.pylly2 + megapylly.pylly3}</p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course}/>
            <Content pippeli={part1} penis={exercises1}
                     pippeli2={part2} penis2={exercises2}
                     pippeli3={part3} penis3={exercises3}
            />
            <Total pylly={exercises1} pylly2={exercises2} pylly3={exercises3}/>


        </div>

    )
}

export default App
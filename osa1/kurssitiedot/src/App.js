const Header = (pippeli) => {
    console.log(pippeli)
    return <h1>{pippeli.course}</h1>
}

const Content = (props) => {
    console.log(props.parts[0])
    console.log(props.parts[1])
    console.log(props.parts[2])
    return (
        <div>
            <Part part={props.parts[0]}/>
            <Part part={props.parts[1]}/>
            <Part part={props.parts[2]}/>
        </div>
    )
}

// content hakee "part-tehtaalta" vuorotellen 3 riviä tavaraa. Tehdas palauttaa yhden rivin kerrallaan, aina kulloisillakin props-arvoilla. Kaikki
// sullotaan yhteen div-elementtiin, jonka Content-funktio palauttaa Appissa olevalle kutsulle.

const Part = (props) => {
    console.log(props.part)
    return (
        <p>
            {props.part.name + ' ' + props.part.exercises}
        </p>
    )
}


const Total = (props) => {
    console.log(props.parts[0])
    console.log(props.parts[1])
    console.log(props.parts[2])

    return (
        <div>
            <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>  {/* koitetaan ensin saada tämä toimimaan */}
            <Total parts={parts}/>
        </div>

    )
}

export default App
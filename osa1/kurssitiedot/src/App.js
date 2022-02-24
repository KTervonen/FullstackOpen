const Header = (props) => {
    console.log(props.course.name)
    return <h1>{props.course.name}</h1>
}

const Content = (props) => {
    console.log(props.course.name)
    return (
        <div>
            <Part part={props.course.parts[0]}/>
            <Part part={props.course.parts[1]}/>
            <Part part={props.course.parts[2]}/>
        </div>
    )
}

// content hakee "part-tehtaalta" vuorotellen 3 riviä tavaraa. Tehdas palauttaa yhden rivin kerrallaan, aina kulloisillakin props-arvoilla. Kaikki
// sullotaan yhteen div-elementtiin, jonka Content-funktio palauttaa Appissa olevalle kutsulle.

const Part = (props) => {
    console.log(props.part.name)
    return (
        <p>
            {props.part.name + ' ' + props.part.exercises}
        </p>
    )
}


const Total = (props) => {
    console.log(props.course.parts[0].name)

    return (
        <div>
            <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }

    // Korjaa, mikä menee rikki!

    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>

    )
}

export default App
const Header = (pippeli) => {
    console.log(pippeli)
    return <h1>{pippeli.course}</h1>
}

const Content = (props)  =>
{
    return (
        <div>
            <Part part={props.part1}/>
            <Part part={props.part2}/>
            <Part part={props.part3}/>
        </div>
    )
}

// content hakee "part-tehtaalta" vuorotellen 3 riviä tavaraa. Tehdas palauttaa yhden rivin kerrallaan, aina kulloisillakin props-arvoilla. Kaikki
// sullotaan yhteen div-elementtiin, jonka Content-funktio palauttaa Appissa olevalle kutsulle.

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    return (
        <div>
            <Header
                course={course}/> {/* antaa course-nimiselle headerille oikean arvon, jotta funktio osaa palauttaa oikean tekstin*/}
            <Content part1={part1} part2={part2} part3={part3}/>
            <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
        </div>

    )
}

export default App
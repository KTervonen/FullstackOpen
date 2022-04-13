const Note = ({ note }) => {
    return (
        <li>{note.content}</li>
    )
}

const App = ({ notes }) => {

    const result = notes.map(noutti => noutti.content)
    console.log(result)

  return (
      <div>
        <h1>Notes</h1>
        <ul>
            {notes.map(
                noutti =>
                <Note
                    key={noutti.id}
                    note={noutti}
                />
            )}
        </ul>

      </div>

  )



}



export default App

function App() {
  
  return (
    <>
      <form action="http://localhost:5173/api/addToDo" method="post">
        <h1>SignUp</h1>
        <input type="text" name="title"/>
        <input type="text" name="description"/>
        <button>submit</button>
      </form>
    </>
  )
}

export default App

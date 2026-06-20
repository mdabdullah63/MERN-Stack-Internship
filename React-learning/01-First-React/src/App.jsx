import StudyComponent from "./Study"
function App(){
  const a=20;
  const b=30;
  const c= a+b
return <div>
  HELLO THIS IS FIRST PROGRAM

  <div>
    Value of A = {a}
  </div>
  <div>
    Value of B = {b}
  </div>
  <StudyComponent data={c}/>
</div>
}

export default App
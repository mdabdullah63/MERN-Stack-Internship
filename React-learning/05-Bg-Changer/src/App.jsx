import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div style={{ background: color, minHeight: "100vh" }}>
      <h1>Select a Color</h1>

      <table
        onClick={(e) => {
          if (e.target.classList.contains("color")) {// check if the clicked element has the "color" class
            const selectedColor = [...e.target.classList].find(// find the color class from the list of classes
              c => c !== "color"// exclude the "color" class
            )
            setColor(selectedColor)// update the state with the selected color
          }
        }}
      >
        <tbody>
          <tr>
            <td className="color red"></td>
            <td className="color green"></td>
            <td className="color blue"></td>
          </tr>
          <tr>
            <td className="color yellow"></td>
            <td className="color purple"></td>
            <td className="color pink"></td>
          </tr>
          <tr>
            <td className="color orange"></td>
            <td className="color teal"></td>
            <td className="color black"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
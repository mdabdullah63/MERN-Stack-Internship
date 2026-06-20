import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charector, setCharector] = useState(false)
  const [password, setPassword] = useState("")

  // useCallback is a hook in React that allows you to memoize a function, preventing it from being recreated on every render unless its dependencies change
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (charector) {
      str += "!@#$%^&*()_+"
    }

    if (number) {
      str += "0123456789"
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }
    setPassword(pass)
  }, [length, number, charector]) 
  // useEffect is a hook in React that allows you to perform side effects in function components
  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  // useRef is a hook in React that allows you to create a mutable reference that persists across re-renders
  const passwordRef = useRef(null)

  const copypasswordToclipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select()
      // passwordRef.current.setSelectionRange(0, 99)
      window.navigator.clipboard.writeText(password)
    }
  }, [password])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>

   <div className='align-center max-w-3xl mx-auto mt-10 p-4 bg-gray-800 rounded-lg'>
       <div className='w-full max-w-md mx-auto shadow-md text-orange-500 bg-gray-700'></div>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          ref={passwordRef}
          readOnly
        />

        <button
          onClick={copypasswordToclipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          type="button"
        >
          copy
        </button>
      </div>

      <div className='flex items-center gap-x-2'>
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(Number(e.target.value))}
        />

        <span className='text-white'>{length}</span>
      </div>

      <div className='flex items-center gap-x-1'>
        <input
          type="checkbox"
          id='number'
          checked={number} 
          onChange={(e) => setNumber(e.target.checked)}
        />
        <label htmlFor='number'>Include Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input
          type="checkbox"
          id='charector'
          checked={charector}
          onChange={(e) => setCharector(e.target.checked)}
        />
        <label htmlFor='charector'>Include Charectors</label>
      </div>

      <button
        className='outline-none bg-green-700 text-white px-3 py-0.5 mt-4'
        onClick={generatePassword}
      >
        Generate Password
      </button>
   </div>
    </>
  )
}

export default App
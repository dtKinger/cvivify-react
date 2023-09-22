import { useState } from 'react'
import '../styles/Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    // Need to get this importing from src/components/Header.jsx
    <> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Counter

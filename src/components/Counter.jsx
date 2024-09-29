import React, { useState } from 'react'

export const Counter = function () {
  const [clickCount, setClickCount] = useState(0)
  
  const increment = () => setClickCount(clickCount + 1)
  const decrement = () => setClickCount(clickCount - 1)
  
  return (
    <div>
      <h1>{clickCount}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

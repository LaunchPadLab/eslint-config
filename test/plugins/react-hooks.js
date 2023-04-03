import React, { useState, useEffect } from 'react'

function ReactHooks() {
  const [count, setCount] = useState(0)

  if (count) {
    useEffect(() => {
      if (count > 20) {
        setCount(0)
      }
    }, [])
  }

  return (
    <button onClick={() => setCount((c) => c+1)}>Count: {count}</button>
  )
}

export default ReactHooks
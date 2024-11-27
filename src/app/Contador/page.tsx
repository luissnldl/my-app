"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('The count is :', count)
    }, [count])

  return (
    <div>
        <h1>Cuenta: {count}</h1>
        <button className='btn btn-primary' onClick={() => setCount(count+1)}>Incrementar</button>
        <button className='btn btn-secondary' onClick={() => setCount(count-1)}>Decrementar</button>
    </div>
  )
}

export default page

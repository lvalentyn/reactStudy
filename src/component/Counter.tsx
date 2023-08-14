import { useState } from "react"
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1) 
    }

  return (
    <div>
        <button className={classes.button} onClick={inc}>{count}</button>
    </div>
  )
}

export default Counter
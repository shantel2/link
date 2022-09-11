import React, { useState } from 'react'
import Results from './Results';

const Shortner = ({setLink}) => {
  const [data, setData] = useState(false);
  const [value, setValue] = useState("")

  const clickHandler =() => {
    console.log(value);
    setData(!data);
    setLink(value);
    setValue("");
  }

  return (
    <div className='main-container'>
      <div className='input-container'>
        <h1>URL <span> Shortener </span> </h1>
        <div className='input-area'>
          <input 
            type="text" 
            placeholder ="paste link here..."
            value={value}
            onChange = {(e)=> setValue(e.target.value)}/>
          <button onClick={clickHandler}> Shorten </button>
        </div>
      </div>

      <div className='results-area'> 
        {data ? <Results oldLink = {value}/> : <></>}
      </div>

    </div>
  )
}

export default Shortner
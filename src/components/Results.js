import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Results = () => {
  const [newLink, setNewLink] = useState ('hello there')
  const [copied, setCopied] = useState (false)
  

  return (
    <div className='result'>
      <p>{newLink} </p>

      <CopyToClipboard
        text={newLink}
        onCopy = {()=> setCopied(true)}
      >
      <button className= {copied ? 'copied' : ""}> Copy </button>

      </CopyToClipboard>

    </div>
  )
}

export default Results
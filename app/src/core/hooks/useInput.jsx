import React, { useState } from 'react'

export const useInput = (initialState) => {
  const [value, setValue] = useState(initialState)
  
  const bind = {
      value,
      onChange: (e) => {
          setValue(e.target.value)
      }
  }

  const clear = () => {
      setValue('')
  }

  return [value, bind, clear]
}

import React from 'react'

const Sample = ({value}) => {
console.log("Sample rendered");
  return (
    <div>Sample - {value}</div>
  )
}

export default React.memo(Sample)
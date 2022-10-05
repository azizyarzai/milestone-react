import React, {Fragment} from 'react'
import withDate from '../hoc/withDate';
import MyFragment from './MyFragment';

const Sample = ({value}) => {
console.log("Sample rendered");
  return (
    <MyFragment>
      <div>Sample - {value}</div>
      <p>Hi</p>
      </MyFragment>
    
  )
}

export default withDate(React.memo(Sample))
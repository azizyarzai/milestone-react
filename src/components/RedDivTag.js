import React, { useEffect } from 'react'

const RedDivTag = ({value, user, onChangeUser}) => {

    useEffect(() => {
        onChangeUser({id: 12, name: 'Karim', email: 'karim@gmail.com'})
    }, [])
  return (
    <div><p>
        user : {user.name}
        </p>
        <p>value : {value}</p>
        </div>
  )
}

export default RedDivTag
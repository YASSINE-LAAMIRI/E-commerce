import React from 'react'
import{useSelector} from "react-redux"

const Profile = () => {
  const user = useSelector(state=>state.authReducer.user)


  return (
    <div>
      <h2> Hello {user.name}</h2></div>
  )
}

export default Profile
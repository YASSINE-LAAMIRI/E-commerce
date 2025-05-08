import React, { useEffect } from 'react'
import ListUsers from '../components/ListUsers'
import { useDispatch } from 'react-redux'
import { getUsers } from '../JS/actions/userAction'

const Dashboard = () => {
  const dispatch = useDispatch()
  //une fois charger il nous raméne ba listes des users
  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])
  return (
    <div>
      <ListUsers/>
    </div>
  )
}

export default Dashboard
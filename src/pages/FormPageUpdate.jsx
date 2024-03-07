import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FormUserUpdate from '../components/FormUserUpdate'
import useUserStore from '../store/usesrStore'

const FormPageUpdate = () => {

  const idString = useParams()

  const id = Object.values(idString)[0]

  const {UsersDataStore, setUsersDataStore} = useUserStore()


  const users = JSON.parse(localStorage.getItem("users"))

  useEffect(() => {
    setUsersDataStore(users)
  }, []);


  const user = users.filter( person =>  person.idNumber === id)[0]




  return (
    <div className='w-full font-labrada'>
      <FormUserUpdate user={user}/>
    </div>
  )
}

export default FormPageUpdate
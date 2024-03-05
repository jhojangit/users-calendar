import React from 'react'
import { useParams } from 'react-router-dom'
import FormUserUpdate from '../components/FormUserUpdate'
import useUserStore from '../store/usesrStore'

const FormPageUpdate = () => {

  const idString = useParams()

  const id = Object.values(idString)[0]

  const {UsersDataStore} = useUserStore()



  const user = UsersDataStore.filter( person =>  person.phoneNumber === id)[0]



  return (
    <div className='w-full font-labrada'>
      <FormUserUpdate user={user}/>
    </div>
  )
}

export default FormPageUpdate
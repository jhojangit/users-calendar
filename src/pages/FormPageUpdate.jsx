import React from 'react'
import { useParams } from 'react-router-dom'
import FormUserUpdate from '../components/FormUserUpdate'
import useUserStore from '../store/usesrStore'

const FormPageUpdate = () => {

  const {CurrentCourse} = useUserStore()


  // Recupera el id del usuario en un objeto
  const idString = useParams()

  // Convierte el objeto en string
  const id = Object.values(idString)[0]

  // Trae los usuarios del curso actual
  const users = JSON.parse(localStorage.getItem(CurrentCourse))

  // Filtra los usuarios y almacena al que coincida con id
  const user = users?.filter( person =>  person.idNumber === id)[0]



  return (
    <div className='w-full h-full font-labrada bg-slate-900'>
      <FormUserUpdate user={user}/>
    </div>
  )
}

export default FormPageUpdate
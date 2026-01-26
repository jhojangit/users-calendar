import { useParams } from 'react-router-dom'
import UsersList from '../components/UsersList'
import useUserStore from '../store/usesrStore'

const UsersPage = () => {

  const {CurrentCourse} = useUserStore()



  const {id} = useParams()


  // Trae los usuarios del curso actual
  const users = JSON.parse(localStorage.getItem(CurrentCourse))

  // Filtra los usuarios cuyo id (Fecha y hora) coincida con useParams
  const usersFilter = users?.filter(user => user.calendar.includes(id))

  // Ordena en orden alfabético 
  const usersSort = usersFilter?.sort((a, b) => a.name.localeCompare(b.name));




  return (
    <div className='min-h-screen h-full bg-slate-900 text-slate-200'>

        <UsersList 
          users={usersSort}
          date={id}
        />

    </div>
  )
}

export default UsersPage
import { useParams } from 'react-router-dom'
import useUserStore from '../store/usesrStore'
import UsersList from '../components/UsersList'
import { useEffect } from 'react'

const UsersPage = () => {


  const {UsersDataStore, setUsersDataStore } = useUserStore()


  const {id} = useParams()



  const users = JSON.parse(localStorage.getItem("users"))

  useEffect(() => {
    setUsersDataStore(users)
  }, []);




  const usersFilter = users.filter(user => user.calendar.includes(id))

  const usersSort = usersFilter.sort((a, b) => a.name.localeCompare(b.name));




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
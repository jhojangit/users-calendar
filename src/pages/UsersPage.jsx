import { useParams } from 'react-router-dom'
import useUserStore from '../store/usesrStore'
import UsersList from '../components/UsersList'

const UsersPage = () => {


  const {UsersDataStore} = useUserStore()


  const {id} = useParams()
  const usersFilter = UsersDataStore.filter(user => user.calendar.includes(id))

  const usersSort = usersFilter.sort((a, b) => a.name.localeCompare(b.name));



  return (
    <div>

        <UsersList 
          users={usersSort}
          date={id}
        />

    </div>
  )
}

export default UsersPage
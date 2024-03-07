import { useParams } from 'react-router-dom'
import useUserStore from '../store/usesrStore'
import UsersList from '../components/UsersList'
import { useEffect } from 'react'

const AllUsersPage = () => {


    const users = JSON.parse(localStorage.getItem("users"))

    const usersSort = users.sort((a, b) => a.name.localeCompare(b.name));


    return (
        <div>

            <UsersList
                users={usersSort}
                date={"Lista de inscritos"}
            />

        </div>
    )
}

export default AllUsersPage
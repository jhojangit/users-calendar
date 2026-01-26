import UsersListAll from '../components/UserListAll'
import useUserStore from '../store/usesrStore';

const AllUsersPage = () => {

    const {CurrentCourse} = useUserStore()
    

    // Recupera los usuarios del curso actual
    const users = JSON.parse(localStorage.getItem(CurrentCourse))


    // Ordena en orden alfabético
    const usersSort = users?.sort((a, b) => a.name.localeCompare(b.name));


    return (
        <div className='w-full m-auto pb-10 min-h-screen h-auto flex flex-col pt-10 items-center  bg-slate-900 text-slate-200'>

            <UsersListAll
                users={usersSort}
                title={CurrentCourse}
            />

        </div>
    )
}

export default AllUsersPage
import UsersListAll from '../components/UserListAll'

const AllUsersPage = () => {


    const users = JSON.parse(localStorage.getItem("users"))

    const usersSort = users.sort((a, b) => a.name.localeCompare(b.name));


    return (
        <div className='w-full m-auto h-screen flex flex-col pt-10 items-center min-h-screen  bg-slate-900 text-slate-200'>

            <UsersListAll
                users={usersSort}
                title={"Lista de inscritos"}
            />

        </div>
    )
}

export default AllUsersPage
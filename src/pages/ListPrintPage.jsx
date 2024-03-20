import ListPrint from '../components/ListPrint';

const ListPrintPage = () => {


    const users = JSON.parse(localStorage.getItem("users"))

    const usersSort = users.sort((a, b) => a.name.localeCompare(b.name));


    return (
        <div className='w-full m-auto h-screen flex flex-col pt-10 items-center min-h-screen  bg-white text-black'>

            <ListPrint
                users={usersSort}
            />

        </div>
    )
}

export default ListPrintPage
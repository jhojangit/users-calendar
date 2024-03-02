import {create} from 'zustand'

const useUserStore = create((set) => ({
    UsersDataStore:    [],



    setResetData              : ()        => set(() => ({UsersDataStore: []     })),
    setUsersDataStore         : (data)    => set(() => ({UsersDataStore: data     })),
}))

export default useUserStore
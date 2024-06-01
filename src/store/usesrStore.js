import {create} from 'zustand'

const useUserStore = create((set) => ({
    UsersDataStore:    [],
    choise:            "",



    setResetData              : ()        => set(() => ({UsersDataStore: []     })),
    setUsersDataStore         : (data)    => set(() => ({UsersDataStore: data     })),
    setUsersDataChoise         : (data)    => set(() => ({choise: data     })),
}))

export default useUserStore
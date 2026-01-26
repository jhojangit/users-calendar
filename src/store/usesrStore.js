import {create} from 'zustand'
import { ARRAY_OF_COURSES } from '../constants/courses'
import { ARRAY_OF_SEDES } from '../constants/sedes'

const useUserStore = create((set) => ({
    UsersDataStoreDanceUrban:    [],
    choiseDanceUrban:            "",
    
    UsersDataStoreDanceFolk:     [],
    choiseDanceFolk:             "",

    UsersDataStoreDanceLatin:    [],
    choiseDanceLatin:            "",

    UsersDataStoreInstruments:   [],
    choiseInstruments:           "",

    UsersDataStoreSing:          [],
    choiseSing:                  "",

    UsersDataStoreTheater:       [],
    choiseTheater:               "",

    UsersDataStoreArts:          [],
    choiseArts:                  "",

    UsersDataStoreAtletismo:     [],
    choiseAtletismo:             "",


    CurrentCourse:               ARRAY_OF_COURSES[0].courseStorageName,
    CurrentSede:                 ARRAY_OF_SEDES[0],
    MenuStoreCourse:             false,
    MenuStoreSede:               false,


    setCurrentCourse                        : (data)    => set(() => ({CurrentCourse:            data })),
    setMenuSede                             : (data)    => set(() => ({MenuStoreSede:            data })),
    
    setCurrentSede                          : (data)    => set(() => ({CurrentSede:              data })),
    setMenuCourse                           : (data)    => set(() => ({MenuStoreCourse:          data })),

    setUsersDataStoreDanceUrban             : (data)    => set(() => ({UsersDataStoreDanceUrban: data })),
    setUsersDataChoiseDanceUrban            : (data)    => set(() => ({choiseDanceUrban:         data })),

    setUsersDataStoreDanceFolk              : (data)    => set(() => ({UsersDataStoreDanceFolk:  data })),
    setUsersDataChoiseDanceFolk             : (data)    => set(() => ({choiseDanceFolk:          data })),

    setUsersDataStoreDanceLatin             : (data)    => set(() => ({UsersDataStoreDanceLatin: data })),
    setUsersDataChoiseDanceLatin            : (data)    => set(() => ({choiseDanceLatin:         data })),

    setUsersDataStoreInstruments            : (data)    => set(() => ({UsersDataStoreInstruments:data })),
    setUsersDataChoiseInstruments           : (data)    => set(() => ({choiseInstruments:        data })),

    setUsersDataStoreSing                   : (data)    => set(() => ({UsersDataStoreSing:       data })),
    setUsersDataChoiseSing                  : (data)    => set(() => ({choiseSing:               data })),

    setUsersDataStoreTheater                : (data)    => set(() => ({UsersDataStoreTheater:    data })),
    setUsersDataChoiseTheater               : (data)    => set(() => ({choiseTheater:            data })),

    setUsersDataStoreArts                   : (data)    => set(() => ({UsersDataStoreArts:       data })),
    setUsersDataChoiseArts                  : (data)    => set(() => ({choiseArts:               data })),

    setUsersDataStoreAtletismo              : (data)    => set(() => ({UsersDataStoreAtletismo:  data })),
    setUsersDataChoiseAtletismo             : (data)    => set(() => ({choiseAtletismo:          data })),

}))

export default useUserStore
import {create} from 'zustand'
import { ARRAY_OF_COURSES } from '../constants/courses'
import { ARRAY_OF_SEDES } from '../constants/sedes'

const useUserStore = create((set) => ({

    UsersDataStoreDanceUrban:      [],
    choiseDanceUrban:              "",
    
    UsersDataStoreDanceFolk:       [],
    choiseDanceFolk:               "",

    UsersDataStoreDanceLatin:      [],
    choiseDanceLatin:              "",

    UsersDataStoreInstruments:     [],
    choiseInstruments:             "",

    UsersDataStoreSing:            [],
    choiseSing:                    "",

    UsersDataStoreTheater:         [],
    choiseTheater:                 "",

    UsersDataStoreArts:            [],
    choiseArts:                    "",

    UsersDataStoreAtletismo:       [],
    choiseAtletismo:               "",

    UsersDataStorePorrismo:        [],
    choisePorrismo:                "",

    UsersDataStoreTaekwondo:       [],
    choiseTaekwondo:               "",

    UsersDataStoreTenisMesa:       [],
    choiseTenisMesa:               "",

    UsersDataStoreGymCircunvalar:  [],
    choiseGymCircunvalar:          "",

    UsersDataStoreGymSur:          [],
    choiseGymSur:                  "",

    UsersDataStoreVoleibol:        [],
    choiseVoleibol:                "",

    UsersDataStoreFutbolEleven:    [],
    choiseFutbolEleven:            "",

    UsersDataStoreBaloncesto:      [],
    choiseBaloncesto:              "",

    UsersDataStoreAltaIntensidad:  [],
    choiseAltaIntensidad:          "",

    UsersDataStoreYoga:            [],
    choiseYoga:                    "",

    UsersDataStoreFutbolSala:      [],
    choiseFutbolSala:              "",

    UsersDataStoreActividadFisica: [],
    choiseActividadFisica:         "",

    UsersDataStoreNatacion:        [],
    choiseNatacion:                "",

    UsersDataStoreRugby:        [],
    choiseRugby:                "",



    CurrentCourse:               ARRAY_OF_COURSES[0].courseStorageName,
    CurrentSede:                 ARRAY_OF_SEDES[0],
    MenuStoreCourse:             false,
    MenuStoreSede:               false,


    setCurrentCourse                        : (data)    => set(() => ({CurrentCourse:                 data })),
    setMenuSede                             : (data)    => set(() => ({MenuStoreSede:                 data })),
    
    setCurrentSede                          : (data)    => set(() => ({CurrentSede:                   data })),
    setMenuCourse                           : (data)    => set(() => ({MenuStoreCourse:               data })),

    setUsersDataStoreDanceUrban             : (data)    => set(() => ({UsersDataStoreDanceUrban:      data })),
    setUsersDataChoiseDanceUrban            : (data)    => set(() => ({choiseDanceUrban:              data })),

    setUsersDataStoreDanceFolk              : (data)    => set(() => ({UsersDataStoreDanceFolk:       data })),
    setUsersDataChoiseDanceFolk             : (data)    => set(() => ({choiseDanceFolk:               data })),

    setUsersDataStoreDanceLatin             : (data)    => set(() => ({UsersDataStoreDanceLatin:      data })),
    setUsersDataChoiseDanceLatin            : (data)    => set(() => ({choiseDanceLatin:              data })),

    setUsersDataStoreInstruments            : (data)    => set(() => ({UsersDataStoreInstruments:     data })),
    setUsersDataChoiseInstruments           : (data)    => set(() => ({choiseInstruments:             data })),

    setUsersDataStoreSing                   : (data)    => set(() => ({UsersDataStoreSing:            data })),
    setUsersDataChoiseSing                  : (data)    => set(() => ({choiseSing:                    data })),

    setUsersDataStoreTheater                : (data)    => set(() => ({UsersDataStoreTheater:         data })),
    setUsersDataChoiseTheater               : (data)    => set(() => ({choiseTheater:                 data })),

    setUsersDataStoreArts                   : (data)    => set(() => ({UsersDataStoreArts:            data })),
    setUsersDataChoiseArts                  : (data)    => set(() => ({choiseArts:                    data })),

    setUsersDataStoreAtletismo              : (data)    => set(() => ({UsersDataStoreAtletismo:       data })),
    setUsersDataChoiseAtletismo             : (data)    => set(() => ({choiseAtletismo:               data })),

    setUsersDataStorePorrismo               : (data)    => set(() => ({UsersDataStorePorrismo:        data })),
    setUsersDataChoisePorrismo              : (data)    => set(() => ({choisePorrismo:                data })),

    setUsersDataStoreTaekwondo              : (data)    => set(() => ({UsersDataStoreTaekwondo:       data })),
    setUsersDataChoiseTaekwondo             : (data)    => set(() => ({choiseTaekwondo:               data })),

    setUsersDataStoreTenisMesa              : (data)    => set(() => ({UsersDataStoreTenisMesa:       data })),
    setUsersDataChoiseTenisMesa             : (data)    => set(() => ({choiseTenisMesa:               data })),

    setUsersDataStoreGymCircunvalar         : (data)    => set(() => ({UsersDataStoreGymCircunvalar:  data })),
    setUsersDataChoiseGymCircunvalar        : (data)    => set(() => ({choiseGymCircunvalar:          data })),

    setUsersDataStoreGymSur                 : (data)    => set(() => ({UsersDataStoreGymSur:          data })),
    setUsersDataChoiseGymSur                : (data)    => set(() => ({choiseGymSur:                  data })),

    setUsersDataStoreVoleibol               : (data)    => set(() => ({UsersDataStoreVoleibol:        data })),
    setUsersDataChoiseVoleibol              : (data)    => set(() => ({choiseVoleibol:                data })),

    setUsersDataStoreFutbolEleven           : (data)    => set(() => ({UsersDataStoreFutbolEleven:    data })),
    setUsersDataChoiseFutbolEleven          : (data)    => set(() => ({choiseFutbolEleven:            data })),

    setUsersDataStoreBaloncesto             : (data)    => set(() => ({UsersDataStoreBaloncesto:      data })),
    setUsersDataChoiseBaloncesto            : (data)    => set(() => ({choiseBaloncesto:              data })),

    setUsersDataStoreAltaIntensidad         : (data)    => set(() => ({UsersDataStoreAltaIntensidad:  data })),
    setUsersDataChoiseAltaIntensidad        : (data)    => set(() => ({choiseAltaIntensidad:          data })),

    setUsersDataStoreYoga                   : (data)    => set(() => ({UsersDataStoreYoga:            data })),
    setUsersDataChoiseYoga                  : (data)    => set(() => ({choiseYoga:                    data })),

    setUsersDataStoreFutbolSala             : (data)    => set(() => ({UsersDataStoreFutbolSala:      data })),
    setUsersDataChoiseFutbolSala            : (data)    => set(() => ({choiseFutbolSala:              data })),

    setUsersDataStoreActividadFisica        : (data)    => set(() => ({UsersDataStoreActividadFisica: data })),
    setUsersDataChoiseActividadFisica       : (data)    => set(() => ({choiseActividadFisica:         data })),

    setUsersDataStoreNatacion               : (data)    => set(() => ({UsersDataStoreNatacion:        data })),
    setUsersDataChoiseNatacion              : (data)    => set(() => ({choiseNatacion:                data })),

    setUsersDataStoreRugby                  : (data)    => set(() => ({UsersDataStoreRugby:           data })),
    setUsersDataChoiseRugby                 : (data)    => set(() => ({choiseRugby:                   data })),

}))

export default useUserStore
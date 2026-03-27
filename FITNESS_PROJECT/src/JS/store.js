import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'
import partnerSlice from './partnerSlice';
import  reservationSlice  from './reservationslice'
import  salledesportSlice  from './salledesportslice'

import  activitiesSlice  from './activitiesslice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    partner:partnerSlice,
    reservation:reservationSlice,
    salledesport:salledesportSlice,
    activities:activitiesSlice
  },
})

import { configureStore } from '@reduxjs/toolkit'
import userDetails  from '../Slice/UserSlice'
import attractionsDetails from '../Slice/AttractionsSlice'
export const store = configureStore({
  reducer: {
    userData : userDetails,
    attractionsData : attractionsDetails
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
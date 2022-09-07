import { configureStore } from '@reduxjs/toolkit'

import navReducer from '@/components/Navbar/navSlice'
import rapidApi from '@/services/rapidApi'

const store = configureStore({
  reducer: {
    nav: navReducer,
    [rapidApi.reducerPath]: rapidApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rapidApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

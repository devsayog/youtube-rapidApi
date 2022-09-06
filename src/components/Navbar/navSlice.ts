/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store/store'

interface NavState {
  isHiddenText: boolean
}

const initialState: NavState = {
  isHiddenText: false,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleIconText: (state) => {
      state.isHiddenText = !state.isHiddenText
    },
    showIconText: (state) => {
      state.isHiddenText = false
    },
  },
})

export const { toggleIconText, showIconText } = navSlice.actions
export const selectNav = (state: RootState) => state.nav
export default navSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    name: 1,
    visible:true
  },
  reducers: {
    change_name:(state,action)=>{
      state.name=action.payload
    },
    change_visible:(state,action)=>{
       state.visible=!state.visible
    }
  },
})

// Action creators are generated for each case reducer function
export const { change_name,change_visible } = counterSlice.actions

export default counterSlice.reducer
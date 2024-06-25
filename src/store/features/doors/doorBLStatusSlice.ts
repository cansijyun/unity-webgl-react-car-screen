import { createSlice } from '@reduxjs/toolkit';
import { unityFuncGlob } from '../../../constants/unityFuncGlob';


const initialState: {value:boolean} = {
  value:false,
};
export const switchDoorBLStatus= ()=>{unityFuncGlob.senUnityMessage(
  'Car02_Door_BacktLeft','switchDoorStatus'
)}

export const doorBLSlice = createSlice({
  name: 'doorBLSlice',
  initialState,
  reducers: {
    setDoorBLStatus:(state,actions)=>{
      state.value = actions.payload
    }
  },
});


export const { setDoorBLStatus } = doorBLSlice.actions;

export default doorBLSlice.reducer;
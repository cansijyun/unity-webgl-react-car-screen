import { createSlice } from '@reduxjs/toolkit';
import { unityFuncGlob } from '../../../constants/unityFuncGlob';


const initialState: {value:boolean} = {
  value:false,
};
export const switchDoorBRStatus= ()=>{unityFuncGlob.senUnityMessage(
  'Car02_Door_BacktRight','switchDoorStatus'
)}

export const doorBRSlice = createSlice({
  name: 'doorBRSlice',
  initialState,
  reducers: {
    setDoorBRStatus:(state,actions)=>{
      state.value = actions.payload
    }
  },
});


export const { setDoorBRStatus } = doorBRSlice.actions;

export default doorBRSlice.reducer;
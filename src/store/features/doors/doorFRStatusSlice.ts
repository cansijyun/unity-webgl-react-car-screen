import { createSlice } from '@reduxjs/toolkit';
import { unityFuncGlob } from '../../../constants/unityFuncGlob';

const initialState: {value:boolean} = {
  value:false,
};

export const switchDoorFRStatus= ()=>{unityFuncGlob.senUnityMessage(
  'Car02_Door_FrontRight','switchDoorStatus'
)}

export const doorFRSlice = createSlice({
  name: 'doorFLSlice',
  initialState,
  reducers: {
    setDoorFRStatus:(state,actions)=>{
      state.value = actions.payload
    }
  },
});


export const { setDoorFRStatus } = doorFRSlice.actions;

export default doorFRSlice.reducer;
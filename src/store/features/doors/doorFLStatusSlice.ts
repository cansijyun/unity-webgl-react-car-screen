import { createSlice } from '@reduxjs/toolkit';
import { unityFuncGlob } from '../../../constants/unityFuncGlob';


const initialState: {value:boolean} = {
  value:false,
};

export const switchDoorFLStatus= ()=>{unityFuncGlob.senUnityMessage(
  'Car02_Door_FrontLeft','switchDoorStatus'
)}

export const doorFLSlice = createSlice({
  name: 'doorFLSlice',
  initialState,
  reducers: {
    setDoorFLStatus:(state,actions)=>{
      state.value = actions.payload
    }
  },
});


export const { setDoorFLStatus } = doorFLSlice.actions;

export default doorFLSlice.reducer;
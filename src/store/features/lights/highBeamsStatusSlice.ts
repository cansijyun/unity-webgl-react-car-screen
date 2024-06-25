import { createSlice } from '@reduxjs/toolkit';
import { unityFuncGlob } from '../../../constants/unityFuncGlob';


const initialState: {value:boolean} = {
  value:false,
};
export const switchHighBeamsStatus= ()=>{unityFuncGlob.senUnityMessage(
  'Car02_Lights_Emissive','switchHeadHighBeamsStatus'
)}

export const highBeamsSlice = createSlice({
  name: 'highBeamsSlice',
  initialState,
  reducers: {
    setHighBeamsStatus:(state,actions)=>{
      state.value = actions.payload
    }
  },
});


export const { setHighBeamsStatus } = highBeamsSlice.actions;

export default highBeamsSlice.reducer;
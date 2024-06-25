import { createSlice } from '@reduxjs/toolkit';
import { unityFuncGlob } from '../../../constants/unityFuncGlob';


const initialState: {value:boolean} = {
  value:true,
};
export const switchTapeLightsStatus= ()=>{unityFuncGlob.senUnityMessage(
  'Car02_Lights_Emissive','switchTapeLightsStatus'
)}

export const tapeLightsSlice = createSlice({
  name: 'tapeLightsSlice',
  initialState,
  reducers: {
    setTapeLightStatus:(state,actions)=>{
      state.value = actions.payload
    }
  },
});


export const { setTapeLightStatus } = tapeLightsSlice.actions;

export default tapeLightsSlice.reducer;
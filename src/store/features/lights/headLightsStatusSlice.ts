import { createSlice } from '@reduxjs/toolkit';
import { unityFuncGlob } from '../../../constants/unityFuncGlob';


const initialState: {value:boolean} = {
  value:false,
};
export const switchHeadLightsStatus= ()=>{unityFuncGlob.senUnityMessage(
  'Car02_Lights_Emissive','switchHeadLightsStatus'
)}

export const headLightsSlice = createSlice({
  name: 'headLightsSlice',
  initialState,
  reducers: {

    setHeadLightsStatus:(state,actions)=>{
      state.value = actions.payload
    }
  },
});


export const { setHeadLightsStatus } = headLightsSlice.actions;

export default headLightsSlice.reducer;
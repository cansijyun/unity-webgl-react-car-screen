import { configureStore } from '@reduxjs/toolkit';
import { doorFLSlice } from './features/doors/doorFLStatusSlice';
import { doorFRSlice } from './features/doors/doorFRStatusSlice';
import { doorBLSlice } from './features/doors/doorBLStatusSlice';
import { doorBRSlice } from './features/doors/doorBRStatusSlice';
import { tapeLightsSlice } from './features/lights/tapeLightsStatusSlice';
import { highBeamsSlice } from './features/lights/highBeamsStatusSlice';
import { headLightsSlice } from './features/lights/headLightsStatusSlice';

export const store = configureStore({
    reducer: {
        doorFLStatus:doorFLSlice.reducer,
        doorFRStatus:doorFRSlice.reducer,
        doorBLStatus:doorBLSlice.reducer,
        doorBRStatus:doorBRSlice.reducer,
        tapeLightsStatus:tapeLightsSlice.reducer,
        headLightsStatus:headLightsSlice.reducer,
        highBeamsStatus:highBeamsSlice.reducer,
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
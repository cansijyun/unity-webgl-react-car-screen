import React, { useCallback, useEffect, useState } from 'react';
import './HomePage.scss';
import { Unity, useUnityContext } from "react-unity-webgl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import Navigation from './components/Navigation/Navigation';
import { unityFuncGlob } from '../../constants/unityFuncGlob';
import StatusBar from './components/StatusBar/StatusBar';
import { useAppDispatch } from '../../store/hook';
import { setTapeLightStatus } from '../../store/features/lights/tapeLightsStatusSlice';
import { setHeadLightsStatus } from '../../store/features/lights/headLightsStatusSlice';
import { setHighBeamsStatus } from '../../store/features/lights/highBeamsStatusSlice';
import { setDoorBLStatus } from '../../store/features/doors/doorBLStatusSlice';
import { setDoorFLStatus } from '../../store/features/doors/doorFLStatusSlice';
import { setDoorBRStatus } from '../../store/features/doors/doorBRStatusSlice';
import { setDoorFRStatus } from '../../store/features/doors/doorFRStatusSlice';
const HomePage=()=> {
  const { unityProvider, sendMessage, addEventListener, removeEventListener  } = useUnityContext({
    loaderUrl: "CarShowcasePkg/Build/CarShowcasePkg.loader.js",
    dataUrl: "CarShowcasePkg/Build/CarShowcasePkg.data",
    frameworkUrl: "CarShowcasePkg/Build/CarShowcasePkg.framework.js",
    codeUrl: "CarShowcasePkg/Build/CarShowcasePkg.wasm",
  });
  // register send unity messgae function as global function
  unityFuncGlob.senUnityMessage=sendMessage
  const[remainingCapacity,setRemainingCapacity]=useState(500)

  // event listener for synchronizing lights and doors status
  const dispatch = useAppDispatch();
  const tapeLightsChange = useCallback((targetState:any) => {
    dispatch(setTapeLightStatus(!!targetState))
  }, []);
  const headLightsChange = useCallback((targetState:any) => {
     dispatch(setHeadLightsStatus(!!targetState))
  }, []);
  const highBeamsChange = useCallback((targetState:any) => {
    dispatch(setHighBeamsStatus(!!targetState))
  }, []);
  const doorBLChange = useCallback((targetState:any) => {
    dispatch(setDoorBLStatus(!!targetState))
  }, []);
  const doorFLChange = useCallback((targetState:any) => {
    dispatch(setDoorFLStatus(!!targetState))
  }, []);
  const doorBRChange = useCallback((targetState:any) => {
    dispatch(setDoorBRStatus(!!targetState))
  }, []);
 const doorFRCHange = useCallback((targetState:any) => {
    dispatch(setDoorFRStatus(!!targetState))
  }, []);

  // event listener add and remove
  useEffect(() => {
    addEventListener("TapeLightsChange", tapeLightsChange);
    addEventListener("HeadLightsChange", headLightsChange);
    addEventListener("HeadHighBeamsChange", highBeamsChange);
    addEventListener("DoorBLChange", doorBLChange);
    addEventListener("DoorFLChange", doorFLChange);
    addEventListener("DoorBRChange", doorBRChange);
    addEventListener("DoorFRChange", doorFRCHange);
    return () => {
      removeEventListener("TapeLightsChange", tapeLightsChange);
      removeEventListener("HeadLightsChange", headLightsChange);
      removeEventListener("HeadHighBeamsChange", highBeamsChange);
      removeEventListener("DoorBLChange", doorBLChange);
      removeEventListener("DoorFLChange", doorFLChange);
      removeEventListener("DoorBRChange", doorBRChange);
      removeEventListener("DoorFRChange", doorFRCHange);
    };
  }, [addEventListener, removeEventListener, tapeLightsChange]);

  return (
    <div className='vehicle-screen'>
      <div className='top-status-bar'>
        <StatusBar></StatusBar>
      </div>
      <div className='battery-status-bar'>
        <FontAwesomeIcon className='battery-status-icon' icon={faBatteryFull} />
        <div className="remaining-capacity">{remainingCapacity}</div>
        <div className="remaining-capacity-unit">Km</div>
      </div>
      <Unity className='unity-windows' unityProvider={unityProvider} />
      <div className='navigation'>
        <Navigation></Navigation>
      </div>

    </div>
  );
}
export default HomePage;

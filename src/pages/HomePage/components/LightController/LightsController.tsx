import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import './LightsController.scss'
import StatusCard from "../StatusCard/StatusCard";
import { switchTapeLightsStatus } from "../../../../store/features/lights/tapeLightsStatusSlice";
import { switchHeadLightsStatus } from "../../../../store/features/lights/headLightsStatusSlice";
import { switchHighBeamsStatus } from "../../../../store/features/lights/highBeamsStatusSlice";


const LightsController=() => {


  const dispatch = useAppDispatch();

  const decorativeTapeLights = useAppSelector((state) => state.tapeLightsStatus.value);

  const headLights = useAppSelector((state) => state.headLightsStatus.value);

  const highBeams = useAppSelector((state) => state.highBeamsStatus.value);
  
  return (
    <div className="door-card-list">
        <StatusCard type="lights" text="Decorative Tape Lights (A)" statusBool={decorativeTapeLights} onCardClick={()=>{
              switchTapeLightsStatus()
        }} />
        
        <StatusCard type="lights" text="Head Lights (S)" statusBool={headLights} onCardClick={()=>{              switchHeadLightsStatus()        }} />
        <StatusCard type="lights" text="High Beams (D)" statusBool={highBeams} onCardClick={()=>{              switchHighBeamsStatus()        }} />
      
    </div>

  );
}
export default LightsController;

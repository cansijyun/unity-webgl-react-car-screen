import { useAppSelector } from "../../../../store/hook";
import './DoorsController.scss'
import StatusCard from "../StatusCard/StatusCard";

import { switchDoorBLStatus } from "../../../../store/features/doors/doorBLStatusSlice";
import { switchDoorBRStatus } from "../../../../store/features/doors/doorBRStatusSlice";
import { switchDoorFRStatus } from "../../../../store/features/doors/doorFRStatusSlice";
import { switchDoorFLStatus } from "../../../../store/features/doors/doorFLStatusSlice";
import { useDebouncedCallback } from "use-debounce";

const DoorsController=() => {

  // useDebouncedCallback is used to prevent the user from spamming the button
  // Front Left Door
  const doorFLStatus = useAppSelector((state) => state.doorFLStatus.value);
  const clickDoorFLBtn=useDebouncedCallback(() => switchDoorFLStatus(), 200)
  // Front Right Door
  const doorFRStatus = useAppSelector((state) => state.doorFRStatus.value);
  const clickDoorFRBtn=useDebouncedCallback(() => switchDoorFRStatus(), 200)
  // Back Left Door
  const doorBLStatus = useAppSelector((state) => state.doorBLStatus.value);
  const clickDoorBLBtn=useDebouncedCallback(() => switchDoorBLStatus(), 200)
  // Back Right Door
  const doorBRStatus = useAppSelector((state) => state.doorBRStatus.value);
  const clickDoorBRBtn=useDebouncedCallback(() => switchDoorBRStatus(), 200)
  
  return (
    <div className="door-card-list">
        <StatusCard type="doors" text="Front Left Door (Q)" statusBool={doorFLStatus} onCardClick={clickDoorFLBtn} ></StatusCard>
        <StatusCard type="doors" text="Front Right Door (W)" statusBool={doorFRStatus} onCardClick={clickDoorFRBtn} ></StatusCard>
        <StatusCard type="doors" text="Back Left Door (E)" statusBool={doorBLStatus} onCardClick={clickDoorBLBtn} ></StatusCard>
        <StatusCard type="doors" text="Back Right Door (R)" statusBool={doorBRStatus} onCardClick={clickDoorBRBtn} ></StatusCard>
    </div>

  );
}
export default DoorsController;

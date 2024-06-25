import { useEffect } from 'react';
import './StatusCard.scss'

type EventPropsData = {
    type:'doors'|'lights'
    text: string;
    statusBool: boolean;
    onCardClick:()=>void
  };
const ON_OFF_TEXT={
  doors:{ON:'Opened',OFF:'Closed'},
  lights:{ON:'Turned On',OFF:'Turned Off'}
}

const StatusCard:React.FC<EventPropsData> = ({type, text,statusBool,onCardClick}) => {
  return (
    <div className={`door-status-card ${statusBool?'card-active':''}`} onClick={onCardClick}>
        <div>{text}</div>
        <div>{statusBool?ON_OFF_TEXT[type].ON:ON_OFF_TEXT[type].OFF}</div>
    </div>
  );
}
export default StatusCard;

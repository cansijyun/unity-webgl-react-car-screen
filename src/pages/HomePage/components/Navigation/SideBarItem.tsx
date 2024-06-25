import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideBarItem.scss'

type EventPropsData = {
    icon: IconDefinition;
    menuName: string;
  };

const SideBarItem:React.FC<EventPropsData> = ({icon,menuName}) => {
  return (
    <div className='menu-item'>
        <FontAwesomeIcon className='menu-item-icon' icon={icon} />
        <span className='menu-item-title'>{menuName}</span>
    </div>
  );
}
export default SideBarItem;

import { useRef, useState } from 'react';
import './Navigation.scss'
import { FloatingPanel, FloatingPanelRef } from 'antd-mobile/es/components/floating-panel/floating-panel';
import { ErrorBlock, SearchBar,SideBar } from 'antd-mobile';
import { faBolt, faCar, faCompass, faDisplay, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import SideBarItem from './SideBarItem';
import { SideBarItemEum } from './enum';
import DoorsController from '../DoorsController/DoorsController';
import LightsController from '../LightController/LightsController';

const Navigation=() => {
  const anchors = [72, 740]
  const ref = useRef<FloatingPanelRef>(null)
  const tabs = [
    {
      key: SideBarItemEum.DOORS,
      title: (<SideBarItem icon={faCar} menuName="Doors"></SideBarItem>),
    },
    {
      key: SideBarItemEum.LIGHTS,
      title:(<SideBarItem icon={faLightbulb} menuName="Lights"></SideBarItem>) ,
    },
    {
      key: SideBarItemEum.CHARGING,
      title: (<SideBarItem icon={faBolt} menuName="Charging"></SideBarItem>),
    },
    {
        key: SideBarItemEum.DISPLAY,
        title: (<SideBarItem icon={faDisplay} menuName="Display"></SideBarItem>),
      },
      {
        key: SideBarItemEum.NAVIGATION,
        title: (<SideBarItem icon={faCompass} menuName="Navigation"></SideBarItem>),
      },
  ]
  const [activeKey, setActiveKey] = useState(tabs[0].key as string)
  const MenuContent=()=>{
    switch(activeKey){
        case SideBarItemEum.DOORS:
            return (<DoorsController></DoorsController>)
        case SideBarItemEum.LIGHTS:
            return (<LightsController></LightsController>)
        default:
            return(<ErrorBlock className='error-sign' status='empty' title='Under Development' description=""/>)
    }
  }
  return (
    <div className='navigation-view'>
        <iframe className='navigation-iframe' src='https://amap.com' />
        <FloatingPanel anchors={anchors} ref={ref}>
            <div className='navigation-search'>
                <SearchBar
                    placeholder='Search for a place or address'
                    showCancelButton
                    className="navigation-search-bar"
                />
            
            </div>
            <div className='menu-content'>
                <SideBar activeKey={activeKey} onChange={setActiveKey}>
                    {tabs.map(item => (
                        <SideBar.Item key={item.key} title={item.title} />
                    ))}
                </SideBar>
                <MenuContent></MenuContent>
            </div>
            

        </FloatingPanel>
    </div>
  );
}
export default Navigation;

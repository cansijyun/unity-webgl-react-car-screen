import { useState } from "react"
import { GEARS_SETTINGS } from "./constants"
import { GearsEnum } from "./enums"
import './StatusBar.scss'
import { Avatar } from "antd-mobile"
import { faWifi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StatusBar=()=> {
    const[curGear,setCurGear]=useState(GearsEnum.PARKING)
    return(
        <div className="screen-top-status-bar">
            <div className="gear-list">
                {
                    GEARS_SETTINGS.map(
                        gearItem=>(<div className={`gear-item ${curGear===gearItem.value?'active-gear':''}`}>{gearItem.label}</div>)
                    )
                }
            </div>
         
            <div className="other-status">
                <div className="user-info">
                    <Avatar src='' className="user-avatar"></Avatar>
                    <span className="user-name">Adam</span>
                </div>
                <FontAwesomeIcon className='wifi-icon' icon={faWifi} />
                <span className="current-time">15:22</span>
                <span className="current-temperature">56°F</span>
            </div>
        </div>

      
    )
}
export default StatusBar
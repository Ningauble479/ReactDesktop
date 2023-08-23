import { AiFillWindows, AiOutlineSearch } from 'react-icons/ai' 
import { FcDocument } from 'react-icons/fc'
import { BsFillFileEarmarkPersonFill, BsCodeSlash } from 'react-icons/bs'
import { useEffect, useState } from 'react'

export const TaskBox = ({onClick, item}) => {
    const { icon, nameTag } = item
    const [toolTip, setToolTip] = useState(false)


    return (
        <div className="taskBarBox" onMouseEnter={()=>setToolTip(true)} onMouseLeave={()=>{setToolTip(false)}}>
            {toolTip ? <div className='toolTip'>{nameTag}</div> : null}
            {icon}
        </div>
    )

}

export const TaskBar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date())
    const timeText = currentDateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const [taskBarItems, setTaskBarItems] = useState([
        {
            icon: <AiFillWindows style={{color: 'white', width: '50%', height: '50%'}}/>,
            nameTag: "Start"
        },
        {
            icon: <AiOutlineSearch style={{color: 'white', width: '50%', height: '50%'}}/>,
            nameTag: "Search"
        },
        {
            icon: <FcDocument style={{width: '50%', height: '50%'}}/>,
            nameTag: "Resume"
        },
        {
            icon: <BsFillFileEarmarkPersonFill style={{color: 'white', width: '50%', height: '50%'}}/>,
            nameTag: "About Me"
        },
        {
            icon: <BsCodeSlash style={{color: 'white', width: '50%', height: '50%'}}/>,
            nameTag: "Projects"
        }
    ])

    useEffect(()=>{
        const interval = 1000
        setInterval(() => {
            setCurrentDateTime(new Date())
        }, interval);
    },[])
    return (
        <div className="taskBar">
            <div className='taskBarItems'>
                {taskBarItems.map((item, key)=><TaskBox item={item}/>)}
            </div>
            <div className='clock'>{timeText}</div>
        </div>
    )
}
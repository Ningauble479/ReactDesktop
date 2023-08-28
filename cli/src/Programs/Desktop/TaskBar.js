import { AiFillWindows, AiOutlineSearch } from 'react-icons/ai' 
import { FcDocument } from 'react-icons/fc'
import { BsFillFileEarmarkPersonFill, BsCodeSlash } from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react'
import { AppsContext } from '../../Context/appsContext'
import { Resume } from '../Resume/Resume'

export const TaskBox = ({item}) => {

    const { icon, nameTag, app } = item
    const [ toolTip, setToolTip ] = useState(false)
    const [ itemState, setItemState ] = useState(null)
    const { addToList, setStartOpen, startOpen, activeList } = useContext(AppsContext)

    const itemInfo = {
        app: app,
        name: nameTag,
        icon: icon
    }

    const handleClick = (e, item) => {
        e.stopPropagation()
        switch(nameTag){
            case "Start":
                startOpen ? setStartOpen(false) : setStartOpen(true)
                break;
            case "Search":
                setStartOpen(false)
                return;
            default:
                setStartOpen(false)
                addToList(item);
                break;
        }
    }

    useEffect(()=>{
        let newItem = activeList.find((lItem)=>{if(lItem.name === nameTag)return lItem})
        setItemState(newItem)
    },[activeList])

    return (
        <div 
        className="taskBarBox" 
        onMouseEnter={()=>setToolTip(true)} 
        onMouseLeave={()=>{setToolTip(false)}} 
        onClick={(e)=>{handleClick(e, itemInfo)}}
        >
            {itemState ? <div className='activeBar'/> : null}
            {toolTip ? <div className='toolTip'>{nameTag}</div> : null}
            {icon}
        </div>
    )

}

export const TaskBar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date())
    const timeText = currentDateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const { setActiveList, setStartOpen } = useContext(AppsContext)

    const [taskBarItems, setTaskBarItems] = useState([
        {
            icon: <AiFillWindows style={{color: 'white', width: '50%', height: '100%'}}/>,
            nameTag: "Start"
        },
        {
            icon: <AiOutlineSearch style={{color: 'white', width: '50%', height: '100%'}}/>,
            nameTag: "Search"
        },
        {
            icon: <FcDocument style={{width: '50%', height: '100%'}}/>,
            nameTag: "Resume",
            app: <Resume/>
        },
        {
            icon: <BsFillFileEarmarkPersonFill style={{color: 'white', width: '50%', height: '100%'}}/>,
            nameTag: "About Me"
        },
        {
            icon: <BsCodeSlash style={{color: 'white', width: '50%', height: '100%'}}/>,
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
        <div className="taskBar" onClick={()=>{setStartOpen(false)}}>
            <div className='taskBarItems'>
                {taskBarItems.map((item, key)=><TaskBox item={item}/>)}
            </div>
            <div className='clock'>{timeText}</div>
        </div>
    )
}
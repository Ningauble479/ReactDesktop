import { AiFillWindows, AiOutlineSearch } from 'react-icons/ai' 
import { useContext, useEffect, useState } from 'react'
import { AppsContext } from '../../Context/appsContext'
import { TaskBarList } from '../../Data/Apps'

export const TaskBox = ({item}) => {

    const { icon, name, app, style } = item
    const [ toolTip, setToolTip ] = useState(false)
    const [ itemState, setItemState ] = useState(null)
    const { addToList, setStartOpen, startOpen, activeList } = useContext(AppsContext)

    const itemInfo = {
        app: app,
        name: name,
        icon: icon
    }

    const handleClick = (e, item) => {
        e.stopPropagation()
        switch(name){
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
        let newItem = activeList.find((lItem)=>{if(lItem.name === name)return lItem})
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
            {toolTip ? <div className='toolTip'>{name}</div> : null}
            {icon}
        </div>
    )

}

export const TaskBar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date())
    const timeText = currentDateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const { setStartOpen, activeList } = useContext(AppsContext)

    const startItems = [
        {
            icon: <AiFillWindows style={{color: 'white', width: '50%', height: '100%'}}/>,
            name: "Start"
        },
        {
            icon: <AiOutlineSearch style={{color: 'white', width: '50%', height: '100%'}}/>,
            name: "Search"
        }
    ]

    const [taskBarItems, setTaskBarItems] = useState(startItems)

    const createTaskBar = () => {
        let noTaskBar = activeList.filter((item)=>{
            if(!TaskBarList.find((app)=>app.name === item.name)){
                return item
            }
        })
        let list = [...startItems, ...TaskBarList, ...noTaskBar]
        setTaskBarItems(list)
    }

    useEffect(()=>{
        const interval = 1000
        setInterval(() => {
            setCurrentDateTime(new Date())
        }, interval);
        createTaskBar()
    },[activeList])

    return (
        <div className="taskBar" onClick={()=>{setStartOpen(false)}}>
            <div className='taskBarItems'>
                {taskBarItems.map((item, key)=><TaskBox item={item}/>)}
            </div>
            <div className='clock'>{timeText}</div>
        </div>
    )
}
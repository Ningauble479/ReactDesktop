import '../Styles/Window.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMinus } from 'react-icons/ai'
import Moveable from "react-moveable";
import { AppsContext } from '../Context/appsContext';
export const Window = ({ children, item}) => {

    const [fullScreen, setFullScreen] = useState(false)
    const targetRef = useRef(null);
    const dragTargetRef = useRef(null);
    const [doubleClick, setDoubleClick] = useState(false)
    const { name, icon, focused } = item
    const { removeFromList, setFocused, setActive, setStartOpen } = useContext(AppsContext)
    
    useEffect(()=>{
        setFocused(item)
    },[item.active])


    const handleClick = () => {
            fullScreen ? setFullScreen(false) : setFullScreen(true)
    } 


    return (
        <>
        <div 
        ref={targetRef}
        className={fullScreen ? "fullscreen" : !item.active ? "hidden window" : "window"}
        style={focused ? {zIndex: 99999} : {zIndex: item.id}}
        onMouseDown={()=>{
            setStartOpen(false)
            setFocused(item)
        }}
        >
            <div ref={dragTargetRef} className="info" onDoubleClick={()=>handleClick()}>
                <div className='infoName'>
                    {icon}
                    <h2>{name ? name : null}</h2>
                </div>
                <div className='actions'>
                    <div onMouseUp={()=> item.active ? setActive(item, false) : setActive(item, true)}><AiOutlineMinus/></div>
                    <div onMouseUp={(e)=>{fullScreen ? setFullScreen(false) : setFullScreen(true)}}><BsArrowsFullscreen/></div>
                    <div onMouseUp={()=>removeFromList(item)}><AiOutlineClose/></div>
                </div>
            </div>
            <div className='childContainer' onClick={(e)=>e.stopPropagation} onMouseDown={(e)=>e.stopPropagation} onMouseUp={(e)=>e.stopPropagation}>
                {children}
            </div>
        </div>
        <Moveable 
            target={targetRef}
            dragTarget={dragTargetRef}
            draggable={true}
            throttleDrag={1}
            edgeDraggable={true}
            startDragRotate={0}
            throttleDragRotate={0}
            resizable={true}
            keepRatio={false}
            throttleResize={0}
            hideDefaultLines={true}
            rotationPosition="none"
            edge={["w", "e", "n", "s"]}
            onResize={e => {
                e.target.style.width = `${e.width}px`;
                e.target.style.height = `${e.height}px`;
                e.target.style.transform = e.drag.transform;
            }}
            onDrag={e => {
                setStartOpen(false)
                e.target.style.transform = e.transform; setFullScreen(false)
            }}
            
        />
        </>
    )
}
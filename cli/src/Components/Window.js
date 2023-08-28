import '../Styles/Window.css'
import { useContext, useRef, useState } from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMinus } from 'react-icons/ai'
import Moveable from "react-moveable";
import { AppsContext } from '../Context/appsContext';
export const Window = ({ children, item}) => {

    const [fullScreen, setFullScreen] = useState(false)
    const targetRef = useRef(null);

    const { name, icon, focused } = item
    const { removeFromList, setFocused, setActive } = useContext(AppsContext)

    return (
        <>
        <div 
        className={fullScreen ? "fullscreen" : !item.active ? "hidden window" : "window"} 
        ref={targetRef} 
        style={focused ? {zIndex: 99999} : {zIndex: item.id}} 
        onMouseDown={()=>setFocused(item)}
        >
            <div className="info">
                <div className='infoName'>
                    {icon}
                    <h2>{name ? name : null}</h2>
                </div>
                <div className='actions'>
                    <div onClick={()=> item.active ? setActive(item, false) : setActive(item, true)}><AiOutlineMinus/></div>
                    <div onClick={(e)=>{fullScreen ? setFullScreen(false) : setFullScreen(true)}}><BsArrowsFullscreen/></div>
                    <div onClick={()=>removeFromList(item)}><AiOutlineClose/></div>
                </div>
            </div>
            <div className='childContainer'>
                {children}
            </div>
        </div>
        <Moveable 
            target={targetRef}
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
            onDrag={e => {e.target.style.transform = e.transform; setFullScreen(false)}}
            
        />
        </>
    )
}
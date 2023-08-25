import '../Styles/Window.css'
import { useRef, useState } from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMinus } from 'react-icons/ai'
import Moveable from "react-moveable";
export const Window = ({ children, name }) => {
    const [fullScreen, setFullScreen] = useState(false)
    const targetRef = useRef(null);
    return (
        <>
        <div className={fullScreen ? "fullscreen" : "window"} ref={targetRef}>
            <div className="info">
                <div>{name ? name : null}</div>
                <div className='actions'>
                    <div><AiOutlineMinus/></div>
                    <div onClick={(e)=>{fullScreen ? setFullScreen(false) : setFullScreen(true)}}><BsArrowsFullscreen/></div>
                    <div><AiOutlineClose/></div>
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
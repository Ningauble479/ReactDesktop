//Imports section
import '../Styles/Window.css'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMinus } from 'react-icons/ai'
import Moveable from "react-moveable";
import { AppsContext } from '../Context/appsContext';
//Summary section ------------------------------------------------------------
//This component acts as a container for applications. It controls where it is on the screen. Controls the logic for resizing and minimizing (Hiding from screen)
//This uses React-Moveable for resizing and moving the window.
//This component consumes the AppsContext to control the logic for loading and unloading apps.
//It is consumed by the Desktop Program.
//This component also holds all of the state for this window
// --------------------------------------------------------------------------

export const Window = ({ children, item}) => {
    const {name, icon, focused} = item
    const [fullScreen, setFullScreen] = useState(false)
    const windowRef = useRef(null); //Reference to the window for React-Moveable
    const infoBarRef = useRef(null); //Reference to the info bar for React-Moveable

    const { removeFromList, setFocused, setActive, setStartOpen } = useContext(AppsContext)

    //Sets this window as focused when it gets added to the task bar
    useEffect(()=>{
        setFocused(item)
    },[item.active])

    //Handles the double click to toggle full screen
    const handleFullScreen = () => {
        fullScreen ? setFullScreen(false) : setFullScreen(true)
    } 

    return (
        <>
        <div 
        ref={windowRef}
        className={fullScreen ? "fullscreen" : !item.active ? "hidden window" : "window"} //Checks if the window is full screen or hidden
        style={focused ? {zIndex: 99999} : {zIndex: item.id}} //Sets the z-index of the window to the front of the screen when in focus forcing it to the front
        onMouseDown={()=>{
            setStartOpen(false)
            setFocused(item)
        }}//Sets this item to focused in context from the activeList as well as changes startOpen to false to close the start menu
        >
            <div ref={infoBarRef} className="info" onDoubleClick={()=>handleFullScreen()}>{/*Info bar for the window used for dragging and double clicking to toggle full screen*/}
                <div className='infoName'>
                    {icon}
                    <h2>{name ? name : null}</h2>
                </div>
                <div //Actions for the window including minimizing, maximizing, and closing
                 className='actions'>
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
            target={windowRef} //Target is the dom element that moveable controls
            dragTarget={infoBarRef} //Drag target is the dom element that moveable requires the user to click for dragging
            draggable={true}
            resizable={true}
            keepRatio={false} //Ratio is not held when resizing
            hideDefaultLines={true}
            edge={["w", "e", "n", "s"]}
            onResize={e => {
                e.target.style.width = `${e.width}px`;
                e.target.style.height = `${e.height}px`;
                e.target.style.transform = e.drag.transform;
            }}//Moveables onResize event change the width and height of the window fires when width or height is changed in the css
            onDrag={e => {
                setStartOpen(false)
                setFullScreen(false)
                e.target.style.transform = e.transform; 
            }}
        />
        </>
    )
}
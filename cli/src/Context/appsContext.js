import { createContext, useState, useEffect } from 'react'
import { aboutMe } from '../Data/Apps'
export const AppsContext = createContext("")
//Summary section ------------------------------------------------------------
//This component is the context for the apps. It is used to store the active list of apps and the start menu open state.
//It is consumed by the Desktop Program.
// --------------------------------------------------------------------------

export const AppsArea = ({children}) => {
    const [ activeList, setActiveList ] = useState([])
    const [ startOpen, setStartOpen ] = useState(false)

    //Adds the about me app to the active list when the component is mounted so that setFocused is fired
    useEffect(() => {
        addToList(aboutMe)
    }, [])
    
    const setFocused = (item) => {
        let filteredList = activeList.map((lItem, key)=>{
            if(lItem.name === item.name)return {...lItem, focused: true}
            if(lItem.name !== item.name)return {...lItem, focused: false}
        })
        setActiveList(filteredList)
    }

    //Adds an item to the active list
    const addToList = (item) => {
        let found = activeList.find(lItem => lItem.name === item.name)
        if(found) {
            if(found.active && !found.focused) return setFocused(item)
            let filteredList = activeList.map((lItem, key)=>{
                if(lItem.name === item.name) return found.active ? {...lItem, active: false} : {...lItem, active: true}
                return lItem
            })
            setActiveList(filteredList)
            return
        }
        item.active = true
        item.id = activeList.length + 1
        item.focused = false
        activeList.map((item, key)=>item.id = key + 1)
        setActiveList([...activeList, item])
    }

    //Removes an item from the active list
    const removeFromList = (item) => {
        let filteredList = activeList.filter(lItem=>lItem.name != item.name)
        filteredList.map((item, key)=>item.id = key + 1)
        setActiveList(filteredList)
    }

    //Sets a specific item to active or inactive
    const setActive = (item, bool) => {
        let filteredList = activeList.map((lItem, key)=>{
            if(lItem.name === item.name)return {...lItem, active: bool}
            return lItem
        })
        setActiveList(filteredList)
    }

    const state = {
        activeList, 
        setActiveList,
        addToList,
        removeFromList,
        setFocused,
        startOpen,
        setStartOpen,
        setActive
    }

    return (
        <AppsContext.Provider value={state}>
            {children}
        </AppsContext.Provider>
    )
}
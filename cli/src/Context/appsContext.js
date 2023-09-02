import { createContext, useState } from 'react'

export const AppsContext = createContext("")




export const AppsArea = ({children}) => {
    const [ activeList, setActiveList ] = useState([])
    const [ startOpen, setStartOpen ] = useState(false)
    
    const setFocused = (item) => {
        let filteredList = activeList.map((lItem, key)=>{
            if(lItem.name === item.name)return {...lItem, focused: true}
            if(lItem.name !== item.name)return {...lItem, focused: false}
        })
        setActiveList(filteredList)
    }


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

    const removeFromList = (item) => {
        let filteredList = activeList.filter(lItem=>lItem.name != item.name)
        filteredList.map((item, key)=>item.id = key + 1)
        setActiveList(filteredList)
    }

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
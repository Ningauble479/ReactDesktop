import { useContext, useEffect, useState } from "react"
import { AppsContext } from "../../Context/appsContext"
import { AppList } from '../../Data/Apps'

const App = ({item}) => {
    const { addToList, setStartOpen } = useContext(AppsContext)
    return (
        <div className="app" onClick={()=>{addToList(item); setStartOpen(false)}} >
            <>{item.icon}</>
            <div>{item.name}</div>
        </div>
    )
}

const AppsList = ({appList}) => {

    return (
        <>
            {appList.map((item, key)=>{if(key < 4)return <App item={item}/>})}
            {appList.map((item, key)=>{if(key > 4 && key < 8)return <App item={item}/>})}
        </>
    )
}

export const Start = () => {
    const { startOpen } = useContext(AppsContext)
    const [ query, setQuery ] = useState("")
    const [ appList, setAppList ] = useState(AppList)

    useEffect(()=>{
        let filteredList = AppList.filter((item)=>{if(item.name.toLowerCase().includes(query.toLowerCase()))return item})
        setAppList(filteredList)
    },[query])
    return (
        <div className={startOpen ? "Start" : "Start startClosed"}>
            <div className="search">
                <input className="searchbar" placeholder={"Search..."} onChange={(e)=>setQuery(e.target.value)}/>
            </div>
            <h3 className="header">App List</h3>
            <div className="appsList">
                <AppsList appList={appList}/>
            </div>
            <div className="appsList">
                <AppsList appList={appList}/>
            </div>
        </div>
    )
}
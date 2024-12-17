import { useContext, useEffect, useState } from "react"
import { AppsContext } from "../../Context/appsContext"
import { AppList } from '../../Data/Apps'

const App = ({item, searching, setCurrentApp}) => {
    const { addToList, setStartOpen, setFocused } = useContext(AppsContext)
    return (
        <div className={searching ? "app sideways" : "app"} onClick={()=>{
        setFocused(item)
        addToList(item);
        setStartOpen(false)}}
        onMouseEnter={()=>{if(setCurrentApp)setCurrentApp(item)}}>
            <>{item.icon}</>
            <div>{item.name}</div>
        </div>
    )
}

const AppsList = ({appList, searching, setCurrentApp}) => {

    return (
        <>
            {appList.map((item, key)=>{if(key < 4) return <App item={item} searching={searching} setCurrentApp={setCurrentApp}/>})}
            {appList.map((item, key)=>{if(key >= 4 && key <= 8) return <App item={item} searching={searching} setCurrentApp={setCurrentApp}/>})}
        </>
    )
}

const NotSearching = ({appList}) => {
    return (
        <>
        <h3 className="header">App List</h3>
        <div className="appsList">
            <AppsList appList={appList}/>
        </div>
        <div className="appsList">
            <AppsList appList={appList}/>
        </div>
        </>
    )
}

const Searching = ({appList}) => {
    const [currentApp, setCurrentApp] = useState(null)
    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-12-05&' +
          'sortBy=popularity&' +
          'apiKey=0f09095c61cb4987bb050e9764fa5fca';

    var req = new Request(url);

    fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
    return (
        <div className="searchResultsContainer">
            <div className="searchResults">
                <div className="appsList column">
                    <AppsList appList={appList} searching={true} setCurrentApp={setCurrentApp}/>
                </div>
            </div>
            {currentApp && (
                <div className="explanationColumn">
                    <div className="appIcon">{currentApp.icon}</div>
                    <h2>{currentApp.name}</h2>
                    <p>{currentApp.description}</p>
                </div>
            )}
        </div>
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
            {
                query === "" ? <NotSearching appList={appList}/> : <Searching appList={appList}/>
            }
        </div>
    )
}
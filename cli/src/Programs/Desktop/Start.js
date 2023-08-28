import { useContext } from "react"
import { AppsContext } from "../../Context/appsContext"
import { AppList } from '../../Data/Apps'

const App = ({item}) => {
    console.log(item)
    return (
        <div>
            <div>{item.icon}</div>
            <div>{item.name}</div>
        </div>
    )
}

const AppsList = () => {

    return (
        <div>
            {AppList.map((item)=>{return <App item={item}/>})}
        </div>
    )
}

export const Start = () => {
    const { startOpen } = useContext(AppsContext)
    return (
        <div className={startOpen ? "Start" : "Start startClosed"}>
            <div className="search">
                <input className="searchbar" placeholder={"Search..."}/>
            </div>
            <div className="appsList">
                <AppsList/>
            </div>
            <div className="recommendedApps">
                Recommended Apps
            </div>
        </div>
    )
}
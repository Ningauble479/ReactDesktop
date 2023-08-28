import { useContext } from 'react'
import { Window } from '../../Components/Window'
import './Desktop.css'
import { TaskBar } from './TaskBar'
import { AppsContext } from '../../Context/appsContext'
import { Resume } from '../Resume/Resume'
import { Start } from './Start'


export const Desktop = () => {
    const { activeList, setStartOpen } = useContext(AppsContext)
    return (
        <div className="Desktop">
            <div className='background' onClick={()=>setStartOpen(false)}>
                {activeList.map((app, key) => {
                    return (
                        <Window item={app}>
                            {app.app}
                        </Window>
                    )
                })}
            </div>
            <Start/>
            <TaskBar/>
        </div>
    )
}
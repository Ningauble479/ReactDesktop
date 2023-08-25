import { Window } from '../../Components/Window'
import './Desktop.css'
import { TaskBar } from './TaskBar'


export const Desktop = () => {
    return (
        <div className="Desktop">
            <div className='background'>
                <Window>
                    Test
                </Window>
                <Window>
                    Test
                </Window>
            </div>
            <TaskBar/>
        </div>
    )
}
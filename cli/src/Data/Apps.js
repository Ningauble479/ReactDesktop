
import { Resume } from '../Programs/Resume/Resume'
import { FcDocument } from 'react-icons/fc'
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs'
export const resume = {
        app: <Resume/>,
        name: "Resume",
        icon: <FcDocument/>
    }

export const aboutMe = {
        app: <div>test</div>,
        name: "About Me",
        icon: <BsFillFileEarmarkPersonFill/>
}

export const AppList = [
    resume,
    aboutMe
]
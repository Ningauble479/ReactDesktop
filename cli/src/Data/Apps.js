
import { Resume } from '../Programs/Resume/Resume'
import { FcDocument } from 'react-icons/fc'
import { BsFillFileEarmarkPersonFill, BsCodeSlash } from 'react-icons/bs'
import { AboutMe } from '../Programs/AboutMe/AboutMe'
import { Projects } from '../Programs/Projects/Projects'

export const resume = {
        app: <Resume/>,
        name: "Resume",
        icon: <FcDocument/>
    }

export const aboutMe = {
        app: <AboutMe/>,
        name: "About Me",
        icon: <BsFillFileEarmarkPersonFill/>
}

export const projects = {
    app: <Projects/>,
    name: "Projects",
    icon: <BsCodeSlash/>
}

export const AppList = [
    resume,
    aboutMe,
    projects
]

export const TaskBarList = AppList
import { FcDocument } from 'react-icons/fc'
import { BsFillFileEarmarkPersonFill, BsCodeSlash, BsGearFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { TfiNotepad } from 'react-icons/tfi'

import { Resume } from '../Programs/Resume/Resume'
import { AboutMe } from '../Programs/AboutMe/AboutMe'
import { Projects } from '../Programs/Projects/Projects'
import { Settings } from '../Programs/Settings/Settings.js'
import { Blog } from '../Programs/Blog/Blog'
import { MdOutlineForum } from 'react-icons/md'
import { Lune } from '../Programs/Lune/Lune'
import { Roshi } from '../Programs/Roshi/Roshi'
import { GiHealthNormal } from 'react-icons/gi'
import { Notes } from '../Programs/Notes/Notes'
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

export const settings = {
    app: <Settings/>,
    name: "Settings",
    icon: <BsGearFill/>
}

export const blog = {
    app: <Blog/>,
    name: "Blog",
    icon: <MdOutlineForum/>
}

export const lune = {
    app: <Lune/>,
    name: "Lune",
    icon: <BsFillMoonStarsFill/>
}

export const roshi = {
    app: <Roshi/>,
    name: "Roshi",
    icon: <GiHealthNormal/>
}

export const notes = {
    app: <Notes/>,
    name: "Notes",
    icon: <TfiNotepad/>
}

export const TaskBarList = [
    resume,
    aboutMe,
    projects
]

export const AppList = [...TaskBarList, settings, blog, lune, roshi, notes]
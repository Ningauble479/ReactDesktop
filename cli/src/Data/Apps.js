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

//Summary section ------------------------------------------------------------
//This file contains a list of json objects that contain the data for each app. It also exports each app for easy access to information.
// --------------------------------------------------------------------------

export const resume = {
        app: <Resume/>,
        name: "Resume",
        icon: <FcDocument/>,
        description: "This is my resume. It is a document that contains my work experience, education, and skills."
    }

export const aboutMe = {
        app: <AboutMe/>,
        name: "About Me",
        icon: <BsFillFileEarmarkPersonFill/>,
        description: "This is a section all about me."
}

export const projects = {
        app: <Projects/>,
        name: "Projects",
        icon: <BsCodeSlash/>,
        description: "This is a list of my projects. Currently not finished."
}

export const settings = {
    app: <Settings/>,
    name: "Settings",
    icon: <BsGearFill/>,
    description: "This is a list of my projects. I have made many projects and I am proud of them."
}

export const blog = {
    app: <Blog/>,
    name: "Blog",
    icon: <MdOutlineForum/>,
    description: "WIP"
}

export const lune = {
    app: <Lune/>,
    name: "Lune",
    icon: <BsFillMoonStarsFill/>,
    description: "Lune was meant to be a social media platform for friends. Sadly I do not have the time to develop it anymore."
}

export const roshi = {
    app: <Roshi/>,
    name: "Roshi",
    icon: <GiHealthNormal/>,
    description: "Roshi was a healthcare system I was working on with a group of people. It was meant to incetivize healthy habits and make it easier for people to find healthcare professionals that can help them attain certain goals."
}

export const notes = {
    app: <Notes/>,
    name: "Notes",
    icon: <TfiNotepad/>,    
    description: "This is a simple note taking app. It is fully functional and saves what you write to your local storage."
}

export const TaskBarList = [
    resume,
    aboutMe,
    projects
]

export const AppList = [...TaskBarList, notes]
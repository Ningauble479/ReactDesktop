import './aboutMe.css'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiLogoReact } from 'react-icons/bi'
import { DiJavascript1 } from 'react-icons/di'
import { FaPhp, FaNode } from 'react-icons/fa'
import { MdHtml, MdCss } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import { ParticlesDiv } from '../../Components/Animations/Particles'
import windowGif from '../../IMG/pixel-art-room.gif'
import WindowImg from '../../IMG/WindowByForheksedOnDeviantArt.png'
const Hexagon = ({children, color}) => {
    const [focused, setFocused] = useState(false)
    return (
        <div style={{color: color}} className={`hex`} onMouseEnter={()=>setFocused(true)} onMouseLeave={()=>setFocused(false)}>
            <div className='top'>
                {focused ? <div className='shadow'/> : null}
            </div>
            <div className='middle'>
                {focused ? <div className='shadow'/> : null}
                {children}
            </div>
            <div className='bottom'>
                {focused ? <div className='shadow'/> : null}
            </div>
        </div>
    )
}
const SectionOne = () => {

    const fullSize = {width: '100%', height: '100%'}


    return (
        <>
            <div className="centeredColumn leftColumn background-picture">
                {/* <div className="myPicture"> */}
                    {/*  */}
                    {/* <BsFillPersonFill style={{width: '55%', height: '55%'}}/> */}
                {/* </div> */}
                <div className="myInfo">
                <h1 className='aboutMeHeader'>About Me</h1>
                <h1>Hi there! I'm Devon Owen, a dedicated Web Developer who is passionate about crafting intuitive and user-centered digital experiences.</h1>
                </div>
            </div>
            <div className="centeredColumn rightColumn">
                <div className='hexagon'>
                    <div className='hex-row'>
                        <Hexagon text="PHP"><FaPhp style={fullSize}/></Hexagon>
                        <Hexagon text="JS" ><DiJavascript1 style={fullSize}/></Hexagon>
                    </div>
                    <div className='hex-row'>
                        <Hexagon text="CSS"><MdCss style={fullSize}/></Hexagon>
                        <Hexagon text="HTML"><MdHtml style={fullSize}/></Hexagon>
                        <Hexagon text="React"><BiLogoReact style={fullSize}/></Hexagon>
                    </div>
                    <div className='hex-row'>
                        <Hexagon text="Node"><FaNode style={fullSize}/></Hexagon>
                        <Hexagon text="C#"><h1>C#</h1></Hexagon>
                    </div>
                </div>
                <h1 style={{marginTop: '5vh'}}>Known Programming Languages</h1>
            </div>
        </>
    )
}

const WindowSegment = () => {
    return (
        <>
        <div className='windowBoxWrapper'>
            <img src={WindowImg} className='windowBoxOuter'/>
            <img className='windowBoxInner' src={windowGif} alt='loading...'/>
        </div>
        </>
    )
}

            {/* <div className='windowBoxTop'/> */}
            {/* <div className='windowBoxLeft'/> */}
            {/* <div className='windowBox'> */}
            {/* <img style={{height: '110%'}} src={windowGif} alt='loading...'/> */}
            {/* </div> */}
            {/* <div className='windowBoxRight'/> */}
            {/* <div className='windowBoxBottom'/> */}
        {/* </div> */}
const SectionTwo = () => {
    return (
        <div>
            <h1>Mission Statement</h1>
            <p>I'm on a mission to bridge the gap between aesthetics and functionality in the digital world. My goal is to create seamless, user-friendly interfaces that not only look stunning but also serve a meaningful purpose.</p>
        </div>
    )
}

const SectionThree = () => {
    return (
        <div>
            <h1>My Journey</h1>
            <p>I embarked on my UX programming journey by studying [Your Relevant Degrees or Courses] at [Your University]. Over the years, I've had the privilege of working on a variety of projects that have honed my skills and deepened my passion for UX programming.</p>
            <div>[Background Image: A timeline or collage showcasing key milestones in my web development career, such as relevant certifications, or significant projects.]</div>
        </div>
    )
}

const SectionFour = () => {
    return (
        <div>
            <h1>My UX Philosophy</h1>
            <p>I firmly believe that a successful digital product begins with a deep understanding of the user. My approach to UX programming is rooted in meticulous research, thoughtful design, and continuous testing. I strive to create experiences that delight users and exceed their expectations.</p>
        </div>
    )
}

const SectionFive = () => {
    return (
        <div>
            <h1>What drives me</h1>
            <p>When I'm not coding or designing, you can find me [Hobbies/Interests Outside of Work]. These activities fuel my creativity, inspire new ideas, and provide the balance needed to excel in the fast-paced world of UX programming.</p>
            <div>[Image: A gallery or collage of images/icons representing your interests and inspirations outside of UX programming, which humanizes your profile.]</div>
        </div>
    )
}

const SectionSix = () => {
    return (
        <div className='flex centeredFlex'>
            <div>[Contact Form or Social Media Icons: Make it easy for visitors to get in touch with you.]</div>
            <div>
                <h1>Lets Connect</h1>
                <p>When I'm not coding or designing, you can find me [Hobbies/Interests Outside of Work]. These activities fuel my creativity, inspire new ideas, and provide the balance needed to excel in the fast-paced world of UX programming.</p>
            </div>
        </div>
    )
}

const SectionSeven = () => {
    return(
        <div>
            <h1>Testimonials</h1>
            <div>[Carousel or quotes from clients, colleagues, or team members who can vouch for your UX programming skills and work ethic.]</div>
            <p>But don't just take my word for it. Here's what some of my collaborators have to say about working with me</p>
            <div>
                <p>// "[Client/Colleague Name], [Company]: [Testimonial]"</p>
                <p>// "[Client/Colleague Name], [Company]: [Testimonial]"</p>
                <p>// "[Client/Colleague Name], [Company]: [Testimonial]"</p>
            </div>
        </div>
    )
}

const SectionEight = () => {
    return (
        <div>
            <h1>Thank You</h1>
            <p>Thank you for exploring my UX programming portfolio and getting to know me better. I'm excited about the opportunity to collaborate with you and contribute to creating exceptional digital experiences.</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <p>Wording by ChatGPT! AI is the future after all.</p>
        </div>
    )
}

export const AboutMe = ({breakPoint}) => {
    const ref = useRef(null)
    console.log(breakPoint)
    return (
        <div className="aboutMe" ref={ref}>
            <div className='brickWall'>
            <div className={`section ${breakPoint === 'smallWidth' ? 'sectionOne' : null}`}>
            {/* <ParticlesDiv breakPoint={breakPoint}> */}
                <SectionOne/>
            {/* </ParticlesDiv> */}
            </div>
            <div className='section' style={{justifyContent: 'flex-start'}}>
                <WindowSegment/>
            </div>
            <div className='section'>
                <SectionTwo/>
            </div>
            <div className='section'>
                <SectionThree/>
            </div>
            <div className='section'>
                <SectionFour/>
            </div>
            <div className='section'>
                <SectionFive/>
            </div>
            <div className='section'>
                <SectionSix/>
            </div>
            <div className='section'>
                <SectionSeven/>
            </div>
            <div className='section'>
                <SectionEight/>
            </div>
            <div className='section'>
                <Footer/>
            </div>
            </div>
        </div>
    )
}



// Section Title: About Me

// Introduction:
// [Header Image: A professional photo of yourself, ideally in a work-related setting.]

// Greetings:
// Hi there! I'm [Your Name], a dedicated UX programmer who is passionate about crafting intuitive and user-centered digital experiences.

// Mission Statement:
// I'm on a mission to bridge the gap between aesthetics and functionality in the digital world. My goal is to create seamless, user-friendly interfaces that not only look stunning but also serve a meaningful purpose.

// Your Journey:
// [Background Image: A timeline or collage showcasing key milestones in your UX programming career, such as relevant degrees, certifications, or significant projects.]

// I embarked on my UX programming journey by studying [Your Relevant Degrees or Courses] at [Your University]. Over the years, I've had the privilege of working on a variety of projects that have honed my skills and deepened my passion for UX programming.

// Your UX Philosophy:
// [Image: A grid or showcase of your UX design principles, such as user research, wireframing, prototyping, and usability testing.]

// I firmly believe that a successful digital product begins with a deep understanding of the user. My approach to UX programming is rooted in meticulous research, thoughtful design, and continuous testing. I strive to create experiences that delight users and exceed their expectations.

// What Drives You:
// [Image: A gallery or collage of images/icons representing your interests and inspirations outside of UX programming, which humanizes your profile.]

// When I'm not coding or designing, you can find me [Hobbies/Interests Outside of Work]. These activities fuel my creativity, inspire new ideas, and provide the balance needed to excel in the fast-paced world of UX programming.

// Let's Connect:
// [Contact Form or Social Media Icons: Make it easy for visitors to get in touch with you.]

// Whether you're looking to collaborate on a project, discuss UX programming, or simply want to connect, I'm here to chat. Feel free to reach out through the contact form below or connect with me on [Social Media Platforms].

// Testimonials:
// [Carousel or quotes from clients, colleagues, or team members who can vouch for your UX programming skills and work ethic.]

// But don't just take my word for it. Here's what some of my collaborators have to say about working with me:

// "[Client/Colleague Name], [Company]: [Testimonial]"
// "[Client/Colleague Name], [Company]: [Testimonial]"
// "[Client/Colleague Name], [Company]: [Testimonial]"
// Thank You:
// Thank you for exploring my UX programming portfolio and getting to know me better. I'm excited about the opportunity to collaborate with you and contribute to creating exceptional digital experiences.

// [Footer: Copyright © [Year] [Your Name] - All Rights Reserved.]
import './aboutMe.css'
import { BiLogoReact } from 'react-icons/bi'
import { DiJavascript1 } from 'react-icons/di'
import { FaPhp, FaNode } from 'react-icons/fa'
import { MdHtml, MdCss } from 'react-icons/md'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaUserAstronaut } from 'react-icons/fa'
import text from './text.json'
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

const KnownLanguages = () => {
    const fullSize = {width: '100%', height: '100%'}
    return (
        <div>
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
                <h1 style={{marginTop: '5vh'}}>{text.knownLanguages.header}</h1>
            </div>
        </div>
    )
}

const SectionOne = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className='aboutMeHeader'>About Me</h1>
            <div className="intro-content">
                <div className="intro-text">
                    <h2>{text.hero.header}</h2>
                    <p>{text.hero.p1}</p>
                </div>
            </div>
            <div className="intro-image">
                    <FaUserAstronaut size={150} color="#3498db" />
            </div> 
        </motion.div>
    )
}

const SectionTwo = () => {
    return (
        <div
            className="mission-statement"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h2 className="section-title">{text.missionStatement.header}</h2>
            <div className="mission-content">
                <div className="mission-icon">
                    <FaLaptopCode />
                </div>
                <div className="mission-text">
                    <p>
                        {text.missionStatement.p1}
                    </p>
                    <p>
                        {text.missionStatement.p2}
                    </p>
                    <p>
                        {text.missionStatement.p3}
                    </p>
                    <p>
                        {text.missionStatement.p4}
                    </p>
                </div>
            </div>
        </div>
    )
}

const SectionThree = () => {
    return (
        <div className="journey-section">
            <h1 className="section-title">{text.journey.header}</h1>
            <p className="journey-description">
                {text.journey.p1}
            </p>
            <div className="journey-timeline">
                <ul className="timeline-list">
                    {text.journey.timeline.map((item, index) => (
                        <li className="timeline-item" key={index}>
                            <h3>{item.date}</h3>
                            <p>{item.descriptionOne}</p>
                            <p>{item.descriptionTwo}</p>
                            <p>{item.descriptionThree}</p>
                            <p>{item.descriptionFour}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const SectionFour = () => {
    return (
        <div>
            <h1>{text.uxPhilosophy.header}</h1>
            <p>{text.uxPhilosophy.p1}</p>
        </div>
    )
}

const SectionFive = () => {
    return (
        <div>
            <h1>{text.whatDrivesMe.header}</h1>
            <p>{text.whatDrivesMe.p1}</p>
            <div>{text.whatDrivesMe.p2}</div>
        </div>
    )
}

const SectionSix = () => {
    return (
        <div className='flex centeredFlex'>
            <div>{text.connect.p1}</div>
            <div>
                <h1>{text.connect.header}</h1>
                <p>{text.connect.p2}</p>
            </div>
        </div>
    )
}

const SectionSeven = () => {
    return(
        <div>
            <h1>{text.testimonials.header}</h1>
            <p>{text.testimonials.p1}</p>
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
            <h1>{text.thankYou.header}</h1>
            <p>{text.thankYou.p1}</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <p>{text.footer.p1}</p>
        </div>
    )
}

export const AboutMe = ({breakPoint}) => {
    const ref = useRef(null)
    
    return (
        <div className="aboutMe" ref={ref}>
            <div className='brickWall'>

                    <SectionOne/>
                
                {/* ... other sections ... */}
                <motion.div 
                    className={`section ${breakPoint === 'smallWidth' ? 'sectionTwo' : null}`}
                    id="section2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionTwo/>
                </motion.div>
                <div className='knownLanguages'>
                    <KnownLanguages/>
                </div>
                <motion.div 
                    className={`section ${breakPoint === 'smallWidth' ? 'sectionThree' : null}`}
                    id="section3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionThree/>
                </motion.div>
                <motion.div 
                    className={`section ${breakPoint === 'smallWidth' ? 'sectionFour' : null}`}
                    id="section4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionFour/>
                </motion.div>
                <motion.div 
                    className={`section ${breakPoint === 'smallWidth' ? 'sectionFive' : null}`}
                    id="section5"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionFive/>
                </motion.div>
                <motion.div 
                    className={`section ${breakPoint === 'smallWidth' ? 'sectionSix' : null}`}
                    id="section6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionSix/>
                </motion.div>
                <motion.div 
                    className={`section ${breakPoint === 'smallWidth' ? 'sectionSeven' : null}`}
                    id="section7"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionSeven/>
                </motion.div>
                <motion.div 
                    className='section'
                    id="section8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionEight/>
                </motion.div>
                <motion.div 
                    className='section'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Footer/>
                </motion.div>
            </div>
        </div>
    )
}
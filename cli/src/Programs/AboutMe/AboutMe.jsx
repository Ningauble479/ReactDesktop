import './aboutMe.css'
import {BsFillPersonFill} from 'react-icons/bs'

export const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="centeredColumn leftColumn">
                <div className="myPicture">
                    <BsFillPersonFill style={{width: '100%', height: '100%'}}/>
                </div>
                <div className="myInfo">
                    I have been working in the IT industry for around 6 years doing a mix of programming and IT software support. I spent a lot of time learning networking as well as learning how to do web development.
                </div>
            </div>
            <div className="centeredColumn rightColumn">
                List of languages
            </div>
        </div>
    )
}
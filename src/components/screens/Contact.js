import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import '../styles/Contact.css'
import React from 'react'

export default function Contact() {
    return (
        <div className='contactWrapper'>
            <h1 className='contactHeading'>Hello there. Feel free to drop me a text!</h1>
            <div className='contactIconWrapper'>
                <a href='https://www.linkedin.com/in/shravani-konde-3rd-a00049280/'><FontAwesomeIcon className='contactIcons' icon={faLinkedin} /><p className='contactTags'>LinkedIn</p></a>
                <a href='https://github.com/shravanikonde03'><FontAwesomeIcon className='contactIcons' icon={faGithub} /><p className='contactTags'>GitHub</p></a>
                <a href='https://www.instagram.com/shravi_29?igsh=YzVkODRmOTdmMw=='><FontAwesomeIcon className='contactIcons' icon={faInstagram} /><p className='contactTags'>Instgram</p></a>
                <a href='mailto:shravanikonde540@gmail.com'><FontAwesomeIcon className='contactIcons' icon={faEnvelopeOpenText} /><p className='contactTags'>Email</p></a>
            </div></div>
    )
}

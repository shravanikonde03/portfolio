import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';
import React from 'react';

export default function Contact() {
    return (
        <div className='contactWrapper'>
            <h1 className='contactHeading'>Hello contact me !
            
            </h1>
           
            <div className='googleFormWrapper'>
                {/* Paste the copied <iframe> code here */}
                <iframe
                    title='Google Form'
                    src='https://docs.google.com/forms/d/e/1FAIpQLSd2klDhSOshYcez6X9ux9PEocvvYlGhTrFJx15ClCQ47p7yAQ/viewform?usp=sf_link'
                    width='350'
                    height='400'
                    frameBorder='2'
                    marginHeight='1'
                    marginWidth='0'
                >
                    Loading...
                </iframe>
            <div className='contactIconWrapper'>
                <a href='https://www.linkedin.com/in/shravani-konde-3rd-a00049280/'>
                    <FontAwesomeIcon className='contactIcons' icon={faLinkedin} />
                    <p className='contactTags'>LinkedIn</p>
                </a>
                <a href='https://github.com/shravanikonde03'>
                    <FontAwesomeIcon className='contactIcons' icon={faGithub} />
                    <p className='contactTags'>GitHub</p>
                </a>
                <a href='https://www.instagram.com/shravi_29?igsh=YzVkODRmOTdmMw=='>
                    <FontAwesomeIcon className='contactIcons' icon={faInstagram} />
                    <p className='contactTags'>Instagram</p>
                </a>
                <a href='mailto:shravanikonde540@gmail.com'>
                    <FontAwesomeIcon className='contactIcons' icon={faEnvelopeOpenText} />
                    <p className='contactTags'>Email</p>
                </a>
            </div>
           
            </div>
        </div>
    );
}

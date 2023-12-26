import React from 'react'
import '../styles/Projects.css'
import {crunch, chaptersqueue,  fyp} from '../projectsimports';

import javascript from '../../assets/skills/programminglanguages/javascript.svg'
import python from '../../assets/skills/programminglanguages/python.svg'
import ProjectCard from '../utils/ProjectCard';



export default function Projects() {
    return (
        <div className='pageWrapper'>
            <h1 className='projectsPageTitle'>Some things I've built</h1>
                    <div className='projectsWrapper'>
            <ProjectCard image = {chaptersqueue} projectTitle= "Plant leaf disease detection" techstack={[ python]}   summary ="In these project we capture the image of the leaf and then they detect if leaf is disesed or not. It become helpful for farmers to identify diseased leafs easily . Due to these many famers can easily detect the disesed leaf and find easily solution on the disesed."></ProjectCard>
            <ProjectCard image = {crunch} projectTitle ="Campus Management System" techstack={[ javascript]} summary="Campus managemnet system is th database management project in which we store the data of the students with their information like name, address, date of birth,marks, attendance etc.These project become helpful to find the any information of the student easily with the specific key. In these project we use java script and the Mysql."></ProjectCard>
            <ProjectCard image = {fyp} projectTitle= "Tours and Travels" techstack ={[python]}  summary ="In these project we create the website with the name pune thithe ky une.By using these website tourist cane easily find the placese which are mostly famous for the tourist and mostly liked.These website also become helpful for find the hotel for stay in the sufficient payment.By using thses website tourist can easily find the restaurant with the best rating .These website can also helpful to find the markets for the shopping"></ProjectCard>
            
        </div>
    
        </div>
)
}

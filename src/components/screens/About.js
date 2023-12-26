import React from "react";
import Skills from "../utils/Skills";
import "../styles/About.css";
import Education from "../utils/Education";
import aboutme from "../../assets/images/aboutme2.png";
import {
    programmingLanguages,
   
    FullStack,
} from "../skillsimports";

export default function About() {
    return (
        <div className="aboutWrapper">
            <div className="topWrapper">
                <div className="imageWrapper">
                    <img className="aboutImage" src={aboutme}></img>
                </div>

                <div className="expWrapper">
                    <div className="experience">
                        <h1>Hello! I am</h1>
                        <span className="name">Shravani Konde,</span>
                        <p className="aboutMe">
                        A Computer Engineering student from Bharati Vidyapeeth's college of Engineering for Women's,
                            Pune.
                            <br />
                            <br />Hi, Currently, I am doing BE in computer from Bharati Vidyapeeth's College of Engineering for Women, Pune. I am in the third year. I completed courses on Introduction to AI, C++, C, and English Bolo. I enjoy building websites and am always interested in creating new front-end features. I also have
                             an understanding of Data structures. I aspire to work in a Multinational Company. I am interested in reading different types of books.
                           
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="expWrapper">
                    <h1 className="heading">Education</h1>
                    <Education
                        college="Jijamat High School,Jejuri"
                        years="2019"
                        
                        summary={[
                            "I complete my 10th standard from Maharashtra board .",
                            "In the 10th I got 88.20% .",
                            "In the 9th class i give the Intermediate drawing exam.",
                                    
                           
                        ]}
                    ></Education>
                    <Education
                        college="Jijamat High School & Jr.College ,Jejuri"
                        years=" 2021"
                        
                        summary={[
                            "I complete my 12th standard from Maharashtra Board",
                            "In the 12th standard I got 95%",
                           
                        ]}
                    ></Education>
                    <Education
                        college= "Bharati Vidyapeeth's college of Engineering for Women's,Pune"
                        
                       
                        summary={[
                            "I pursuing my BE in computer ",
                            "Currently I am in third year."
                        ]}
                    ></Education>
                </div>
                <div className="skillsWrapper">
                    <h1 className="heading">Skills</h1>
                    <Skills
                        title="Programming Languages"
                        images={programmingLanguages}
                    ></Skills>
                    <Skills
                        title="Data Structure"
                       
                    ></Skills>
                    <Skills
                        title="Full Stack Devlopment"
                        images={FullStack}
                    ></Skills>
                </div>
            </div>
        </div>
    );
}
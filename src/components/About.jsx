import React from 'react'
import Computer from '../assets/computer.png'

import  tech from "../assets/tech.jpeg"

const About = () => {
    return(
        <div id = "about" className='w-ful py-16 px-4'> 
            <div className='max-w-[1240 px] mx-auto grid md:grid-cols-2'> 
            <img src = {tech}></img>
                <div id = "experience" className='flex flex-col justify-center'> 
                
                    
                     <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py- text-white'> My Journey </h1> 
                    <p className='text-white'>
                    I'm a developer and entrepreneurial student, currently studying CS and Mathematics at Rutgers University Honors College. So far, I've delved into fullstack projects with NoSQL databases as well as machine learning based projects. I'm looking into develop more applicatons with Java while adding an element of AI into my projects. I've also had the privilege to work at a Stealth Startup focusing on developing their authentication software and client dashboard services. Feel free to reach out for any collaborations! 
                    </p> 
                    
                    
                    </div> 
                   

        

        
            </div>


         </div> 
    )    
    
}
export default About
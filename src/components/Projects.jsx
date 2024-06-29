import React from 'react'

import secure from '../assets/triple (1).png'
import weather from '../assets/temperature.jpeg'
import money from '../assets/money.jpeg'

import health from '../assets/health.jpeg'
import shop from '../assets/shop.jpeg'

const Projects = () => {

    return (

        

        <div id = "projects" className='w-full py-[10rem] px-4 text-white'> 
        <div className='text-center text-8xl vertical-align: bottom '> 
            Projects
        </div>
        <div className=' flex flex-col max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300' >
                <img className = 'w-d20  h-80 mt-[-30] bg-white' src = {secure} alt = '/' />
                <h2 className='text-2xl font-bold text-center py-8'>
                    Password Manager
                </h2>
                <div className = 'text-center font-medium'>
                <p className='py-2  mx-8 mt-8 text-base'> Fullstack application for users to store their passwords and usernames on a MongoDB server on the cloud. Secured using BCrypt encyrption libraries for advanced security and authentication</p>
            
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> <a href = 'https://github.com/arjuns05/CRUD_App' target="_blank" rel="noopener noreferrer">Github Repository </a></button>


       </div>
       <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300' >
                <img className = 'w-d20 h-80  mt-[-30] bg-white' src = {health} alt = '/' />
                <h2 className='text-2xl font-bold text-center py-8'>
                    HealthAI
                </h2>
                <div className = 'text-center font-medium'>
                <p className='py-2  mx-8 mt-8 text-base'> Working on a fullstack application based in React.js to handle patient requests using medicalAI APIs to serve rural communiites to reduce emergent cases in these localized areas.</p>
            
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> <a href = 'https://github.com/arjuns05/HealthAI' target="_blank" rel="noopener noreferrer">Github Repository </a></button>


       </div>
       <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300' >
                <img className = ' w-d20  h-80 mt-[-30] bg-white' src = {shop} alt = '/' />
                <h2 className='text-2xl font-bold text-center py-8'>
                    Shopper's Companion
                </h2>
                <div className = 'text-center font-medium'>
                <p className='py-6  mx-8  text-base'> Developed a Chrome Extension to store product details from Amazon for users to keep track of later purchases. Integrated Express.js and PostgreSQL to handle the back-end and routing.  </p>
            
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> <a href = 'https://github.com/arjuns05/shop_companion' target="_blank" rel="noopener noreferrer">Github Repository </a></button>


       </div>
       

        </div>
           
        </div>


    )
}

export default Projects
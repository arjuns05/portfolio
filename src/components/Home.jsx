import React from 'react'

import { TypeAnimation } from 'react-type-animation';

const text = ['Backend', 'Databases', 'Distributed Systems', 'ML', 'Artifical Intelligence']

const Description = () => {
    return(
        <div id = "home" className='text-white'> 

        <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 w-full text-5xl'> 
            Arjun Sudhalkar
            </p>
            <h1 className='md: text-7xl sm: text-6xl text-4xl font-bold md:py-6'> 
            Software Engineering Portfolio
            </h1>
            <div> 
                <p className='md: text-5xl sm: text-4xl text-xl font-bold'> 
                    Technology Enthusiast
                </p>
                {/* <TypingAnimator textArray = {text} typingSpeed={250} textColor = "#FFFFFF" fontsize = '70rem' delaySpeed={500}/>   */}
                <TypeAnimation className='md: text-5xl sm: text-4xl text-xl font-bold' sequence = {['Backend', 1000, "Distributed Systems", 1000, 'Databases', 1000, "Artificial Intelligence", 1000, "Machine Learning"]} style={{ fontSize: '2em'}} repeat = {Infinity}   /> 
                <div> 
                    
                </div>
                
                
                <button className='bg-[#00df9a] w-[200px] text-black first-line:rounded-md font-medium my-6 mx-auto py-3'> <a href = 'https://github.com/arjuns05/' target="_blank" rel="noopener noreferrer"> Check out my GitHub! </a> </button>


            </div>
        </div>

        
        
        
         </div>
    )
}

export default Description
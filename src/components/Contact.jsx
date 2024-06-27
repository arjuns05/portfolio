import React from 'react'
import Linkedin from '../assets/linkedin-image.png'

const Contact = () => {
return(
    <div  id = "contact" className = 'w-full py-16 '> 
        <div className = ' max-w-[1240px] max-auto grid lg:grid-cols-3' >
            <div className='lg:col-span-2 text-white' > 
            <h1 className='  md:text-5xl sm:text-4x text-xl font-bold py-2'> 
                Contacts!
            </h1>
           

            <p>
                If you have a question, or just want to be friends, my inbox is always open. 
                Shoot me an email at arjun.sudhalkar@rutgers.edu or feel free to send out a LinkedIn 
                connection request. 
            </p> 
            </div>
            <div className = 'my-4'>
                <div className='flex flex-col sm:flex-row  '> 
                <a href = 'https://www.linkedin.com/in/arjun-sudhalkar-a569b5221' target="_blank" rel="noopener noreferrer">
                    <img className = 'w-[100px] mx-12' src = {Linkedin}></img>
                </a>
                </div>

            </div>

           
        </div>
    </div>
)

}

export default Contact
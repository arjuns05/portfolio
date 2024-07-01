import React from 'react'
import timelineComponents from "../assets/timelineComponents"
import schoolIcon from "../assets/work.png"
import workIcon from "../assets/work.png"
import tech from "../assets/tech.jpeg"
function Timeline(defaultColor){
    return (

    <div id = "timeline" className = "flex flex-col justify-right items-center text-white text-base pb-8 sm:text-lg">
        <br>
        </br>
        <br>
        
        </br>
        <p className = "text-4xl"> 
            Experience
        </p>
        <br>
        </br>
        
        {timelineComponents.map((element) => {
            const colors = [
                "bg-red-500", 
                "bg-blue-500",
                "bg-orange-50",
                

            ]
            const color = defaultColor || `bg-${element.color}-500`
            return <div className = "flex m-4 relative" key = {element.id}> 
            <div className = "bg-[#00df9a] w-.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden"> </div>
            <div className = "bg-[#00df9a] w-.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden">  </div>


            <div className = "hidden items-start w-44 pt-0.5 relative sm:flex "> 
                <div className = "w-4/5 text-gray-500">| {element.date} </div>
                <div className = "bg-[#00df9a] w-px h-full translate-x-5 translate-y-10 opacity-30"> | </div>
                <img 
                src = {workIcon}
                alt = "icon"
                className = {`bg-[#00df9a] w-10 p-1 rounded-lg z-20`}
                />
                <div className = "bg-[#00df9a] h-px w-8 translate-y-5 opacity:30"> </div>

            </div>
            <div className = "border border-gray-600-rounded-lg px-8  w-full text-center z-10 sm:w-96">
                <div className = "text-xl font-medium"> 
                {element.title} </div>
                <div className = "text-gray-300 mb-6 sm:mb-8 sm:text-xs">| {element.location} <span className = "sm:hidde"> | {element.data} </span></div>
                <div className = "mb-4 text-left"> {element.description}</div>
                <div className = "flex flex-wrap mb-6 justify-center"> {element.tech.map((tech, index) => {
                    return <span className = "bg-gray-900 rounded-xl px-2 py-1 text-sm m-1" key = {index}>  {tech} </span>
                })} </div>
                <a href = "https://www.linkedin.com/in/arjun-sudhalkar-a569b5221" rel="noreferrer" target="_blank" className = {`bg-[#00df9a] text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`}> {element.buttonText} </a>

            </div>
            
          
            
            </div>
        })}
    </div>
    )
}

export default Timeline;

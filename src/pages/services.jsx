import React from 'react'

const Services = () => {
  return (
    <section className='mt-[2rem] px-[1rem]'>
        <h2 className='text-center text-[2rem]'>Our Services</h2>
        <div className='w-[140px] h-[2px] bg-[purple] mx-auto mt-[.3rem]'></div>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[2rem] mt-[2rem] mb-[1rem]'>
          <div className='text-left w-[47%] mt-[2rem]' >User Interface (UI) Design: Focuses on the visual elements of the website, including layout, colors, typography, and overall aesthetics. User Experience (UX) Design: Concentrates on creating a seamless and intuitive user journey, ensuring that visitors can navigate the site easily and find information efficiently.</div>
          <div className='text-left w-[47%] mt-[2rem]' >Involves implementing the UI/UX designs using programming languages such as HTML, CSS, and JavaScript. Ensures that the website is responsive, meaning it adapts to various screen sizes and devices. Manages server-side operations, databases, and application logic. Utilizes server-side programming languages such as Python, Java, or Node.js.</div>
          <div className='text-left w-[47%] mt-[2rem]' >User Interface (UI) Design: Focuses on the visual elements of the website, including layout, colors, typography, and overall aesthetics. User Experience (UX) Design: Concentrates on creating a seamless and intuitive user journey, ensuring that visitors can navigate the site easily and find information efficiently.</div>
          <div  className='text-levt w-[47%] mt-[2rem]'>Combines both front-end and back-end development skills, allowing developers to work on the entire web development process.</div>
        </div>
          
    </section>
  )
}

export default Services;
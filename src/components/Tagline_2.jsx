import React from 'react'
import Section_2 from './Section_2'
import { useNavigate } from 'react-router-dom'

const Tagline_2 = () => {
  const navigate= useNavigate();
  return (
    <div className='mt-14'>
<h1 className='text-4xl font-semibold text-center text-default'>Why Sapien?</h1>

        <div className='flex'>
            <Section_2 img="/section_1.jpg" heading="AI That Adapts to You"/>
              <Section_2 img="/section_2.png" heading="Instant Quizzes From Your Notes"/>
                <Section_2 img="/section_3.png" heading="Clear, Personalized Explanations"/>
                 

        </div>

        <div className='flex'>
            <Section_2 img="/section_4.jpg"  heading="A Dashboard that shows real progress"/>
             <Section_2 img="/section_5.jpg" heading="Smart Resource Recommendations"/>
              <Section_2 img="/section_6.jpg" heading="Built for Students, Teachers, and Self-Learners"/>
        </div>

        <div className='text-center'>
            <div className='flex justify-center mt-28'>
            <h1 className='text-6xl'>“Upload. Learn. Improve. Repeat.”</h1>
    </div>

    <button onClick={(()=>{
        navigate("/signup")
    })} className='px-12 py-4 bg-ocean-blue rounded-lg text-xl text-white font-bold mt-10 hover:bg-cyan-700'>Get Started</button>
        </div>
    </div>
  )
} 

export default Tagline_2
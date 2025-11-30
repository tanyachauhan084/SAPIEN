import { useNavigate } from "react-router-dom";
const HeroSection = () => {
    const navigate= useNavigate();
  return (
    <div className='h-screen flex w-screen'>

        <div className="h-full w-full">
            <h1 className="w-full text-5xl text-default leading-[1.3] font-semibold font-inter ml-10 mt-36">
                AI POWERED PERSONALISED LEARNING PLATFORM
            </h1>

            <h2 className="ml-10 text-2xl leading-[1.4]">
                
                Turn any notes, PDFs, or textbook into your personal AI tutor in seconds

            </h2>

            <button onClick={()=>{
                navigate("/signup")
            }} className="px-7 py-4 bg-ocean-blue text-xl text-white mt-7 ml-40 hover:bg-cyan-700 font-semibold rounded-md">
                GET STARTED 
            </button>
        </div>
       <div className="h-full w-full flex justify-center items-center ml-5">
<img src="\Untitled design.png" alt="The SAPIEN img" className="w-full h-full object-cover ml-4 block"/>
</div>
    </div>
  )
}

export default HeroSection
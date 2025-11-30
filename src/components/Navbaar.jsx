import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbaar = () => {
    const navigate= useNavigate();
  return (
    <div> 
    <nav className='h-16 w-full bg-gray-100 flex items-center fixed top-0 z-50'>
        <Link to="/">
        
        <img src="/SAPIEN_FINAL_LOGO.png" alt="sapien logo" className='h-full size-16 ml-4' />
        
</Link>
<div className='flex-1 flex justify-center gap-12'>
<div className='flex justify-center items-center hover:text-slate-700'>
    <Link to="/">
    Home

    </Link>
</div>

<div className='flex justify-center items-center'>
    <Link to='/explore'>
   Explore
    </Link>
</div>

<div className='flex justify-center items-center hover:text-slate-700'>
    <Link to="/learnhub">
    Learn Hub

    </Link>
</div>

<div className='flex justify-center items-center hover:text-slate-700'>
    <Link to="/communitypulse">
    Community Pulse

    </Link>
</div>
<div className='flex justify-center items-center hover:text-slate-700'>
    <Link to="/creatorstudio">
    Creator Studio

    </Link>
</div>

<div className='flex justify-center items-center hover:text-slate-700'>
    <Link to="/insights">
    Insights

    </Link>
</div>
</div>

<div className=' mr-3 flex items-center gap-4'>

    <Link to="/signup">
Join us
</Link>



<button onClick={()=>{
  navigate("/signin")  
}} 

className='bg-ocean-blue px-4 py-2 rounded-3xl text-white hover:bg-cyan-700 font-bold'> Sign in</button>




</div>
</nav>

    </div>
  )
}

export default Navbaar
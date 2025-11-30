

const Section = ( props) => {
  return (
   
   
   <div className='bg-softgray h-52 w-96 rounded-2xl mb-5 shadow-md hover:translate-y-2 hover:shadow-2xl transition-all duration-100'>
<div  className=" h-full flex justify-center items-center text-xl font-semibold">
<h1>{props.data}</h1>

</div>
    </div>
  )
}

export default Section
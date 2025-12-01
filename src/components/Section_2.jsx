import React from 'react'

const Section_2 = (props) => {
  return (
    <div
      className="
        group relative h-64 w-4/12 rounded-lg mt-14 ml-9
        overflow-hidden
        cursor-pointer
        hover:scale-95
        hover: translate-y-2
        transition-transform duration-300 ease-out
        hover:shadow-2xl
        hover:shadow-slate-600
      "
    >
    
      <div
        className="
          absolute inset-0 bg-cover bg-center opacity-100
          transition-opacity duration-500
          group-hover:opacity-0
        "
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>

    
      <div
        className="
          absolute inset-0 flex justify-center items-center
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          p-4 text-center bg-white
        "
      >
        <p className="text-2xl font-medium text-black">
          {props.heading}
        </p>
      </div>
    </div>
  )
}

export default Section_2

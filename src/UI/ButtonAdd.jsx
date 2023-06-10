import React from 'react'

function ButtonAdd({onClick, title}) {
  return (
    <button 
        type="button" 
        className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-slate-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs ml-5"
        onClick={onClick}
        >{title}</button>
  )
}

export default ButtonAdd
import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-[2] w-full h-screen'>
      <nav className="absolute text-xl top-[5%] flex justify-center text-zinc-600 py-10 w-full font-semibold ">
        Documents
      </nav>
      <h1 className="absolute text-[14vw] leading-none tracking-tighter font-semibold left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]  text-zinc-1000 ">
        Docs.
      </h1>
    </div>
  );
}

export default Background
import React from 'react'
import Lottie from 'lottie-react';
import UnderconstructionAnimation from './assets/animations/underconstruct.json'

const App = () => {
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <div className='w-1/2 md:w-1/6'>
        <Lottie animationData={UnderconstructionAnimation} loop={true} width={200} />
      </div>
      <div className='max-w-xl text-center mt-5'>
        <h2 className='font-bold text-2xl'>Silena ID</h2>
        <p className='text-gray-700'>Underconstruction</p>
      </div>
    </main>
  )
}

export default App
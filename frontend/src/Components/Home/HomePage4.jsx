import React from 'react'
import HomePage2 from './HomePage2'
// import HomePage4Card from './HomePage4Card'

function BrowseTopCategory() {
  return (
    <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8'>
        <div className='py-20 px-20 text-center'>
            <h1 className='text-4xl font-bold pb-10'>
                Browse From Top Categories
            </h1>
            <p className='text-xl'>
            The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.
            </p>
        <div className="flex justify-center flex-wrap">
                <HomePage2 />
                <HomePage2 />
                <HomePage2 />
                <HomePage2 />
                <HomePage2 />
                <HomePage2 />
            </div>
        </div>
    </div>
  )
}

export default BrowseTopCategory
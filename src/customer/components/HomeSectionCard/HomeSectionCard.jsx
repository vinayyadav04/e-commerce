import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-column item-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>

            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full'src="https://m.media-amazon.com/images/I/61KG1+Y5KmL._AC_UL320_.jpg" alt="" />

            </div>
            <div className='p-4'>
                <h3 className='text-lg  font-medium text-gray-900'>Puma</h3>
                <p className='mt-2 text-sm text-gray-500'>Ess Polo T-shirt</p>
            </div>
    </div>
  )
}

export default HomeSectionCard
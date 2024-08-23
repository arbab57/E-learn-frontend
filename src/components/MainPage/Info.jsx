import React from 'react'

const Info = () => {
  return (
    <div className='flex justify-center mb-28'>
        <div className="w-[70%] flex gap-7">
        <div className="w-64 h-40 bg-[#e7e5e5] rounded-2xl">
            <div className="flex gap-3 flex-col justify-center items-center h-full">
                <h1 className='text-[#0DAFE6] text-2xl'>10K +</h1>
                <p className='font-medium'>Active Students</p>
            </div>
        </div>
        <div className="w-64 h-40 bg-[#e7e5e5] rounded-2xl">
            <div className="flex gap-3 flex-col justify-center items-center h-full">
                <h1 className='text-[#0DAFE6] text-2xl'>301</h1>
                <p className='font-medium'>Total Courses</p>
            </div>
        </div>
        <div className="w-64 h-40 bg-[#e7e5e5] rounded-2xl">
            <div className="flex gap-3 flex-col justify-center items-center h-full">
                <h1 className='text-[#0DAFE6] text-2xl'>88</h1>
                <p className='font-medium'>Mentors</p>
            </div>
        </div>
        <div className="w-64 h-40 bg-[#e7e5e5] rounded-2xl">
            <div className="flex gap-3 flex-col justify-center items-center h-full">
                <h1 className='text-[#0DAFE6] text-2xl'>100%</h1>
                <p className='font-medium'>Satification Ratio</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Info
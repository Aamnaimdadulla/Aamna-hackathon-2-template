import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { LuSprout } from "react-icons/lu";
export const Delivery = () => {
  return (
       <div>
          <h1 className=' text-center  text-2xl'>What makes our brand different</h1>
    <div className='w-full sm:h-[500px] lg:h-[300px] flex justify-center items-center'>

      <div className='sm:w-full lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4'>

        {/* box one */}
        <div className=' w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
          <div className='w-[50px] h-[130px]   flex justify-center invalid:items-center '>
            <TbTruckDelivery className="text-4xl text-black-800 pt-2" />
          </div>

          <div>
            <h1 className=' font-bold '>Next day as standard </h1>
            <p className='text-sm'> Order before 3pm and get your order 
              the next day as standard </p>
          </div>
        </div>



      {/* box two */}
      <div className=' w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
          <div className='w-[50px] h-[130px]   flex justify-center invalid:items-center '>
            <IoIosCheckmarkCircleOutline  className="text-4xl text-black-800 pt-2" />
          </div>

          <div>
            <h1 className=' font-bold '>Next day as standard </h1>
            <p className='text-sm'> Order before 3pm and get your order 
              the next day as standard </p>
          </div>
        </div>

       

       {/* box three */}
       <div className=' w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
          <div className='w-[50px] h-[130px]   flex justify-center invalid:items-center '>
            <PiShoppingBagOpenBold className="text-4xl text-black-800 pt-2" />
          </div>

          <div>
            <h1 className=' font-bold '>Next day as standard </h1>
            <p className='text-sm'> Order before 3pm and get your order 
              the next day as standard </p>
          </div>
        </div>



      {/* box four */}
      <div className=' w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
          <div className='w-[50px] h-[130px]   flex justify-center invalid:items-center '>
            <LuSprout className="text-4xl text-black-800 pt-2" />
          </div>

          <div>
            <h1 className=' font-bold '>Next day as standard </h1>
            <p className='text-sm'>  Order before 3pm and get your order 
            the next day as standard </p>
          </div>
        </div>


      </div>
    </div>
    </div>
  )
}
















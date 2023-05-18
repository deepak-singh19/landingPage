import React from 'react';
import Logo from '../assets/Vector Smart Object.png';

const Footer = () => {
  return (
    <>
    <div className='hidden md:flex md:flex-col'>
        <div className='flex flex-row bg-black w-full'>
        <div className='flex flex-col px-[70px] py-[30px] w-3/12'>

            <div className='flex '>
                <h1 className='text-white text-lg font-light opacity-75'>Best Solution from</h1>
            </div>

            <div className='pt-[20px]'>
                <img src={Logo} alt='Logo' className='md:w-auto h-auto' />
            </div>

        </div>

        <div className='flex flex-col px-[70px] py-[30px] w-3/12 justify-between'>

            <div className='flex w-[250px]'>
                <h1 className='text-white text-base font-light opacity-75'>DOL MAX Overlaminates Films</h1>
            </div>

            <div>
            <h1 className='text-white text-base font-light opacity-75'>Why Us?</h1>
            </div>

            <div>
            <h1 className='text-white text-base font-light opacity-75'>Enquire Now</h1>
            </div>

        </div>

        <div className='flex flex-col px-[70px] py-[30px] w-3/12'>

            <div className='flex py-[2px]  '>
                <h1 className='text-xs font-light text-[#727272]'>Avery Dennison Overlaminates</h1>
            </div>

            <div className='flex py-[2px] '>
            <h1 className='text-xs font-light text-[#727272]'>Avery Dennison Overlaminates Films</h1>
            </div>

            <div className='w-[250px] flex py-[2px] '>
            <h1 className='text-xs font-light text-[#727272]'>Avery Dennison Overlaminates Digital Films</h1>
            </div>

            <div className='flex py-[2px] '>
            <h1 className='text-xs font-light text-[#727272]'>Avery Dennison Overlaminates Max</h1>
            </div>

        </div>


        <div className='flex flex-col px-[70px] py-[30px] w-3/12'>

            <div className='flex py-[2px] '>
                <h1 className='text-xs font-light text-[#727272]'>Overlaminates</h1>
            </div>

            <div className='flex py-[2px] '>
            <h1 className='text-xs font-light text-[#727272]'>Overlaminates Films</h1>
            </div>

            <div className='flex py-[2px] '>
            <h1 className='text-xs font-light text-[#727272]'>Overlaminates Digital Films</h1>
            </div>

        </div>
    </div>
    <div className='flex justify-center items-center bg-white w-[full] h-[50px]'>

        <h1 className='text-xs text-[#848484]'>© 2023 Avery Dennison Label Packaging Material. All rights reserved.</h1>

        
    </div>

    </div>


    {/* Mobile */}

    <div className='md:hidden flex flex-col h-[300px]'>
        <div className='flex flex-row bg-black w-full h-[300px]'>

        <div className='flex flex-col pl-[15px] pr-[10px] py-[30px] justify-between w-6/12'>

            <div className='flex '>
                <h1 className='text-white text-xs font-light opacity-75'>DOL MAX Overlaminates Films</h1>
            </div>

            <div>
            <h1 className='text-white text-xs font-light opacity-75'>Why Us?</h1>
            </div>

            <div>
            <h1 className='text-white text-xs font-light opacity-75'>Enquire Now</h1>
            </div>

            <div className=''>
                <img src={Logo} alt='Logo' className='w-[150px] h-auto' />
            </div>

        </div>

        <div className='flex flex-col px-[10px] py-[30px] w-5/12'>

            <div className='flex py-[2px]  '>
                <h1 className='text-[8px] font-normal text-[#727272]'>Avery Dennison Overlaminates</h1>
            </div>

            <div className='flex py-[2px] '>
            <h1 className='text-[8px] font-normal text-[#727272]'>Avery Dennison Overlaminates Films</h1>
            </div>

            <div className='w-[250px] flex py-[2px] '>
            <h1 className='text-[8px] font-normal text-[#727272]'>Avery Dennison Overlaminates Digital Films</h1>
            </div>

            <div className='flex py-[2px] '>
            <h1 className='text-[8px] font-normal text-[#727272]'>Avery Dennison Overlaminates Max</h1>
            </div>

            <div className='flex py-[2px] '>
                <h1 className='text-[8px] font-normal text-[#727272]'>Overlaminates</h1>
            </div>

            <div className='flex py-[2px] '>
            <h1 className='text-[8px] font-normal text-[#727272]'>Overlaminates Films</h1>
            </div>

            <div className='flex py-[2px] '>
            <h1 className='text-[8px] font-normal text-[#727272]'>Overlaminates Digital Films</h1>
            </div>

        </div>


    </div>
    <div className='flex justify-center items-center bg-white w-[full] h-[50px]'>

        <h1 className='text-[8px] text-[#848484]'>© 2023 Avery Dennison. All rights reserved.</h1>

        
    </div>

    </div>


    </>
  )
}

export default Footer;
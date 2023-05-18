import React from 'react';
import Img from '../assets/Group 218.png';
import Img1 from '../assets/Mask Group 1.png';
import {TbPointFilled} from 'react-icons/tb';
import {MdOutlineArrowRightAlt} from 'react-icons/md';


const fData = [{
    id: 1,
    desc: 'Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.',
},

{
    id: 2,
    desc: 'The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.',
},
{
    id: 3,
    desc: 'Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.'
}

]



const Feature = () => {
  return (
    <>
    <div className='hidden md:flex md:relative md:w-full'>
        <div className='w-full h-full'>
            <img className='w-full h-[550px]' src={Img} alt='hero'/>
        </div>


        {/* ABSOLUTE */}

        <div className="flex flex-col absolute w-5/12 left-[80px] top-[50px]">
            <div className='flex mt-[50px]'>
                <h1 className='text-4xl font-semibold'>DOL Max Overlaminate Films</h1>
            </div>
            <div className='flex w-[500px] mt-[10px] aktifoa'>
                <h1 className='text-sm font-light'>Printed graphics deserve maximum protection, DOL Max is the solution.</h1>
            </div>



            <div className='flex flex-col justify-between w-[450px] mt-[30px] '>

                <div>
                    <h1 className='text-sm font-semibold'>Features & Benefits:</h1>
                </div>

                {
                    fData.map((d)=>(
                        <div key={d.id} className='flex flex-row my-[8px] '>

                            <div className='flex justify-center items-start pt-[4px]'><TbPointFilled size={'0.7em'}/></div>
                            <div className='text-sm font-light pl-[4px]'>{d.desc}</div>
                            


                        </div>
                    ))
                }

            

            </div>

            <div className='border px-[20px] py-[5px] w-[200px] bg-[#F26621] rounded-lg mt-[50px]'>
                <button className='flex flex-row justify-center items-center'><span className='flex justify-center text-white text-base font-medium'>Inquire now</span> <MdOutlineArrowRightAlt size={'1.8em'} className='text-white pt-[3px] ml-[15px]'/></button>
            </div>

        </div>


    </div>


    {/* Mobile */}

    <div className='md:hidden flex relative w-full h-[900px]'>
        <div className='w-full h-full'>
            <img className='w-full h-[900px]' src={Img1} alt='hero'/>
        </div>


        {/* ABSOLUTE */}
        <div className="flex flex-col absolute w-5/12 left-[20px] top-[20px]">
            <div className='flex mt-[50px] w-[300px]'>
                <h1 className='text-xl font-semibold'>DOL Max Overlaminate Films</h1>
            </div>
            <div className='flex w-[330px] mt-[10px] aktifoa'>
                <h1 className='text-sm font-light'>Printed graphics deserve maximum protection, DOL Max is the solution.</h1>
            </div>



            <div className='flex flex-col justify-between w-[450px] mt-[30px] '>

                <div>
                    <h1 className='text-sm font-semibold'>Features & Benefits:</h1>
                </div>

                {
                    fData.map((d)=>(
                        <div key={d.id} className='flex flex-row my-[8px] w-[300px] '>

                            <div className='flex justify-center items-start pt-[4px]'><TbPointFilled size={'0.7em'}/></div>
                            <div className='text-sm font-light pl-[4px]'>{d.desc}</div>
                            


                        </div>
                    ))
                }

            

            </div>

            <div className='border px-[20px] py-[5px] w-[170px] bg-[#F26621] rounded-lg mt-[50px]'>
                <button className='flex flex-row justify-center items-center'><span className='flex justify-center text-white text-sm font-medium'>Inquire now</span> <MdOutlineArrowRightAlt size={'1.8em'} className='text-white pt-[3px] ml-[15px]'/></button>
            </div>

        </div>


    </div>
    </>
  )
}

export default Feature
import React from 'react';
import Car from '../assets/banner image copy.png';
import Car2 from '../assets/Car3.png'; 
import Logo from '../assets/Asset 3@4x-8@2x.png';
import ML1 from '../assets/Group 194@2x.png';
import ML2 from '../assets/Group 195@2x.png';
import ML3 from '../assets/Asset 2ne@2x.png';

const Top = () => {
  return (
    <>
    <div className='hidden md:flex md:relative md:w-full'>
        <div className='w-full h-full'>
            <img className='w-full  md:h-[600px]' src={Car} alt='hero'/>
        </div>


        {/* ABSOLUTE */}

        <div className="flex flex-col absolute w-5/12 left-[80px] top-[50px]">
            <div className='flex mt-[10px]'>
                <img className='w-[200px] h-[60px]' src={Logo} alt='Logo' />
            </div>
            <div className='flex w-[500px] mt-[75px] aktifoa'>
                <h1 className='text-4xl font-semibold'>Take your graphics protection to the next level with DOL Max overlaminates</h1>
            </div>

            <div className='flex mt-[37px] w-[350px]'>
                <h1 className='text-2xl font-light'>Pair with MPI 1105 wrapping film for ramped up protection</h1>
            </div>

            <div className='flex justify-between w-[400px] mt-[50px] '>

            <div className='flex flex-col'>
            <div className='flex bg-black w-[60px] h-[60px] justify-center items-center rounded-full'>
                <img className='w-[30px] h-[40px]' src={ML1} alt='Logo' />
            </div>
            <div className='w-[60px] h-[60px]'>
                <h1 className='text-sm font-light text-[#5D5D5D] text-center'>Maximum Durability</h1>
            </div>
            </div>

            <div className='flex flex-col'>
            <div className='flex bg-black w-[60px] h-[60px] justify-center items-center rounded-full'>
                <img className='w-[30px] h-[40px]' src={ML2} alt='Logo' />
            </div>
            <div className='w-[60px] h-[60px]'>
                <h1 className='text-sm text-[#5D5D5D] text-center'>Enhanced Appearance</h1>
            </div>
            </div>

            <div className='flex flex-col'>
            <div className='flex bg-black w-[60px] h-[60px] justify-center items-center rounded-full'>
                <img className='w-[30px] h-[40px]' src={ML2} alt='Logo' />
            </div>
            <div className='w-[70px] h-[60px]'>
                <h1 className='text-sm text-[#5D5D5D] text-center'>High Gloss Finish</h1>
            </div>
            </div>

            </div>

        </div>


    </div>


    {/* Mobile */}

    <div className='flex relative w-full md:hidden'>
        <div className='w-full h-full'>
            <img className='w-full' src={Car2} alt='hero' />
        </div>


        {/* ABSOLUTE */}

        <div className="flex flex-col absolute left-[20px] top-[10px] ">
            <div className='flex mt-[10px]'>
                <img className='w-[120px] h-[40px]' src={Logo} alt='Logo' />
            </div>
            <div className='flex w-[280px] mt-[25px] aktifoa'>
                <h1 className='text-xl font-bold'>Take your graphics protection to the next level with DOL Max overlaminates</h1>
            </div>

            <div className='flex mt-[17px] w-[220px]'>
                <h1 className='text-base font-light'>Pair with MPI 1105 wrapping film for ramped up protection</h1>
            </div>

            <div className='flex justify-between w-[170px] mt-[20px] '>

            <div className='flex flex-col w-[30px] '>
            <div className='flex bg-black w-[30px] h-[30px] justify-center items-center rounded-full'>
                <img className='w-[15px] h-[20px]' src={ML1} alt='Logo' />
            </div>
            <div className='flex'>
                <h1 className='text-[8px]'>Maximum Durability</h1>
            </div>
            </div>

            <div className='flex flex-col w-[30px] '>
            <div className='flex bg-black w-[30px] h-[30px] justify-center items-center rounded-full'>
                <img className='w-[15px] h-[20px]' src={ML2} alt='Logo' />
            </div>
            <div className='flex'>
                <h1 className='text-[8px]'>Enhanced Appearance</h1>
            </div>
            </div>

            <div className='flex flex-col w-[30px] '>
            <div className='flex bg-black w-[30px] h-[30px] justify-center items-center rounded-full'>
                <img className='w-[15px] h-[20px]' src={ML3} alt='Logo' />
            </div>
            <div className='flex w-[40px]'>
                <h1 className='text-[8px] text-center'>High Gloss Finish</h1>
            </div>
            </div>

            </div>

        </div>


    </div>

    </>
  )
}

export default Top